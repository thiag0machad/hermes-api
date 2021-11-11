import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: { user: process.env.NODEMAILER_USER, pass: process.env.NODEMAILER_PASS }
})

export { transporter }
