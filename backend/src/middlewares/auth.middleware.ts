import { Request, Response, NextFunction} from "express"
import { ExtRequest } from "../interfaces"
import { verifyToken } from "../utils/jwt"

export const authHandler = async (req: ExtRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.split(' ').pop()
    const user = await verifyToken(`${token}`) as { id: string }
    console.log(user)
    req.user = user;
    next()
  } catch (error) {
    res.status(401).json('USER_NOT_AUTHENTICATED')
  }
}