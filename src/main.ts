import express, {json} from 'express';
import {router as customerRouter} from "./api/customer-router";
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors());
app.use('/pos/api/v1/customer', customerRouter);
app.listen(8080, () => console.log("Server has been started at 8080"));