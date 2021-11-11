import 'dotenv/config'
import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors)

app.get('/', (req, res) => res.send('Bem Vindo!'))

export { app }
