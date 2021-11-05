import 'dotenv/config'
import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => res.send('Bem Vindo!'))

export { app }
