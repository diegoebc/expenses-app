import { Request, Response, NextFunction} from "express"
import { verifyToken } from "../utils/jwt"

export const authHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.split(' ').pop()
    const isVerified = await verifyToken(`${token}`)
    next()
  } catch (error) {
    res.status(401).json('USER_NOT_AUTHENTICATED')
  }
}