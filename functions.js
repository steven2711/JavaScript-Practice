// Function Examples

//Setup
// Example Object Lookup With a Function
/*
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

for (var i = 0; i < contacts.length; i++) {
  if (name === contacts[i].firstName) {
    if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else {
      return "No such property.";
    }
  }
}
return "No such contact."

}

// Change these values to test your function
console.log(lookUpProfile("Sherlock", "likes"));
*/

// Card Counting Function
/*
var count = 0;

function cc(card) {

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 7:
    case 8:
    case 9:
      count += 0;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  var ans = "";
  if (count > 0) {
    ans =  count + " Bet\n";
  } else {
    ans = count + " Hold\n";
  }
  return ans;

}

*/
/*
function phoneticLookup(val) {
  // Only change code below this line
  var lookup = {
    alpha: "Adams",

    bravo: "Boston",

    charlie: "Chicago",

    delta: "Denver",

    echo: "Easy",

    foxtrot: "Frank"
  };

  var result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));

*/

// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {
//   // Your Code Here

//   return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not found";
// }

// // Test your code by modifying these values
// console.log(checkObj("gift"));

// const addOne = number => {
//   return number + 1;
// };

// const bigNum = number => {
//   if (number > 3) {
//     return number;
//   }
// };

// const array = [1, 2, 3, 4, 5];

// Higher order functions include map(), filter() and reduce().

// Map() implemented

// function miyasAss(arr, fn) {
//   const newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     newArray.push(fn(val));
//   }

//   return newArray;
// }

// console.log(miyasAss(array, addOne));

// const beerSchema = {
//   beerName: "Falls Pills",
//   brewery: "",
//   beerType: "",
//   beerStyle: "",
//   city: "",
//   state: "",
//   abv: "",
//   ibu: "",
//   description: ""
// };

// const getObjectKeys = obj => {
//   return Object.keys(obj);
// };

// const makeJsonArray = length => {
//   const newArray = [];

//   for (let i = 0; i < length; i++) {
//     newArray.push(beerSchema);
//   }

//   return newArray;
// };

// const data = makeJsonArray(10);

// let keys = getObjectKeys(data);

// console.log(data);

// console.log(keys);

///// Add all elements in an array ////////

// let array = [1, 2, 3];

// function addArray(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }

// let answer = addArray(array);

// console.log(answer);

/// Compare two arrays

// let alice = [1, 2, 3, 34, 65, 1];
// let bob = [2, 3, 3, 4, 7, 90];

// function pointCalculator(a, b) {
//   let finalPoints = [0, 0];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       finalPoints[0]++;
//     } else if (b[i] > a[i]) {
//       finalPoints[1]++;
//     }
//   }

//   return finalPoints;
// }

// console.log(pointCalculator(alice, bob));

// let array = [1, 2, 3, "34", 9];

// console.log(typeof array[3]);

// function clean(l) {
//   return l.filter(item => parseInt(item, 10));
// }

// console.log(clean(array));

////////////// Difference of the Diagonals ////////////

// let multiArray = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// function diagonalDifference(arr) {
//   let newArr = [...arr];

//   let n = newArr.length;

//   let diagOne = 0;
//   let diagTwo = 0;

//   for (let i = 0; i < n; i++) {
//     for (let k = 0; k < n; k++) {
//       if (i === k) {
//         diagOne += newArr[i][k];
//       }

//       if (i + k === n - 1) {
//         diagTwo += newArr[i][k];
//       }
//     }
//   }

//   return Math.abs(diagOne - diagTwo);
// }

// console.log(diagonalDifference(multiArray));

//////// Find the fraction of POS, NEG, and ZEROS in an array///////////

// let arr = [1, 1, 0, -1, -1];

// function plusMinus(arr) {
//   let l = arr.length;

//   let positive = 0;
//   let negative = 0;
//   let zero = 0;

//   for (let i = 0; i < l; i++) {
//     if (arr[i] === 0) {
//       zero++;
//     } else if (arr[i] < 0) {
//       negative++;
//     } else if (arr[i] > 0) {
//       positive++;
//     }
//   }

//   let pos = parseFloat(positive / l).toFixed(6);
//   let neg = parseFloat(negative / l).toFixed(6);
//   let z = parseFloat(zero / l).toFixed(6);
//   console.log(pos);
//   console.log(neg);
//   console.log(z);
// }

// console.log(plusMinus(arr));

///////////// Fin the MIN and MAX ////////////////

// let testArray = [1, 3, 5, 7, 9];

// function miniMaxSum(arr) {
//   let newArray = arr.sort((a, b) => a - b);
//   let min = newArray.shift();
//   let max = newArray.pop();

//   let addRem = newArray.reduce((x, y) => x + y);

//   console.log(addRem + min, addRem + max);
// }

// console.log(miniMaxSum(testArray));

///////// Pairs of socks ////////////

// let randomArr = [1, 2, 1, 2, 1, 3, 2, 2];

// function sockPairs(arr) {
//   let sortArr = arr.sort((a, b) => a - b);

//   let compare = sortArr[0];

//   sortArr.shift();

