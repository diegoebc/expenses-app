import { Schema, model} from "mongoose"
import { Expense } from "../interfaces/expense.interface"

const ExpenseSchema = new Schema<Expense>({
 description: {
  type: String,
  required: true
 },
 amount: {
  type: Number,
  required: true
 },
 paid: {
  type: Boolean,
  required: true
 },
 userId: {
  type: String,
  required: true
 }
},{
  timestamps: true,
  versionKey: false
})

const ExpenseModel = model('expenses',ExpenseSchema)

export { ExpenseModel } 

