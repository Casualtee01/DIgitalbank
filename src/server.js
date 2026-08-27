import express from "express";
import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./config/typeorm.config.js";
import rootRouter from "./router/root.router.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", rootRouter);

app.listen(port, async () => {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log("data source initialized");
    const migrations = await dataSource.runMigrations();
    console.log(`applied ${migrations.length} migration(s)`);
  } catch (err) {
    console.log(`failed to init data source due to ${err.message}`);
  }

  console.log(`Example app listening on port ${port}`);
});
