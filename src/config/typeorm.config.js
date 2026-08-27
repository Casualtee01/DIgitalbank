import { DataSource } from "typeorm";
import path from "node:path";

const currentDir = import.meta.dirname;

const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseName = process.env.DATABASE_NAME;
const databasePort = process.env.DATABASE_PORT;
const databaseHost = process.env.DATABASE_HOST;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: databaseHost,
  port: databasePort,
  username: databaseUser,
  password: databasePassword,
  database: databaseName,
  logging: true,
  entities: [path.join(currentDir, "../entities/**/*{.js}")],
  migrations: [path.join(currentDir, "../../migration/**/*{.js}")],
});
