// Factorilizing a number with recursion
/*function factorialize(num) {
 if (num === 0) { return 1; }
 return num * factorialize(num-1);
}

var ans = factorialize(5);
console.log(ans);*/

/*




function addf(first) {
  return function(second) {
    return first + second;
  };
 }

 console.log(addf(3)(4));



function liftf(binary) {
  return function(first) {
    return function(second) {
      return binary(first, second);
    };
  };
}



function curry(binary, first) {
  return function(second) {
    return binary(first, second);
  };
}
*/
// Sample recursive function.








// Array function
/*
function nameLength(name) {
for (var i = 0; i <= name.length; i++) {
  console.log(name[i]);
}

}

nameLength("Steven");
*/


// Golf Code
/*
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return "Change Me";
  }

  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 15));
*/

// Example Switch Statement
/*
function caseInSwitch(val) {
  var answer = "";

  switch(val) {
  case 1:
    answer = "alpha";
    break;

  case 2:
    answer = "beta";
    break;

  case 3:
    answer = "gamma";
    break;

  case 4:
    answer = "delta";
    break;

  default:
    answer = "fuck you";
    break;

}

  return answer;
}

// Change this value to test
console.log(caseInSwitch(4));
*/


/*


// The log function requires commas to allow running total on function
console.log(cc('A'), cc(2), cc(3), cc(4));

*/

// Working with objects
/*
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}

// Change this value to test
console.log(phoneticLookup("delta"));
*/

/*var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  return "Not Found";
}

// Test your code by modifying these values
console.log(checkObj("shit"));*/





//////////////////// Random Whole Number /////////////////////
/*
function randomWholeNum() {

  let maxNumberRange = 10;
  return Math.floor(Math.random() * maxNumberRange);
  
};


console.log(randomWholeNum());

*/


/*function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(2, 100);

console.log(myRandom);
*/

/*The parseInt() function parses a string and returns
an integer. Here's an example:

var a = parseInt("007");

The above function converts the string "007" to an integer 7.
If the first character in the string can't be converted
into a number, then it returns NaN.
*/

// Using RegEx to find a word in a String
/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/i; // The OR operator allows you to select from variable options.
let result = petRegex.test(petString);
// use i to ignore case
console.log(result);
*/

/*
function factorialize(num) {
  let arr = [];
  if (num === 0) { return 1; };
  arr.push(num * factorialize(num-1));
  return arr;
}

console.log(factorialize(6));
*/


////// Playing with Constructors //////////
/*function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Bitch", "Blue");

console.log(terrier.name);
*/

/*
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

let myHouse = new House(7);

console.log(myHouse instanceof House); // instanceof checks to see if the object is created from another
*/
/*
function Bird(name) {
  this.name = name;
  
}



let duck = new Bird("Donald");
let canary = new Bird("Tweety");


Bird.prototype.numLegs = 2;


let ownProps = [];
let prototypeProp = [];

for (let property in duck) {  // iterates through the number of properties in the instance
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property); // adds property to ownProps array
  } else {
    prototypeProp.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
console.log(prototypeProp);
*/

/*
function Dog(name) {
  this.name = name;
};


let collie = new Dog("Bitch");

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
    
  
};
console.log(joinDogFraternity(collie));
*/





///// Adding Methods after Inheritance //////////////////
/*
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
}



// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
*/

// Using Closure to Protect Properties Within an Object From Being Modified Externally ///
/*
function Bird() {
  let legs = 10;
  this.getNumLegs = function() {
    return legs;
  }

}

let swan = new Bird();


console.log(swan.getNumLegs());

//// Immediatley Invoked Function Expression ///

(function() {
  console.log("A cozy nest is ready");
})(); /// Invokes an anonymous function.
*/


//////////// Example of Using Functional Programming ///////////
/*

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// This function should add a book to the list and return the list without altering the original list 

function add (arr, bookName) {
  
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr; 
}

// This function should remove a book from the list and return the list 

function remove(arr, bookName) {
  
  let newArr = [...arr];
  
  if (newArr.indexOf(bookName) >= 0) {
    
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);


console.log(bookList);

*/

