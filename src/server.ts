import express, { response } from 'express';
import 'reflect-metadata';
import "./database";
import { router } from './router';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Server is running and pretty!'));