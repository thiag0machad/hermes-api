import { Router } from 'express'
import { sendEmailController } from './controllers/ContactController'
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController
} from './controllers/UserController'

const router = Router()

router.post('/contact', sendEmailController)

router.post('/users', createUserController)
router.get('/users', readUsersController)
router.put('/users', updateUserController)
router.delete('/users', deleteUserController)

export default router