//////// Using the Map() Function to Iterate Through Arrays /////////
/*
// the global variable
var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
 }
];


/// Using a For Loop ///////

var rating = [];
for(var i=0; i < watchList.length; i++){
rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}


// Using the Map() Function ////

rating = watchList.map((n) => ({"title":n["Title"], "rating":n["imdbRating"]}) );


console.log(rating); 

*/
/*
function quickCheck(arr, elem) {
  // change code below this line
if (arr.indexOf(elem) == true){
  return true;
} else {
  return false;
}
  // change code above this line
}

// change code here to test different cases:


// Basic  Permutation Factorial
function factorial(x) {
  let ans = 1;
  for (let i = 1; i <= x; i++) {
    ans *= i;
  }
  return ans;
}

console.log(factorial(5));


// Combination Factorial
// num = number of objects
// sel = number of objects to be selected

function combFactorial(num, sel) {
  return factorial(num) / (factorial(num - sel) * factorial(sel));
}


console.log(combFactorial(5, 2));



// Let's get that fucking Z-score

function zScore(dp, mean, std) {
  return (dp - mean)/std;
}

// console.log(zScore(138, 100, 25));
*/

////////// Paper, Rock, Scissors w/ Computer //////////
/*
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error');
  }
  
};

const getComputerChoice = () => {
  const rand = Math.floor(Math.random()*3);
  let ans = '';
  switch(rand) {
    case 0: ans = 'rock';
      break;
    case 1: ans = 'paper';
      break;
    case 2: ans = 'scissors'
      break;
    default:
      ans = 'Error';
  };
  return ans;
};


function determineWinner(userChoice, getComputerChoice) {
  if (userChoice === getComputerChoice) {
    return 'The game is a tie!';
  } else if (userChoice === 'rock') {
    if (getComputerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won!';
    };
  } else if (userChoice === 'paper') {
    if (getComputerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'User won!';
    };
  } else if (userChoice === 'scissors') {
    if (getComputerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'User won!'
    };
  };
  
};

function playGame(x) {
  let userChoice = getUserChoice(x);
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  
  return determineWinner(userChoice, computerChoice);
}

console.log(playGame('paper'));


*/


////////// Calculate your Weight on Other Planets /////////
/*

function calculateWeight(earthWeight, planet) {
  if (typeof(planet) !== 'string') {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  } else if (typeof(earthWeight) !== 'number') {
    return 'Invalid Weight Entry. How much do you weight?'
  };
  
  let weight = 0;
  switch(planet) {
    case 'Mercury': weight = earthWeight * 0.378;
      break;
    case 'Venus': weight = earthWeight * 0.907;
      break;
    case 'Mars': weight = earthWeight * 0.377;
      break;
    case 'Jupiter': weight = earthWeight * 2.36;
      break;
    case 'Saturn': weight = earthWeight * 0.916;
      break;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  };
  
  return `Your weight on ${planet} is ${weight}.`;
  
};

console.log(calculateWeight(190, 'Mars'));

*/



/////// Matching Items in Lists /////////

/*
let bobsFollowers = ['Dave', 'Bob', 'Sherry', 'Steven'];


let tinasFollowers = ['Dave', 'Bob', 'Terry'];



let mutualFollowers = [];

const matchingItems = (list1, list2) => {
for (let i = 0; i < list1.length; i++) {
  for (let j = 0; j < list2.length; j++) {
    if (list1[i] === list2[j]) {
      mutualFollowers.push(list1[i]);
    };
  };
};
};


matchingItems(bobsFollowers, tinasFollowers);

console.log(mutualFollowers);


*/

//////////////////// Creating a Mini Linter ///////////////////////
/*

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' '); // Splits the variable into an array seperated by the space
let storyWordsLength = storyWords.length;  // Logs the number of words to the console
let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word); // Compares both lists and creates a new array from the items that are not the same using the '!' 
});


// console.log(storyWordsLength);

// console.log(betterWords);

// Count the number of each unecessary word

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;


for(word of betterWords) {
  if(word === 'really') {
    reallyCount += 1;
  } else if(word === 'very') {
    veryCount += 1;
  } else if(word === 'basically') {
    basicallyCount += 1;
  };
};





// console.log(reallyCount);
// console.log(veryCount);
// console.log(basicallyCount);


/// Count the number of sentences

let sentenceCount = 0;

for(word of betterWords) {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCount += 1;
  };
};

console.log(sentenceCount);


*/

