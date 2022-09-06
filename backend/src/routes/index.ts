import { Router } from "express"
import { authHandler } from "../middlewares/auth.middleware"
import { AuthRoutes } from "./auth.routes"
import { ExpenseRoutes } from "./expense.routes"
import { PrivateRoutes } from "./private.route"

const router = Router()

router.use('/api',authHandler,ExpenseRoutes)
router.use('/auth',AuthRoutes)
router.use('/api/private',PrivateRoutes)



export default router