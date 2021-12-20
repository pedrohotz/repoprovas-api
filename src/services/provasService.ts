import { DisciplinaBody, Prova, ProvaBody } from "../interfaces/provasInterfaces";
import {getManager, getRepository} from 'typeorm';
import ProvaEntity from "../entities/Provas";
import Disciplina from "../entities/Disciplinas";
import Professor from "../entities/Professor";
import { ProfessorBody, ProfessorBySubject } from "../interfaces/professorInterface";


async function send(provaBody:Prova) : Promise <boolean>{
    const {
        Name,
        CategoryId,
        Prof_DiscId,
        Link
    } = provaBody;

    const checkExistent = await getRepository(ProvaEntity).find({
        where:{ Name: Name, Prof_DiscId: Prof_DiscId }
    })
    if(checkExistent.length > 0){
        return null;
    }
    await getRepository(ProvaEntity).insert(provaBody);
    return true;
}


async function listByFilter(filter:string) : Promise <ProvaBody[]> {
    const query = `SELECT provas."Name",categorias."Name" AS Categoria,professores."Name" AS Professor,disciplinas."Name" as Disciplina,provas."Link" FROM provas JOIN categorias ON provas."CategoryId" = categorias."Id" JOIN prof_disc ON provas."Prof_DiscId" = prof_disc."Id" JOIN professores ON prof_disc."ProfessorId" = professores."Id" JOIN disciplinas ON prof_disc."DisciplinaId" = disciplinas."Id" WHERE`

   const isProfessor = await getRepository(Professor).find({
       where:{
           Name: filter
       }
   });
   const isSubject = await getRepository(Disciplina).find({
       where:{
           Name: filter
       }
   })


   if(isProfessor.length > 0){
        const result = await getManager().query(
        `${query} professores."Name" = $1`, [filter]
    )
    if(result.length === 0) return null;
    return result;
   }
   if(isSubject.length > 0){
        const result = await getManager().query(
        `${query} disciplinas."Name" = $1;`, [filter]
    )
    if(result.length === 0) return null;
    return result;
   }
}


async function listTeacher() : Promise<ProfessorBody[]>{
    const result = await getRepository(Professor).find();
    if(result.length === 0) return null;
    return result;
}

async function listSubject() : Promise<DisciplinaBody[]>{
    const result = await getRepository(Disciplina).find();
    if(result.length === 0) return null;
    return result;
}

async function listTeacherBySubject(subject:string) : Promise<ProfessorBySubject[]>  {
    const subjectData = await getRepository(Disciplina).findOne({
        where: {
            Name: subject
        }
    })
    const subjectId = subjectData.getId();
    const result = await getManager().query(`SELECT professores."Name" from prof_disc JOIN professores ON prof_disc."ProfessorId" = professores."Id" WHERE prof_disc."DisciplinaId" = $1;`,[subjectId])
    if(result.length === 0) return null;
    return result;
}

export {
    send,
    listByFilter,
    listTeacher,
    listSubject,
    listTeacherBySubject,
}