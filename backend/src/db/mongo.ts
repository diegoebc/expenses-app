import mongoose from "mongoose";
import config from "../config"

const initMongoDB = () => {
  return new Promise(async (resolve,reject) => {
    try {
      await mongoose.connect(config.MONGO_URI)
      resolve(`Mongo succesfully connected`)
    } catch (error) {
      reject(`Fail mongo connection, please set MONGO_URI environment variable`) 
    }
  })
}


export { initMongoDB }