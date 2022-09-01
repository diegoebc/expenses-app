import { compare, hash } from "bcryptjs"

export const verifyPassword = async (plainPassword: string, hashPassword: string ) => {
  const isValid = await compare(plainPassword,hashPassword)
  return isValid
}

export const encodePassword = async (plainPassword: string) => {
  const hashPassword = await hash(plainPassword,8)
  return hashPassword
}