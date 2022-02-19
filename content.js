// ==UserScript==
// @name         MoneyControl Reccomendations
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description   Email Stock Recommendations
// @author       You
// @match        https://www.moneycontrol.com/
// @icon         https://www.google.com/s2/favicons?domain=moneycontrol.com
// @grant        none
// ==/UserScript==



var table = document.getElementsByClassName('stkAdv_tbl');
var links = table[0].getElementsByTagName("A");
var message = "Stocks: \n";
var articles = "Articles: \n";
for (let i = 0; i < links.length; i++) {
    if (numWords(String(links[i].text)) < 4) {
        console.log(links[i]);
        message = message + String(links[i].text) + "\n";
    } else {
        articles = articles + links[i] + "\n";
    }
}
console.log(message);
message = message + "\n";
message = message + articles;

function sendMail() {
    var link = "mailto:botweb91@gmail.com"
             + "?cc="
             + "&subject=" + encodeURIComponent("Moneycontrol Stock Digest")
             + "&body=" + encodeURIComponent(message)
    ;
    window.location.href = link;
}

function numWords(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) === ' ') {
            count ++;
        }
    }
    return count + 1;
}
sendMail();