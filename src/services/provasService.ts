import { Prova, ProvaBody } from "../interfaces/provasInterfaces";
import {getManager, getRepository} from 'typeorm';
import Categoria from "../entities/Category";
import ProvaEntity from "../entities/Provas";
import Disciplina from "../entities/Disciplinas";


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


async function listBySubject(filter:string) : Promise <ProvaBody[]> {
   const result = await getManager().query(
       `SELECT provas."Name",categorias."Name" AS Categoria,professores."Name" AS Professor,disciplinas."Name" as Disciplina,provas."Link" FROM provas JOIN categorias ON provas."CategoryId" = categorias."Id" JOIN prof_disc ON provas."Prof_DiscId" = prof_disc."Id" JOIN professores ON prof_disc."ProfessorId" = professores."Id" JOIN disciplinas ON prof_disc."DisciplinaId" = disciplinas."Id" WHERE disciplinas."Name" = $1;`, [filter]
   )
   if(result.length === 0) return null;
   return result;
}


export {
    send,
    listBySubject
}