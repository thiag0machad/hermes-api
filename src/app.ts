import 'dotenv/config'
import express from 'express'
import { router } from './routes/contact'

const app = express()

app.use(express.json())
app.use(router)

app.get('/', (req, res) => res.send('Hello World!'))

export { app }
