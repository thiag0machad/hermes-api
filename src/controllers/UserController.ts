import { createUserService } from '../services/UserService'
import { Response, Request } from 'express'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body)
    return res.status(200).json(user)
  } catch (err) {
    return res.status(400).json(err)
  }
}
