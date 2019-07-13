// Javascript is synchronous. A function that takes a really long time to run
// will cause a page to be unresponsive.

// Execution Stack ///

// Visualized like a deck of cards. The last item added
// to the stack is resolved first.

// function addOne(number) {
//   return number + 1;
// }

// function getNum() {
//   return addOne(10);
// }

// function c() {
//   return getNum() + getNum();
// }

// console.log(c());

// API

// Function Que /////

// Checks to see if the Call Satck is empty. If so,
// adds the first item in the que to the stack.

///// Fetch & Promises ///////////////

// const liquidWebsite = "http://liquidsmoke.biz";

// let data = document
//   .fetch(liquidWebsite)
//   .then(function(response) {
//     // When the page is loaded convert it to text
//     return response.text();
//   })
//   .then(function(html) {
//     // Initialize the DOM parser
//     var parser = new DOMParser();

//     // Parse the text
//     var doc = parser.parseFromString(html, "text/html");

//     // You can now even select part of that html as you would in the regular DOM
//     // Example:
//     // var docArticle = doc.querySelector('article').innerHTML;

//     console.log(doc);
//   })
//   .catch(function(err) {
//     console.log("Failed to fetch page: ", err);
//   });

// console.log(data);
function tweetIntervalDay() {
  const currentHour = new Date().getMinutes();

  return currentHour < 2 ? console.log("one second") : null;
}

function tweetIntervalNight() {
  const currentHour = new Date().getMinutes();

  return currentHour >= 2 ? console.log("two seconds") : null;
}

setInterval(() => tweetIntervalDay(), 1000);
setInterval(() => tweetIntervalNight(), 2000);
