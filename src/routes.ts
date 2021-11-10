import { Router } from 'express'
import { sendEmailController } from './controllers/ContactController'
import { convertUsdToBrlController } from './controllers/BrlController'
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController
} from './controllers/UserController'
import { authenticateController } from './controllers/AuthController'

const router = Router()

router.post('/contact', sendEmailController)

router.post('/users', createUserController)
router.get('/users', readUsersController)
router.put('/users/:id', updateUserController)
router.delete('/users/:id', deleteUserController)

router.get('/currencies/usd-brl/:value', convertUsdToBrlController)

router.post('/auth', authenticateController)

export default router
