interface Email {
  name?: string
  email?: string
  body?: string
}

interface User {
  name?: string
  email?: string
  password?: string
}

interface TokenPayload {
  id?: string
  iat?: number
  exp?: number
}
