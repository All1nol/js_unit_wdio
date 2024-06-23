import { expect, $, $$ } from '@wdio/globals'

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Handling test', () => {
    it('successful message should be displayed after alert handling', async () => {
        // await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
        // let alertButton = await $('[contains(@onclick,"jsAlert()")]')
        // await expect(alertButton).toExist()

        // await alertButton.click()
        // await browser.acceptAlert()
        // await expect($('[id="result"]')).toHaveText(successfulMessage)

        await $('[href="/javascript_alerts"]').click()
        await $('[onclick="jsAlert()"]').click()
         //accept alert
         //expect that successfulMessage is displayed
         await browser.acceptAlert()
         await expect($('[id="result"]')).toHaveText(successfulMessage)
       
    })
})

