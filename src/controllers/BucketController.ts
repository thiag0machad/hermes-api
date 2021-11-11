import { NextFunction, Request, Response } from 'express'

export const uploadFilesController = async (req: Request, res: Response) => {
  try {
    return res.status(201).send('Successfully uploaded files!')
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
