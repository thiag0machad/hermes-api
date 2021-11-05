import {
  createUserService,
  deleteUserService,
  readUsersService,
  updateUserService
} from '../services/UserService'
import { Response, Request } from 'express'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body)
    return res.status(201).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export const readUsersController = async (req: Request, res: Response) => {
  try {
    const users = await readUsersService()
    return res.status(200).json(users)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUserService(req.body)
    return res.status(201).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserService(req.body)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}
