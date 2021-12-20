import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import * as provasController from './controllers/provasController';


const app = express();
app.use(cors());
app.use(express.json());

export async function init () {
  await connectDatabase();
}

app.post('/prova', provasController.send);
app.get('/prova/:filter',provasController.listByFilter);
app.get('/professores',provasController.listTeacher);
app.get('/disciplinas',provasController.listSubject);
app.get('/professores/:disciplina', provasController.listTeacherBySubject)

export default app;