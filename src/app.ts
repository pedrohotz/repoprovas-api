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
app.get('/prova/:subject',provasController.listBySubject);

export default app;