import { contactService } from '../services/contact'
import { Response, Request } from 'express'

export const contactController = async (req: Request, res: Response) => {
  try {
    const email = await contactService(req.body)
    return res.status(200).json(email)
  } catch (err) {
    return res.status(400).json(err)
  }
}
