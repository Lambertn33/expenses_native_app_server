import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import dbConnection from "./database/db";

dotenv.config();

const main = async () => {
  const app = express();

  app.use(cors());

  await dbConnection.sync();

  app.listen(process.env.SYSTEM_PORT, () => {
    console.log(`listening on port ${process.env.SYSTEM_PORT}`);
  });
};

main();
