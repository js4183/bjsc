const quotes = [
{
    quote:"If we cannot live so as to be happy, let us least live so as to deserve it.",
    author:"Immanuel Hermann Fichte"
},
{
    quote:"The human brain starts working the moment you are born and never stops until you stand up to speak in public." ,
    author:"George Jessel"
},
{
    quote:"Have you heard that it was good to gain the day? I also say it is good to fall, battles are lost in the same spirit in which they are won." ,
    author:"Walt Whitman"
},
{
    quote:"I prefer the company of peasants because they have not been educated sufficiently to reason incorrectly." ,
    author:"Michel de Montaigne"
},
{
    quote:"He who has a thousand friends has not a friend to spare, And he who has one enemy will meet him everywhere." ,
    author:"Ali ibn-Abi-Talib"
},
{
    quote:"Nothing exists (from whose nature) some effect does not follow." ,
    author:"Baruch Spinoza"
},
{
    quote:"Courage is resistance to fear, mastery of fear - not absence of fear." ,
    author:"Mark Twain"
},
{
    quote:"Pride is pleasure arising from a man's thinking too highly of himself." ,
    author:"Baruch Spinoza"
},
{
    quote:"The highest proof of virtue is to possess boundless power without abusing it." ,
    author:"Lord Macaulay"
},
{
    quote:"Men of few words are the best men.",
    author:"William Shakespeare"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;