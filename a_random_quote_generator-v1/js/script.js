/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
let quotes = [
    {
      quote: "I am learning all the time. The tombstone will be my diploma.",
      source: "Eartha Kitt"
    },
    {
      quote: "Understand that the right to choose your own path is a sacred privilege. Use it. Dwell in possibility.",
      source: "Oprah Winfrey"
    },
    {
      quote: "One press account said I was an overnight success. I thought that was the longest night I’ve ever spent.",
      source: "Sandra Cisneros",
      citation: "Chicago Tribune",
      year: "1992"
    },
    {
      quote: "I’m just enjoying my life. I suggest you try it.",
      source: "Tyler Perry"
    },
    {
      quote: "I'm not afriad of storms, for I'm learning how to sail my ship.",
      source: "Louisa May Alcott"
    },
    {
      quote: "She wasn’t waiting for a knight, she was waiting for a sword.",
      source: "Atticus",
      year: "2015"
    }
    ];

//Tested array in console--objects in array are working
console.log(quotes);

/*** Created getRandomQuote function. Created a random number to select a random object from the array and return  a quote.
returning quotes variable displays quote array with the random fucntion created. ***/

function getRandomQuote () {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  };
  //tested the getRandomQuote funciton to see if I am pulling a random quote; was pulling a random number vs quote, corrected.
  console.log(getRandomQuote());
  
  /***Created a printQuote function. Stored the getRandomQuote variable in the function and created a variable 
to store the HTML string for the quote and source, add conditional statements for year and citation properties. 
Set innerHTML property with the 'quote-box' div to equal the HTML string. ***/

function printQuote () {
      let printRandomQuote = getRandomQuote ();
      let quoteMessage = ' '; //HTML settings variable named quoteMessage
      //Fixed printRandomQuote.quote HTML string by adding correct spaces, adding the + to concatenate
      quoteMessage += '<p class="quote">' +printRandomQuote.quote+ '</p><p class="source">' +printRandomQuote.source;
     //note: dot notation for each property in the objects is object.quote, object.source; object.year, and object.citation.
  
     //Visual appeal is for the citation to come before the year, switched order code pulls citation and year.
  if(printRandomQuote.citation) {
    quoteMessage += '<span class="citation">' +printRandomQuote.citation+ '</span>';
   }
  
  if(printRandomQuote.year) {
      quoteMessage += '<span class="year">' +printRandomQuote.year+ '</span>';
     }
  // closed quoteMessage call <p></p>
      quoteMessage += '</p>';
    
    console.log(quoteMessage); 
  
//set the inner HTML by targeting the div with JS
  document.getElementById('quote-box').innerHTML = quoteMessage;


//correctly closed printQuote function and console.log(quoteMessage) works with quote button; still an issue with printRandomQuote
};
printQuote();

/***The included code below is triggered when a site user clicks "Show another Quote" button.
the event listener calls the 'prinitQuote' function created. ***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// deleted original comments.