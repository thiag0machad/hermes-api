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

export const updateUserService = ({ name, email, password }: User) => {
  try {
    return updateUserModel({ name, email, password })
  } catch (err) {
    console.log(err)
  }
}

export const deleteUserService = ({ name, email, password }: User) => {
  try {
    return deleteUserModel({ name, email, password })
  } catch (err) {
    console.log(err)
  }
}
