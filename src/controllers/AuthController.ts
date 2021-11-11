import { Response, Request } from 'express'
import { authenticateService } from '../services/AuthService'

export const authenticateController = async (req: Request, res: Response) => {
  try {
    const user = await authenticateService(req.body)
    return res.status(202).json(user)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
