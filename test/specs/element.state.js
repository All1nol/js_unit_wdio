import { expect, $ } from '@wdio/globals'

const randomString = crypto.randomUUID();

describe('Dynamic Controls test', () => {
    it('populated text should be displayed in dynamic control', async () => {
        await $('//*[@href="/dynamic_controls"]').click()

        await $('//button[text() = "Enable"]').click()
        
        let inputField = await $('#input-example input')
        //expect that inputField is enabled
        await  inputField.waitForEnabled()
        //input randomString into inputField
        await inputField.setValue(randomString)
        let newValue = inputField.getValue()
        //expect that randomString is displayed
        await expect(newValue).toHaveValue(randomString)
    })
})