///////// Compare two lists and buid a list and return the symmetric difference //////////
/*
let poop = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
let miya = ["diorite", "andesite", "grass", "dirt", "dead shrub"];  // Two lists

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) // combines arrays
    .filter( // 
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

console.log(diffArray(poop, miya));

*/


////// Remove certain elements from an array /////////
/*
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter(val => {
    return !args.includes(val);
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

*/
/*
let randObj = [
  {first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }];
  
  
  
let check = [{ last: "Capulet" }];





function whatIsInAName(collection, source) {
  // What's in a name?
  
  let arr = collection.filter(val => {
     return source.includes(val);
  });
  return arr;
};


console.log(randObj[0]);


console.log(whatIsInAName(randObj, check));

*/

/*
function sym(arr1, arr2) {
  let val = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
  let final = new Set(val);
  return Array.from(final);
}


console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));

*/

///////////// Example Regex Usage /////////
/*
function spinalCase(str) {

  return str.split(/(?=[A-Z])/);
}

console.log(spinalCase('thisIsSpinalTappoopdudeFuckshoot'));



*/
/*
// Convert the inputs into numbers
let pos1 = 1;
let pos2 = 0;
let pos3 = 1;
let pos4 = 0;
let pos5 = 0;
let pos6 = 1;
let pos7 = 0;
let pos8 = 0;
let pos9 = 0;

// This is the the possible win combinations.
let win1 = pos1 + pos2 + pos3;
let win2 = pos4 + pos5 + pos6;
let win3 = pos7 + pos8 + pos9;
let win4 = pos1 + pos5 + pos9;
let win5 = pos3 + pos5 + pos7;
let win6 = pos1 + pos4 + pos7;
let win7 = pos2 + pos5 + pos8;
let win8 = pos3 + pos6 + pos9;



let posArray = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
let winArray = [win1, win2, win3, win4, win5, win6, win7, win8];

let checkWinner = (check) => {
  let winner = 0;
  for (let i = 0; i <= check.length; i++) {
    if (check[i] === 3 || check[i] === 0) {
      winner += 1;
    };
    
  };
  if (winner > 0) {
    console.log('Winner!');
  }
};

checkWinner(winArray);


// This is the logic for checking a winner in the tic tac toe 
// game. 


(winNumArray[compNum].firstChild === true) {
  for (let i = 0; i < winNumArray.length)
*/

/*
///////////// This function filters an array for positive integers then squares them ////////////
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];


const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2)); 
  // For some reason parseInt() 
  // turns an decimal into an integer. 

  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

*/


/*
/////////////////// Using the rest operator/////////////////
// The rest operator allows a variable number of arguements
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6


*/


/////// Using the Spread Operator ///////////
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);


const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

console.log(maximus);

*/


/////// Use Destructuring Assignment to Assign Variables from Nested Objects ///////
/*
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow : {max : maxOfTomorrow}} = forecast; 
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

*/




/////////////////// Using Destructuring Assignment with Arrays ////////////////
/*
let randomArray = [1, 2, 3, 4, 5, 6];

const [a, b] = randomArray;

console.log(a);
console.log(b);


let a = 8, b = 6;
(() => {
  "use strict";
[b, a] = [a, b];
})();
console.log(a); 
console.log(b); 

*/

// The rest operator allows you to grab the rest of the elements in
// an array and assign it to a variable. The rest element only works correctly 
// as the last variable in the list. As in, you cannot use the rest operator 
// to catch a subarray that leaves out last element of the original array.
/*

let randomArray = [1, 2, 3, 4, 5, 6];


const [a, b, ...arr] = randomArray;

console.log(a, b);
console.log(arr);



// Deconstructing Objects for Function Manipulation //


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => { // This allos you to grab only what you need
  // from the object.
    return (max + min) / 2.0;
  };
  // change code above this line

;
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

*/

////// Using Template String Literals with Objects ///////
/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
                              `<li class="text-warning">${arr[1]}</li>`,
                              `<li class="text-warning">${arr[2]}</li>`];

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

*/

///////// Using getters and setters within an Object ////////////
/*
function makeClass() {
  "use strict";
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (this.fahrenheit - 32) * (5/9);
  };

  set temperature(updatedFahrenheit) {
    this.fahrenheit = updatedFahrenheit;
};
};
  return Thermostat;
};
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

console.log(temp);


*/

// Use use 'import' to import specfic functions from a file. Learn more!


// Use "export" to make functions avaible to be imported by other files.





