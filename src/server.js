import express from 'express';
import helmet from 'helmet'

import mainRoutes from './main.routes.js';
import userRoutes from './user.route.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet())

app.use('/v1', mainRoutes);
app.use('/v1/users', userRoutes);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})