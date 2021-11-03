require('dotenv/config')
const express = express()
const nodemailer = require('nodemailer')
const app = express()

const port = process.env.PORT || 3000

const user = process.env.USER
const pass = process.env.PASS

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/emails', (req, res) => {
  const { name, email, body } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: { user, pass },
  })

  transporter
    .sendMail({
      from: user,
      to: user,
      replyTo: email,
      subject: `[CONTATO thiagomachado] ${name} has sent you a message`,
      text: body,
    })
    .then(info => {
      res.send(info)
    })
    .catch(err => res.send(err))





    
})

app.listen(port, () => console.log(`Running on port ${port}!`))
