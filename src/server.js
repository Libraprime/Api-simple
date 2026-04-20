import express from 'express';
// import { StatusCodes } from 'http-status-codes';

import appRoutes from './route.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/v1', appRoutes);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})