import express from 'express';
import {router as customerRouter} from "./api/customer-router";

const app = express();
app.use('/pos/api/v1/customer', customerRouter);
app.listen(8080, () => console.log("Server has been started at 8080"));