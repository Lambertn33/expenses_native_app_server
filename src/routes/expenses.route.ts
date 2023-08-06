import { Router } from "express";

import expensesController from "../controllers/expenses.controller";

const router = Router();

router.get("/", expensesController.getExpenses);

router.post("/", expensesController.createExpense);

export default router;
