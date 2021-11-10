import { Request, Response } from 'express'
import { convertUsdToBrlService } from '../services/CurrenciesService'

export const convertUsdToBrlController = async (
  req: Request,
  res: Response
) => {
  try {
    const value = await convertUsdToBrlService(req.params.value)
    return res.status(200).json(value)
  } catch (err) {
    return res.status(400).json(err)
  }
}
