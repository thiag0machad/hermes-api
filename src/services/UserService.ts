import { createUserModel } from '../models/UserModel'

export const createUserService = ({ name, email, password }: User) => {
  try {
    return createUserModel({ name, email, password })
  } catch (err) {
    console.log(err)
  }
}
