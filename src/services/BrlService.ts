import { convertUsdToBrlModel } from '../models/BrlModel'

export const convertUsdToBrlService = (value: string) => {
  try {
    return convertUsdToBrlModel(value)
  } catch (err) {
    console.log(err)
  }
}
