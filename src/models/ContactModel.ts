import { transporter } from '../configs/email'

export const sendMailModel = async ({ name, email, body }: Email) => {
  try {
    return transporter.sendMail({
      from: process.env.USER,
      to: process.env.USER,
      replyTo: email,
      subject: `[CONTATO - thiagomachado.vercel.app] ${name} enviou uma mensagem`,
      text: body
    })
  } catch (err) {
    throw new Error(err)
  }
}
