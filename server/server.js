import express from 'express';
import { http } from './graphql/http';

const app = express();
app.use('/graphql', http);
app.use(express.static('assets'));

export default app;