import jwt from 'jsonwebtoken'

export const authenticateModel = async (id: string, { email }: User) => {
  try {
    return {
      user: {
        id,
        email
      },
      token: jwt.sign({ id }, 'secret', { expiresIn: '1d' })
    }
  } catch (err) {
    throw new Error(err)
  }
}
