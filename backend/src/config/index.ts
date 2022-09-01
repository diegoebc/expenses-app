import dotenv from "dotenv"

dotenv.config()

console.log('ejecutando config')

export default{
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI || ''
}