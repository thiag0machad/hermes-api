import database from '../configs/database'

export const createUserModel = ({ name, email, password }: User) => {
  try {
    return database.user.create({
      data: {
        name,
        email,
        password
      }
    })
  } catch (err) {
    console.log(err)
  }
}
