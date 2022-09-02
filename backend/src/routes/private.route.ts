import { Router } from "express"
import { authHandler } from "../middlewares/auth.middleware"

const router = Router()

router.get('/',authHandler,(req,res) => {
  res.json({
    message: 'THIS IS A PRIVATE ROUTE'
  })
})

export { router as PrivateRoutes}