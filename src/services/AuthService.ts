import { authenticateModel } from '../models/AuthModel'
import bcrypt from 'bcryptjs'
import database from '../configs/database'

export const authenticateService = async ({ email, password }: User) => {
  try {
    const user = await database.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new Error('Invalid password')
    }

    return authenticateModel(user.id, { email, password })
  } catch (err) {
    console.log(err)
  }
}
