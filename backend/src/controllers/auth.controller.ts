import { Request, Response, NextFunction } from "express"
import { AuthService } from "../services"

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  const response = await AuthService.loginUser(email,password)
  res.json({response})
}

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  const response = await AuthService.registerUser(email,password)
  res.json({response})
}