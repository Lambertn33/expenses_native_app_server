import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { Expense } from "../models/expense.model";
import { ExpenseInterface } from "../interfaces/Expense";

const getExpenses = async (
  _: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const expenses = await Expense.findAll({
    attributes: ["id", "amount", "date", "description"],
  });
  return res.status(200).json({ expenses });
};

const createExpense = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const { amount, description, date } = req.body;
  const newExpense: ExpenseInterface = {
    id: uuidV4(),
    amount,
    date,
    description,
  };
  await Expense.create(newExpense);
  return res.status(201).json({ message: "expense created successfully" });
};

export default {
  getExpenses,
  createExpense,
};
