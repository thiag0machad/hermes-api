import {
  createUserModel,
  deleteUserModel,
  readUsersModel,
  updateUserModel
} from '../models/UsersModel'
import { Response, Request } from 'express'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserModel(req.body)
    return res.status(201).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export const readUsersController = async (req: Request, res: Response) => {
  try {
    const users = await readUsersModel()
    return res.status(200).json(users)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUserModel(req.params.id, req.body)
    return res.status(201).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserModel(req.params.id)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}
