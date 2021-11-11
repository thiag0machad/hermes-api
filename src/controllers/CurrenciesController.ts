import { Request, Response } from 'express'
import { convertUsdToBrlModel } from '../models/CurrenciesModel'

export const convertUsdToBrlController = async (
  req: Request,
  res: Response
) => {
  try {
    const value = await convertUsdToBrlModel(req.params.value)
    return res.status(200).json(value)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
