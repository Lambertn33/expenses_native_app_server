import { Sequelize } from "sequelize-typescript";
import { models } from "../models";
import * as dotenv from "dotenv";

dotenv.config();

export default new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  host: process.env.DB_HOST,
  logging: false,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  models: models,
});
