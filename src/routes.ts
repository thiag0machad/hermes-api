import { Router } from 'express'
import { sendEmailController } from './controllers/ContactController'
import { createUserController } from './controllers/UserController'

const router = Router()

router.post('/contact', sendEmailController)

router.post('/users', createUserController)

export default router
