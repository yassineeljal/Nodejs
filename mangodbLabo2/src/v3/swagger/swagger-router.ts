import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const swaggerRouter = Router();

const swaggerV3 = JSON.parse(
  fs.readFileSync(path.join(__dirname, './swagger.json'), 'utf-8')
);

swaggerRouter.use('/v3', swaggerUi.serve, swaggerUi.setup(swaggerV3));

export default swaggerRouter;
