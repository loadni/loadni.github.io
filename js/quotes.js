const quotes = [
    {
        quote : "The only way to do great work is to love what you do.",
        author : "Steve Jobs",
    },
    {
        quote : "In the middle of difficulty lies opportunity.",
        author : "Albert Einstein",
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi",
    },
    {
        quote : "Believe you can and you're halfway there.",
        author : "Theodore Roosevelt",
    },
    {
        quote : "The future belongs to those who believe in the beauty of their dreams.",
        author : "Eleanor Roosevelt",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
