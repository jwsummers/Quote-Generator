var quotes = [
  'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas A. Edison',
  'Our greatest glory is not in never falling, but in rising every time we fall. -Confucius',
  'In the middle of every difficulty lies opportunity. -Albert Einstein',
  'Better to remain silent and be thought a fool than to speak out and remove all doubt. -Maurice Switzer',
  'You must be the change you wish to see in the world. -Mahatma Ghandi',
  'Don\’t cry because it’s over, smile because it happened. -Dr Suess',
  'In three words I can sum up everything I\’ve learned about life: it goes on.-Robert Frost',
  'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.',
  'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time. -Mark Twain'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
