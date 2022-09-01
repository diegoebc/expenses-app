import { Request, Response, NextFunction } from "express"

export const errorHandler = (err: string, req: Request, res: Response, next: NextFunction) => {
  res
  .status(res.statusCode || 500)
  .json({
    err: err || 'Internal Server Error'
  })
}