import { Schema, model} from "mongoose"
import { User } from "../interfaces"

const UserSchema = new Schema<User>({
  name: {
    type: String,
    default: "No user name"
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photoURL: {
    type: String
  }
},{
  timestamps: true,
  versionKey: false
})

const UserModel = model('users',UserSchema)

export { UserModel }