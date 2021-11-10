import {
  createUserModel,
  deleteUserModel,
  readUsersModel,
  updateUserModel
} from '../models/UsersModel'

export const createUserService = ({ name, email, password }: User) => {
  try {
    return createUserModel({ name, email, password })
  } catch (err) {
    throw new Error(err)
  }
}

export const readUsersService = () => {
  try {
    return readUsersModel()
  } catch (err) {
    throw new Error(err)
  }
}

export const updateUserService = (
  id: string,
  { name, email, password }: User
) => {
  try {
    return updateUserModel(id, { name, email, password })
  } catch (err) {
    throw new Error(err)
  }
}

export const deleteUserService = (id: string) => {
  try {
    return deleteUserModel(id)
  } catch (err) {
    throw new Error(err)
  }
}
