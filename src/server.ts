import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import dbConnection from "./database/db";
import expensesRouter from "./routes/expenses.route";

dotenv.config();

const main = async () => {
  const app = express();
  app.use(bodyParser.json());


  app.use(cors());

  app.use("/expenses", expensesRouter);

  await dbConnection.sync();

  app.listen(process.env.SYSTEM_PORT, () => {
    console.log(`listening on port ${process.env.SYSTEM_PORT}`);
  });
};

main();
