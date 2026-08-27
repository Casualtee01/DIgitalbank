import express from "express";
import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./config/typeorm.config.js";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  const dataSource = AppDataSource.initialize()
    .then(() => {
      console.log("data source initialized");
    })
    .catch((err) => console.log(`failed to init data source due to ${err.message}`));
  console.log(`Example app listening on port ${port}`);
});
