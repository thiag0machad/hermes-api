import { Router } from 'express'
import { sendEmailController } from './controllers/ContactController'
import { convertUsdToBrlController } from './controllers/BrlController'
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
router.put('/users/:id', updateUserController)
router.delete('/users/:id', deleteUserController)

router.get('/usd-brl/:value', convertUsdToBrlController)

export default router
