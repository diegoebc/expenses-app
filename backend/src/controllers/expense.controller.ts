import { NextFunction, Request, Response} from "express"
import { ExpenseModel } from "../models/expense.model"
import { ExpenseService } from "../services"

export const getAll = async (req: Request,res: Response, next: NextFunction) => {
  try {
    const expenses = await ExpenseService.getAllExpenses()
    res.status(200).json({expenses})
  } catch (err) {
    next('ERROR_EXPENSE_GET_ALL')
  }
}

export const postOne = async (req: Request,res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const expense = await ExpenseService.createExpense(body)
    res.status(201).json({expense})   
  } catch (error) {
    next('ERROR_EXPENSE_POST_ONE')
  }
}

export const getOne = async ({params}: Request,res: Response, next: NextFunction) => {
  try {
    const { id } = params
    const expense = await ExpenseService.getExpenseById(id)
    res.status(200).json({expense})
  } catch (error) {
    next('ERROR_EXPENSE_GET_ONE')
  }
}

export const updateOne = async ({params,body}: Request,res: Response, next: NextFunction) => {
  try {
    const { id } = params
    const expense = await ExpenseService.updateExpense(id,body)
    res.status(200).json({expense})
  } catch (error) {
    next('ERROR_EXPENSE_UPDATE_ONE')
  }
}

export const removeOne = async ({params}: Request,res: Response, next: NextFunction) => {
  try {
    const { id } = params
    const expense = await ExpenseService.removeExpense(id)
    res.status(200).json({expense})
  } catch (error) {
    next('ERROR_EXPENSE_REMOVE_ONE')
  }
}