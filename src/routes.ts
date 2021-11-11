import { Router } from 'express'

import { sendEmailController } from './controllers/ContactController'
import { convertUsdToBrlController } from './controllers/CurrenciesController'
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController
} from './controllers/UsersController'
import { authenticateController } from './controllers/AuthController'

import { authMiddleware } from './middlewares/AuthMiddleware'

const router = Router()

router.post('/contact', sendEmailController)

router.post('/users', authMiddleware, createUserController)
router.get('/users', readUsersController)
router.put('/users/:id', authMiddleware, updateUserController)
router.delete('/users/:id', authMiddleware, deleteUserController)

router.get('/currencies/usd-brl/:value', convertUsdToBrlController)

router.post('/auth', authenticateController)

export default router
