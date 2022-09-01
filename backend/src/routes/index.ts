import { Router } from "express"
import { ExpenseRoutes } from "./expense.routes"
const router = Router()

router.use('/api',ExpenseRoutes)



export default router