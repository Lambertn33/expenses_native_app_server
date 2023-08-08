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

const updateExpense = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const { id } = req.params;
    const { amount, date, description } = req.body;
    const expenseToUpdate = await Expense.findByPk(id);
    await expenseToUpdate?.update({
      amount,
      date,
      description,
    });
    return res.status(200).json({ message: "expense updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const deleteExpense = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const { id } = req.params;
    const expenseToDelete = await Expense.findByPk(id);
    await expenseToDelete?.destroy();
    return res.status(200).json({ message: req.params });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense
};
