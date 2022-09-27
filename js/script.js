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
let randomNumber;
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const background = document.querySelector('body');


const quotes = [
  'The journey of a thousand miles begins with one step.',
  'That which does not kill us makes us stronger.',
  'When the going gets tough, the tough get going.',
  'You must be the change you wish to see in the world.',
  'Beware; for I am fearless, and therefore powerful.'
]

const citations = [
  '',
  '',
  '',
  '',
  'Frankenstein'
]

const years = [
  '',
  '',
  '',
  '',
  '1818'
]

const sources = [
  'Lao Tzu',
  'Friedrich Nietzsche',
  'Joe Kennedy',
  'Mahatma Gandhi',
  'Mary Shelley'
]

const tags = [
  '#movtivation',
  '#inspiration',
  '#determination',
  '#change',
  '#mindset'
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  const number = quotes.length;
  randomNumber = Math.floor(Math.random() * number);
  randomQuote = quotes[randomNumber];
  return randomQuote;
}


/***
 * `printQuote` function
***/

function printQuote () {
  getRandomQuote();
  quote.innerHTML = randomQuote;
  document.body.style.background = randomColor();
  if (citations[randomNumber] === '' && years[randomNumber] === ''){
    source.innerHTML = `${sources[randomNumber]} <span>${tags[randomNumber]}</span>`;

  } else {
  source.innerHTML = `${sources[randomNumber]}<span class="citation"></span><span class="year"></span><span> ${tags[randomNumber]}</span>`;
  const citation = document.querySelector('.citation');
  const year = document.querySelector('.year');
  citation.innerHTML = citations[randomNumber];
  year.innerHTML = years[randomNumber];
  }
}

//Random Color function

function randomColor() {
  const x = Math.floor(Math.random()*256);
  const y = Math.floor(Math.random()*256);
  const z = Math.floor(Math.random()*256);
  const color = `rgb(${x},${y},${z})`;
  return color;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

setInterval(printQuote, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);