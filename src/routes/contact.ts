import { Router } from 'express'
import { contactController } from '../controllers/contact'

const router = Router()

router.post('/contact', contactController)

export { router }
