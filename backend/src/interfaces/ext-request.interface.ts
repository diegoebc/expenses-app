import { JwtPayload } from "jsonwebtoken";
import { Request } from "express"

interface MyJWTPayload extends JwtPayload{
  id?: string
}

export interface ExtRequest extends Request {
  user?: MyJWTPayload;
}