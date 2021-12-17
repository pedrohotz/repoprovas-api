import { Prova } from "../interfaces/provasInterfaces";
import {getRepository} from 'typeorm';
import Categoria from "../entities/Category";
import ProvaEntity from "../entities/Provas";

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



export {
    send,
}