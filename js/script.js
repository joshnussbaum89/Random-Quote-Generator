/******************************************
        A Random Quote Generator
******************************************/



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

// Random quote function
const getRandomQuote = () => {
  // store random number
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // grab quote using randomNumber variable as index
  return quotes[randomNumber];
};

// Print quote function 
const printQuote = () => {
  // store quote retrieved from getRandomQuote function
  const randomQuote = getRandomQuote();
  // empty string to build what will be printed to page
  let quoteString = `<p class="quote">${randomQuote.quote}</p>
                     <p class="source">${randomQuote.source}`;

  // if citation for selected quote is defined, add <span> elements to print citation
  if (randomQuote.citation) {
    quoteString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  // if year for selected quote is defined, add <span> elements to print year
  if (randomQuote.year) {
    quoteString += `<span class="year">${randomQuote.year}</span>`;
  }
  // if tag for selected quote is defined, add <span> elements to print tag
  if (randomQuote.tag) {
    quoteString += `<span class="tag"> ${randomQuote.tag}</span>`;
  }
  // close string with </p> tag
  quoteString += `</p>`;
  // print all text to page
  document.getElementById('quote-box').innerHTML = quoteString;
};

// Change background color function
const changeBackgroundColor = () => {
  // Select the body tag
  const body = document.querySelector('body');
  // hold value of random rgb values
  const randomRGB = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  // set background color
  body.style.backgroundColor = randomRGB;
};

// Produce random number between 1 and 256 and asign the values to the backgroundColor variable in changeBackgroundColor()
const randomColor = () => Math.floor(Math.random() * 255);



/******************************************
            Call Functions
******************************************/

// Page button, click to produce new quote and change color 
document.getElementById('load-quote').addEventListener("click", () => {
  printQuote();
  changeBackgroundColor();

  // clear timer
  clearInterval(colorAndQuoteTimer);

  // reset timer 
  setInterval(() => {
    printQuote();
    changeBackgroundColor();
  }, 10000);
});

// Call the change background color function to random color
changeBackgroundColor();

// Call printQuote function
printQuote();

// Change background color and quote every 10 seconds 
const colorAndQuoteTimer = setInterval(() => {
  printQuote();
  changeBackgroundColor();
}, 10000);