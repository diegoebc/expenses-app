import { NextFunction, Request, Response} from "express"
import { ExtRequest } from "../interfaces"
import { UserModel } from "../models"
import { ExpenseModel } from "../models/expense.model"
import { ExpenseService } from "../services"
import { updateExpense } from "../services/expense.service"

export const getAll = async (req: ExtRequest,res: Response, next: NextFunction) => {
  try {
    const expenses = await ExpenseService.getAllExpenses(`${req.user?.id}`)
    res.status(200).json({expenses})
    next()
  } catch (err) {
    next('ERROR_EXPENSE_GET_ALL')
  }
}

export const postOne = async (req: ExtRequest,res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const data = {
      ...body,
      userId: req.user?.id
    }
    const expense = await ExpenseService.createExpense(data)
    res.status(201).json({expense})   
  } catch (error) {
    next('ERROR_EXPENSE_POST_ONE')
  }
}

export const getOne = async (req: ExtRequest,res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const expense = await ExpenseService.getExpenseById(id)
    if(expense && expense.userId === req.user?.id){
      res.status(200).json({expense})
    }else{
      next('EXPENSE_NOT_FOUND')
    }
    
  } catch (error) {
    next('EXPENSE_NOT_FOUND')
  }
}

export const updateOne = async (req: ExtRequest,res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const expenseFound = await ExpenseService.getExpenseById(id)
    if(expenseFound && expenseFound.userId === req.user?.id){
      const updatedExpense = await ExpenseService.updateExpense(id,req.body)
      res.status(200).json({expense: updatedExpense})
    }else{
      next('EXPENSE_NOT_FOUND')
    }
    
  } catch (error) {
    next('ERROR_EXPENSE_UPDATE_ONE')
  }
}

export const removeOne = async (req: ExtRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const expenseFound = await ExpenseService.getExpenseById(id)
    if(expenseFound && expenseFound.userId === req.user?.id){
      const expense = await ExpenseService.removeExpense(id)
      res.status(200).json({expense})
    }else{
      next('EXPENSE_NOT_FOUND')
    }
  } catch (error) {
    next('ERROR_EXPENSE_REMOVE_ONE')
  }
}