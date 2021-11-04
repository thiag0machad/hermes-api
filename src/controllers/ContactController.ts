import { sendEmailService } from '../services/ContactService'
import { Response, Request } from 'express'

export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const email = await sendEmailService(req.body)
    return res.status(200).json(email)
  } catch (err) {
    return res.status(400).json(err)
  }
}
