const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.csv');

async function init() {

    const $ = await request({
        uri: 'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });

    // const websiteTitle = $('title');
    // console.log(websiteTitle.html());

    // const websiteHeading = $('h1');
    // console.log(websiteHeading.text().trim());

    // const quote = $('.quote').find('a');
    // console.log(quote.html());

    // const third_quote = $('.quote').next().next();
    // console.log(third_quote.html());

    // const containerClass = $('.row .col-md-8').children();
    // console.log(containerClass.html());

    // const quoteSpan = $('.quote span.text').each((i, el) => {
        // console.log(i, $(el).text());
        // const quote_text = $(el).text();
        // reemplaza “ y ” por ""
        // const quote = quote_text.replace(/(^\“|\”$)/g,"");
        // console.log(i, quote);
        
        writeStream.write('Quote | Author | Tags\n');
        $('.quote').each((i, el) => {
            const text = $(el).find('span.text').text().replace(/(^\“|\”$)/g,"");
            const author = $(el).find('span small.author').text();
            const tags = [];
            $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text()));
            writeStream.write(`${text}|${author}|${tags}\n`);
            // console.log(tags.join(','));
        });
    // });

}

init();