//   let l = sortArr.length;

//   let alikeSocks = 0;

//   for (let i = 0; i < l; i++) {
//     if (sortArr[i] === compare) {
//       alikeSocks++;
//     } else {
//       compare = sortArr[i];
//     }
//   }

//   return alikeSocks / 2;
// }

// console.log(sockPairs(randomArr));

//////// Count the tallest Candles ///////

// let array = [4, 4, 1, 3, 4, 4, 4];

// function birthdayCandles(arr) {
//   let candleCount = 0;

//   let newArray = arr.sort((a, b) => b - a);

//   let tallestCandle = newArray[0];

//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] === tallestCandle) {
//       candleCount++;
//     } else {
//       break;
//     }
//   }
//   return candleCount;
// }

// console.log(birthdayCandles(array));

// let time = "9:05:45AM";

// function timeConversion(time) {
//   let splitTime = time.split(":");
//   let seconds = splitTime[2].split("");
//   let amPM = seconds.splice(-2, 2);
//   let newAmPm = amPM.join("");

//   let h = parseInt(splitTime[0], 10);

//   if (newAmPm === "AM" && h === 12) {
//     h = 0;
//   } else if (newAmPm === "PM" && h !== 12) {
//     h += 12;
//   }

//   let formattedHour = ("0" + h).slice(-2);

//   console.log(formattedHour);

//   let answer = `${formattedHour}:${splitTime[1]}:${seconds.join("")}`;
//   return answer;
// }

// console.log(timeConversion(time));

///////// Super Hero Function /////////

// let power = [[3, 2, 1], [1, 2, 3], [3, 2, 1]];
// let bullets = [[1, 2, 3], [3, 2, 1], [1, 2, 3]];

// function superHero(power, bullets) {
//   let newPower = [...power];
//   let newBullets = [...bullets];
//   let arrayLength = 3;
//   let subArrayLength = 3;

//   let bulletCount = 0;

//   for (let i = 0; i< newPower.length; i++) {

//     // This will check if any counts have been initialized.
//     // If so, it moves to the second level.
//     if (bulletCount === 0) {
//       initialRound();
//     }

//     // The round function will detemine the best outcome
//     // based on the bulletCount.

//   }

//   function initialRound(power, bullets) {
//       let

//   }

//   function round(power, bulltes) {

//   }

// }

// console.log(superHero(power, bullets));

// function findSmallestNumber(array) {
//   let newArray = [...array];
//   let smallest = newArray[0];

//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] < smallest) {
//       smallest = newArray[i];
//     }
//   }

//   return smallest;
// }

// //////////// Replace word in sentence and maintain case ///////////////////

// function myReplace(str, before, after) {
//   let place = str
//     .toLowerCase()
//     .split(" ")
//     .indexOf(before.toLowerCase());

//   let strArray = str.split(" ");

//   console.log(after.slice(1));

//   if (strArray[place][0] === strArray[place][0].toUpperCase()) {
//     strArray.splice(place, 1, after[0].toUpperCase().concat(after.slice(1)));
//   } else {
//     strArray.splice(place, 1, after[0].toLowerCase().concat(after.slice(1)));
//   }

//   return strArray.join(" ");
// }

// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
// );

/////////// Matching DNA Pairs /////////////////

// function pairElement(str) {
//   // base pairs of AT & GC

//   let basePair1 = ["A", "T"];
//   let basePair2 = ["G", "C"];
//   let splitArray = str.split("");
//   let answer = [];

//   function findPair(letter) {
//     if (basePair1.includes(letter)) {
//       let x = basePair1.filter(l => l !== letter);
//       return x[0]; // Rather sloppy...
//     } else {
//       let y = basePair2.filter(l => l !== letter);
//       return y[0]; // Rather sloppy...
//     }
//   }

//   splitArray.forEach(letter => {
//     let holderArray = [letter];
//     holderArray.push(findPair(letter));
//     answer.push(holderArray);
//   });

//   return answer;
// }

// console.log(pairElement("GCG"));

// // Advanced Solution //
// function pairElement(str) {
//   //create object for pair lookup
//   var pairs = {
//     "A": "T",
//     "T": "A",
//     "C": "G",
//     "G": "C"
//   }
//   //split string into array of characters
//   var arr = str.split("");
//   //map character to array of character and matching pair
//   return arr.map(x => [x,pairs[x]]);
// }

// //test here
// pairElement("GCG");

////////// Return the missing letter in the range //////////////

// function fearNotLetter(str) {
//   let testRange = "abcdefghijklmnopqrstuvwxyz";
//   let testRangeArray = testRange.split("");
//   let inputSplit = str.split("");
//   let answer;

//   let startingPoint = testRangeArray.indexOf(inputSplit[0]);
//   let distance = inputSplit.length;

//   for (let i = 0; i < distance; i++) {
//     if (testRangeArray[i + startingPoint] !== inputSplit[i]) {
//       answer = testRangeArray[i + startingPoint];
//       break;
//     } else {
//       answer = undefined;
//     }
//   }

//   return answer;
// }

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

///////////// Unique Array //////////////

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
