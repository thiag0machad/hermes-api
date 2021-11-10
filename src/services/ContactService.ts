import { sendMailModel } from '../models/ContactModel'

export const sendEmailService = async ({ name, email, body }: Email) => {
  try {
    return sendMailModel({ name, email, body })
  } catch (err) {
    throw new Error(err)
  }
}
