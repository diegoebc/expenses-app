import { UserModel } from "../models"
import { encodePassword, verifyPassword } from "../utils/auth.utils"

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
  return user
}

export const registerUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({email})
  if(user!==null){
    return 'USER_ALREADY_EXISTS'
  }else {
    const hashPassword = await encodePassword(password)
    const newUser = await UserModel.create({email,password: hashPassword})
    return newUser
  }
}