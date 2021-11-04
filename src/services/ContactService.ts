import { sendMailModel } from '../models/ContactModel'

export const sendEmailService = async ({ name, email, body }: Email) => {
  try {
    return sendMailModel({ name, email, body })
  } catch (err) {
    console.log(err)
  }
}
