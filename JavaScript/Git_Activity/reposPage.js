const request = require("request");
const cheerio = require("cheerio");
function getReposPageHtml(url){
request(url,cb);
function cb(error,responses,html){
    if(error){
        console.log(error)
    }else{
        // getResposLink();
        console.log(html)
    }
}
function getResposLink(html){
    // cheerio.load(html);
}
}
    module.exports = getReposPageHtml;