import { sendMailModel } from '../models/ContactModel'
import { Response, Request } from 'express'

export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const email = await sendMailModel(req.body)
    return res.status(200).json(email)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
