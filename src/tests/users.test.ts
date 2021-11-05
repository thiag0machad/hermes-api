import axios from 'axios'
import { generateHash } from '../utils/index'

test('Testing whether it is returning 201 status in the user creation route', async () => {
  const response = await axios.post('http://localhost:3000/users', {
    name: generateHash(),
    email: generateHash(),
    password: generateHash()
  })

  expect(response.status).toBe(201)
})
