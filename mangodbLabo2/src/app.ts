import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from './config';
import { connectDB } from './config/db';

import v3Routes from './v3/routes';

import swaggerRouterV3 from './v3/swagger/swagger-router';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/v3', v3Routes);

app.use('/api-docs', swaggerRouterV3);

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
  console.log(`Swagger v3:      http://localhost:${config.port}/api-docs/v3`);
});
