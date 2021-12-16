import { Response, Request } from "express";
import { Prova } from "../interfaces/provasInterfaces";
import { provaSchemma } from "../schemmas/provaSchemma";
import * as provasService from "../services/provasService";

async function send(req: Request, res: Response) : Promise<Response<any,Record<string,any>>> {
    const provaBody : Prova = req.body;
    try {
        const { error } = provaSchemma.validate(provaBody);
        if(error) return res.sendStatus(400);
        await provasService.send(provaBody);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}



export {
    send
}