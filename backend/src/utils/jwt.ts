import { sign, verify  } from "jsonwebtoken"
import config from "../config"

export const generateToken = (payload: any) => {
  const token = sign(payload,config.JWT_SECRET,{
    expiresIn: '2m'
  })
  return token
}

export const verifyToken = async (token: string) => {
  const res = await verify(token,config.JWT_SECRET)
  return res
}