import { Router } from "express"
import { AuthRoutes } from "./auth.routes"
import { ExpenseRoutes } from "./expense.routes"
import { PrivateRoutes } from "./private.route"

const router = Router()

router.use('/api',ExpenseRoutes)
router.use('/api/auth',AuthRoutes)
router.use('/api/private',PrivateRoutes)



export default router