import { expect, $, $$ } from '@wdio/globals'

const randomString = crypto.randomUUID();
const initText = 'Your content goes here.';

describe('iFrame test', () => {
    it('check that changes is backed from iframe input', async () => {
        await $('[href="/frames"]').click()
        await $('[href="/iframe"]').click()
        
        const iframe = await $('iframe#mce_0_ifr')

        await browser.switchToFrame(iframe) //switching to iframe
        //add text to the input field
        let textArea= await $('[id= "tinymce"]')
        await textArea.addValue(randomString)

        await expect($(`//*[text() = '${initText}${randomString}']`)).toExist()

        //undo changes 
        await browser.switchToParentFrame()
        await (await $('//*[text()="Edit"]')).click()
        await (await $('//button[@title="Undo"]')).click()

        await browser.switchToFrame(iframe)
        //expect that initText is displayed in the editor
        await expect($(`//*[text() = '${initText}']`)).toExist()
    })
})

