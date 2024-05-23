var quotes=[
{
    quote : "Be yourself; everyone else is already taken.",
    auther :"--Oscar Wilde" 
},
{
    quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    auther :"--Marilyn Monroe" 
},
{
    quote : "So many books, so little time.",
    auther :"--Frank Zappa" 
},
{
    quote : "A room without books is like a body without a soul.",
    auther :"--Marcus Tullius Cicero" 
},
{
    quote : "You only live once, but if you do it right, once is enough.",
    auther :"--Mae West"

},
{
    quote : "Be the change that you wish to see in the world.",
    auther :"-- Mahatma Gandhi" 
},
]
function generateQuotes(){
    var randomQuote=Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerHTML=quotes[randomQuote].quote;
    document.getElementById("auther").innerHTML=quotes[randomQuote].auther;
    console.log(randomQuote);
}

