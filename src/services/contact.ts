import { contactModel } from '../models/contact'

interface Email {
  name: string
  email: string
  body: string
}

export const contactService = async ({ name, email, body }: Email) => {
  try {
    return contactModel({ name, email, body })
  } catch (err) {
    console.log(err)
  }
}
