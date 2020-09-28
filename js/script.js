/******************************************
        A Random Quote Generator
******************************************/

// Global variables
let setColorAndQuoteTimer;
let colorAndQuoteTimer;

// Quotes Array
const quotes = [
  {
    quote: "The unexamined life is not worth living.",
    source: "Socrates",
    citation: "Apology of Socrates",
    year: "399 BCE",
    tag: "Philosophy"
  },
  {
    quote: "I love being a carbon molecule.",
    source: "Duncan Trussell",
    tag: "Comedy"
  },
  {
    quote: "If you tried to give rock and roll another name, you might call it Chuck Berry.",
    source: "Keith Richards",
    citation: "The Mike Douglas Show",
    year: 1972,
    tag: "Music"
  },
  {
    quote: "Your body is not a temple, it's an amusement park. Enjoy the ride.",
    source: "Anthony Bourdain",
    tag: "Food, Travel"
  },
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Dr. Suess",
    tag: "Literature"
  },
  {
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    source: "Malcolm X",
    tag: "American History"
  },
  {
    quote: "Writing about music is like dancing about architecture.",
    source: "Thelonious Monk",
    tag: "Jazz, Music"
  }
];



/******************************************
                Functions
******************************************/

/******
Random quote function:  1.) Store random number 2.) Grab quote using randomNumber variable as index
*******/
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/******
Print quote function:  1.) Store quote retrieved from getRandomQuote function 2.) Initilize quoteString variable to build what will be printed to page 3.) If citation for selected quote is defined, add <span> elements to print citation 4.) If year for selected quote is defined, add <span> elements to print year 5.) If tag for selected quote is defined, add <span> elements to print tag 6.) Close string with </p> tag 7.) Print all text to page
*******/
const printQuote = () => {
  const randomQuote = getRandomQuote();
  let quoteString = `<p class="quote">${randomQuote.quote}</p>
                     <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    quoteString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    quoteString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    quoteString += `<span class="tag"> ${randomQuote.tag}</span>`;
  }
  quoteString += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteString;
};

/******
Change background color function:  1.) Select the body tag 2.) Store random RGB values 3.) Set body to random RGB
*******/
const changeBackgroundColor = () => {
  const body = document.querySelector('body');
  const randomRGB = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  body.style.backgroundColor = randomRGB;
};

/****** 
Random color function:  Produce random number between 1 and 256 and asign the values to the backgroundColor variable in changeBackgroundColor()
*******/
const randomColor = () => Math.floor(Math.random() * 255);

/******
Print quote and color function:  Single function to print quote to page and change background color
*******/
const printQuoteAndColor = () => {
  printQuote();
  changeBackgroundColor();
}

/******
Set color and timer function:  1.) Quote and color change 2.) 10 second timer is cleared 3.) Timer is assigned to colorAndQuoteTimer variable
*******/
setColorAndQuoteTimer = () => {
  printQuoteAndColor();
  clearInterval(colorAndQuoteTimer);
  colorAndQuoteTimer = setInterval(() => {
    printQuoteAndColor();
  }, 10000);
}



/******************************************
            Call Functions
******************************************/

// Print quote and color to page
printQuoteAndColor();

// Set timer
setColorAndQuoteTimer();

// Click page button to produce new quote, change color and set timer
document.getElementById('load-quote').addEventListener("click", setColorAndQuoteTimer, false);