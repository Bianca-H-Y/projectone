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

/***Created getRandomQuote function. Created a random number to select a random object from the array and return  a quote.
returning quotes variable displays quote array with the random fuction created. ***/

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
//tested the getRandomQuote funciton to see if I am pulling a random quote; was pulling a random number vs quote, corrected.
console.log(getRandomQuote());

/***Created a printQuote function. Stored the getRandomQuote variable in the function and created a variable 
to store the HTML string for the quote and source, add conditional statements for year and citation properties. 
Set innerHTML property with the 'quote-box' div to equal the HTML string. ***/

function printQuote () {
      let printRandomQuote = getRandomQuote ();
      let quoteMessage = ' '; //HTML settings variable named quoteMessage
      //Fixed printRandomQuote.quote HTML string by adding correct spaces, adding the + to concatenate
      quoteMessage += '<p class="quote">' +printRandomQuote.quote+ '</p><p class="source">'+printRandomQuote.source;
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
  

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.