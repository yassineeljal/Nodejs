import * as path from 'path';
import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.join(process.cwd(), `.env.${env}`) });

export const config = {
  env,
  port: Number(process.env.PORT || 3000),
  mongodbUri: process.env.MONGODB_URI
};
