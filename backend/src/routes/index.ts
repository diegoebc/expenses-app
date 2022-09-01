import { Router } from "express"
import { AuthRoutes } from "./auth.routes"
import { ExpenseRoutes } from "./expense.routes"
const router = Router()

router.use('/api',ExpenseRoutes)
router.use('/api/auth',AuthRoutes)



export default router