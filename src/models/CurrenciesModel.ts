import { Builder, By } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import 'chromedriver'

export const convertUsdToBrlModel = async (value: string) => {
  try {
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build()
    await driver.get('https://dolarhoje.com/')

    const usd = await driver
      .findElement(By.id('nacional'))
      .getAttribute('value')

    const usdReplaced = usd.replace(',', '.')

    const total = {
      dollar: usdReplaced,
      real: value,
      converted: `R$ ${(parseFloat(usdReplaced) * parseFloat(value)).toFixed(
        2
      )}`
    }

    return total
  } catch (err) {
    console.log(err)
  }
}
