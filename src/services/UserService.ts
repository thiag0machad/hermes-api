import {
  createUserModel,
  deleteUserModel,
  readUsersModel,
  updateUserModel
} from '../models/UserModel'

export const createUserService = ({ name, email, password }: User) => {
  try {
    return createUserModel({ name, email, password })
  } catch (err) {
    console.log(err)
  }
}

export const readUsersService = () => {
  try {
    return readUsersModel()
  } catch (err) {
    console.log(err)
  }
}

export const updateUserService = (
  id: string,
  { name, email, password }: User
) => {
  try {
    return updateUserModel(id, { name, email, password })
  } catch (err) {
    console.log(err)
  }
}

export const deleteUserService = (id: string) => {
  try {
    return deleteUserModel(id)
  } catch (err) {
    console.log(err)
  }
}
