import express, { json, Request, Response,  } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import ExceptionHandler from './events/AppError';
import index from './routes/index';

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
app.get("/pessoa", (req: Request, res: Response) => {
    const pessoa = {nome: "João", idade: 30};
    res.send(pessoa);
})
app.use(index)
app.use(ExceptionHandler);


export default app;
