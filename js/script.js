/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let randomQuote = '';

const quotes = [
  'The journey of a thousand miles begins with one step.',
  'That which does not kill us makes us stronger.',
  'When the going gets tough, the tough get going.',
  'You must be the change you wish to see in the world.',
  'Beware; for I am fearless, and therefore powerful.'
]

const source = [
  '',
  '',
  '',
  '',
  'Frankenstein'
]

const year = [
  '',
  '',
  '',
  '',
  '1818'
]

const name = [
  'Lao Tzu',
  'Friedrich Nietzsche',
  'Joe Kennedy',
  'Mahatma Gandhi',
  'Mary Shelley'
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  const number = quotes.length;
  const randomNumber = Math.floor(Math.random() * number);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);