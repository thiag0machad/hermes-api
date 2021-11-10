import { Builder, By } from 'selenium-webdriver'
import 'chromedriver'

export const convertUsdToBrlModel = async (value: string) => {
  try {
    const driver = await new Builder().forBrowser('chrome').build()
    await driver.get('https://dolarhoje.com/')
    await driver.manage().window().setRect({ width: 1456, height: 876 })

    const usd = await driver
      .findElement(By.id('nacional'))
      .getAttribute('value')

    const usdReplaced = usd.replace(',', '.')

    const total = {
      Dolar: usdReplaced,
      Real: value,
      Convertido: `R$ ${(parseFloat(usdReplaced) * parseFloat(value)).toFixed(
        2
      )}`
    }

    return total
  } catch (err) {
    console.log(err)
  }
}
