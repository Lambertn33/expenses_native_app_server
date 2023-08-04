import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const main = () => {
  const app = express();
  app.use(cors());

  app.listen(5000, () => {
    console.log("listening on port 5000");
  });
};

main();
