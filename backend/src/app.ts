import express from "express";
import cors from "cors"
import config from "./config"
import routes from "./routes"
import { initMongoDB } from "./db/mongo";
import { errorHandler } from "./middlewares/error.middleware";

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

initMongoDB()
  .then((mongoMsg) => {
    console.log(mongoMsg)
    app.listen(config.PORT,() => {
      console.log(`Server running on port ${config.PORT}`)
    })
  })
  .catch(console.log)

    