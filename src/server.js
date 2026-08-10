import express from 'express';
import helmet from 'helmet'
import rateLimit from 'express-rate-limit';
import cors from 'cors';

import mainRoutes from './main.routes.js';
import userRoutes from './user.route.js';
import compression from 'compression';

const app = express();
const port = 4000;

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // Limit each IP to 30 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(compression())

app.use(limiter);
app.use(express.json());
app.use(helmet())
app.use(cors());


app.use('/v1', mainRoutes);
app.use('/v1/users', userRoutes);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})