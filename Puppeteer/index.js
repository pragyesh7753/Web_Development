import { launch } from 'puppeteer';

(async () => {
    const browser = await launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/JavaScript');
    await page.screenshot({ path: 'wiki.png' });

    const result = await page.evaluate(() => {
        let headingFromWeb = document.querySelectorAll(".mw-heading")
        const headingList = [...headingFromWeb]
        return headingList.map(h => h.innerText)
    })
    console.log(result)

    await browser.close();
})();
// This code uses Puppeteer to open a browser, navigate to Wikipedia, take a screenshot, save it as wiki.png and then close the browser.