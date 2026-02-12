// src/config/postgres.config.ts
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
export const postgresConfig = (): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),

  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASS ?? '',

  database: process.env.DB_NAME ?? 'toshstack',

  synchronize: false,
  logging: process.env.NODE_ENV === 'development',

  entities: [
    process.env.NODE_ENV === 'production'
      ? 'dist/**/*.entity.js'
      : 'src/**/*.entity.ts',
  ],

  migrations: [
    process.env.NODE_ENV === 'production'
      ? 'dist/database/migrations/*.js'
      : 'src/database/migrations/*.ts',
  ],
});
export const AppDataSource = new DataSource(postgresConfig());
