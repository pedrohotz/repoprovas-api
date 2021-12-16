import { Prova } from "../interfaces/provasInterfaces";
import {getRepository} from 'typeorm';
import Categoria from "../entities/Category";
import ProvaEntity from "../entities/Provas";

async function send(provaBody:Prova) {
    await getRepository(ProvaEntity).insert(provaBody);
}



export {
    send,
}