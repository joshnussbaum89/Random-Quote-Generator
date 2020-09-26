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
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Dr. Suess",
    tag: "Literature"
  },
  {
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    source: "Malcolm X",
    tag: "American History"
  }
];

// Random quote function
const getRandomQuote = () => {
  // store random number
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // grab quote using randomNumber variable as index
  return quotes[randomNumber];
}

// Print quote function 
const printQuote = () => {
  // store quote retrieved from getRandomQuote function
  const randomQuote = getRandomQuote();
  // empty string to build what will be printed to page
  let quoteString = `<p class="quote">${randomQuote.quote}</p>
                     <p class="source">${randomQuote.source}</p>
                     <p class="tag">${randomQuote.tag}`;

  // if citation for selected quote is undefined, add <span> elements to print citation
  if (randomQuote.citation !== undefined) {
    quoteString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  // if year for selected quote is undefined, add <span> elements to print year
  if (randomQuote.year !== undefined) {
    quoteString += `<span class="year">${randomQuote.year}</span>`;
  }
  // close string with </p> tag
  quoteString += `</p>`;
  // print all text to page
  document.getElementById('quote-box').innerHTML = quoteString;
}

// call printQuote function
printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);