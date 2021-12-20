import { Response, Request } from "express";
import { Prova, ProvaBody } from "../interfaces/provasInterfaces";
import { provaSchemma } from "../schemmas/provaSchemma";
import * as provasService from "../services/provasService";

async function send(req: Request, res: Response) : Promise<Response<any,Record<string,any>>> {
    const provaBody : Prova = req.body;
    try {
        const { error } = provaSchemma.validate(provaBody);
        if(error) return res.sendStatus(400);
        const result = await provasService.send(provaBody);
        if(!result) return res.sendStatus(409);
        return res.status(201).send("Prova inserida");

    } catch (error) {
        return res.status(500).send("Internal Error");
    }
}

async function listByFilter(req: Request, res: Response): Promise<Response<any,Record<string,any>>> {
    const filter = req.params.filter;
    try {
        const result = await provasService.listByFilter(filter);
        if(!result) return res.sendStatus(404);
        return res.status(200).send(result)
    } catch (error) {
        res.sendStatus(500);
    }
}


async function listTeacher(req: Request, res: Response) : Promise<Response<any,Record<string,any>>> {
    try {
        const result = await provasService.listTeacher();
        if(!result) return res.sendStatus(404);
        return res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function listSubject(req: Request, res: Response) : Promise<Response<any,Record<string,any>>> {
    try {
        const result = await provasService.listSubject();
        if(!result) return res.sendStatus(404);
        return res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function listTeacherBySubject(req: Request, res: Response) : Promise<Response<any,Record<string,any>>> {
    const subject  = req.params.disciplina;
    try {
        const result = await provasService.listTeacherBySubject(subject);
        if(!result) return res.sendStatus(404);
        return res.send(result).status(200);
    } catch (error) {
        return res.sendStatus(500)
    }
}

async function listProf_DiscId(req: Request, res: Response) : Promise<Response<any,Record<string,any>>> {
    const {professor , disciplina} = req.params;
    try {
        const result = await provasService.listProf_DiscId(professor,disciplina);
        if(!result) return res.sendStatus(404);
        return res.send({id: result}).status(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}


export {
    send,
    listByFilter,
    listTeacher,
    listSubject,
    listTeacherBySubject,
    listProf_DiscId,
}