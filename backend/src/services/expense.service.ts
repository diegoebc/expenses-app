import { Expense } from "../interfaces/expense.interface"
import { ExpenseModel } from "../models"

export const getAllExpenses = async (userId: string) => {
    const expenses = await ExpenseModel.find({userId})
    return expenses
}

export const getExpenseById = async(id: string) => {
    const expense = await ExpenseModel.findById(id)
    return expense
}

export const createExpense = async (expense: Expense) => {
  const newExpense = await ExpenseModel.create(expense)
  return newExpense;
}

export const removeExpense = async (id: string) => {
  const response = await ExpenseModel.findByIdAndDelete(id)
  return response;
}


export const updateExpense = async (id: string, expense: Expense) => {
  const updatedExpense = await ExpenseModel.findOneAndUpdate({_id: id}, expense, { new: true})
  return updatedExpense
}