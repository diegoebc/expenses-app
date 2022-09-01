import { Router } from "express"
const router = Router()
import { ExpenseController } from "../controllers"

router.get('/expenses',ExpenseController.getAll)
router.post('/expenses',ExpenseController.postOne)
router.get('/expenses/:id',ExpenseController.getOne)
router.put('/expenses/:id',ExpenseController.updateOne)
router.delete('/expenses/:id', ExpenseController.removeOne)

export { router as ExpenseRoutes }