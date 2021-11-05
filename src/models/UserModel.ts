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

export const readUsersModel = () => {
  try {
    return database.user.findMany()
  } catch (err) {
    console.log(err)
  }
}

export const updateUserModel = ({ name, email, password }: User) => {
  try {
    return database.user.update({
      where: {
        email
      },
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

export const deleteUserModel = ({ name, email, password }: User) => {
  try {
    return database.user.delete({
      where: {
        email
      }
    })
  } catch (err) {
    console.log(err)
  }
}
