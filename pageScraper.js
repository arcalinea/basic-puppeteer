const fs = require("fs");

const scraperObject = {
    url: 'https://www.example.com/',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        await page.waitForTimeout(2000);

        // Examples:
        // await page.click('div.className')
        // const selectAll = await page.$$('.className');
        // await autoScroll(page)
        // const imageURLs = await page.$$eval('#idName img', imgs => imgs.map(img => img.src));
    }
}

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

module.exports = scraperObject;

/*
Used https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer
*/
