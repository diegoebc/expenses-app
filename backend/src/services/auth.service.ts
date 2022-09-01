import { UserModel } from "../models"
import { encodePassword, verifyPassword } from "../utils/auth.utils"
import { generateToken } from "../utils/jwt"

export const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({email})
  if(!user){
    return 'EMAIL_OR_PASSWORD_INVALID'
  }
  const hashPassword = user.password
  const isValid = await verifyPassword(password,hashPassword)
  if(!isValid){
    return 'EMAIL_OR_PASSWORD_INVALID'
  }
  const token = generateToken({email})
  const response = { token, user}
  return response
}

export const registerUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({email})
  if(user!==null){
    return 'USER_ALREADY_EXISTS'
  }else {
    const hashPassword = await encodePassword(password)
    const newUser = await UserModel.create({email,password: hashPassword})
    const token = await generateToken({email})
    const response = { token, newUser }
    return response
  }
}