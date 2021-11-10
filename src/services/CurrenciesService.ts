import { convertUsdToBrlModel } from '../models/CurrenciesModel'

export const convertUsdToBrlService = (value: string) => {
  try {
    return convertUsdToBrlModel(value)
  } catch (err) {
    console.log(err)
  }
}
