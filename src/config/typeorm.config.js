import { DataSource } from "typeorm";
import { Account } from "../entities/account.entity.js";
import { Kyc } from "../entities/kyc.entity.js";
import { Customer } from "../entities/customer.entity.js";
import { Transaction } from "../entities/transaction.entity.js";

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
  // synchronize: true,
  logging: true,
  entities: [Account, Kyc, Customer, Transaction],
  subscribers: [],
  migrations: [],
});
