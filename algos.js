////////////////////////// Example Algos ////////////////
/*
///////// Reverse String Algo ////////////////////
function reverseString(str) {
  var array = str.split('');
  var nextArray = array.reverse();
  var lastArray = nextArray.join('');
  return lastArray;
}

var ans = reverseString("Cunt motherfuckers!");
console.log(ans);


/////////////// Convert Celsius to Fahrenheit //////////////////

function convertToF(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;

  return typeof fahrenheit !== undefined ? fahrenheit : "fahrenheit not defined";

}

console.log(convertToF(-1));


////////////// Factorilize a Number ////////////////////

function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

console.log(factorialize(5));


*/

//////////////// Find the Longest Word ////////////////////
/*

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    };
  };


  return maxLength;
}
let randoStr = "The quick brown fox jumped over the lazy dog.";
console.log(findLongestWordLength(randoStr));

*/

/*
//////////////// Find the Largest Number in Subarrays /////////////////

function largestOfFour(arr) {
  let results = []; // defines an array results will go in

  for (let i = 0; i < arr.length; i++) {  // iterates through the first array
    let largeNum = arr[i][0];  // all subarray element will be compared against each other

    for (let sb = 0; sb < arr[i].length; sb++) { //iterates through the subarray
      if (arr[i][sb] > largeNum) {  // compares array item with variable
        largeNum = arr[i][sb];
      };
    };
    results[i] = largeNum; // largest number of the subarray gets placed in results array before next iteration
  };

  return results;
};

let randoArray = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 40, 37, 39], [1000, 1001, 857, 1]];

console.log(largestOfFour(randoArray));


////////////////// Confirm the Ending ////////////////////////

function test(str, target) {
  return str.slice(str.length - target.length) === target;
};
// Slice removes a segment of the entire string. Remember, string characters behave like an array
// but are immutable.
let randoStr = "Butthole is magical";

// Test to see if character is at end of string.
console.log(test(randoStr, "a"));



//////////////// Reapeat a String //////////////////////

function repeatStringNumTimes(str, num) {
  if (num < 0) { // If num is a negative, return an empty string.
    return '';
  }
  let result = ''; // Global variable

  for (let i = 0; i < num; i++) {
    result += str; // Adds string to global for specified number;
  }
  return result;
}

console.log(repeatStringNumTimes("shit", -1));
*/

//////////// Truncate a String ////////////

/*

function truncateString(str, num) {
  let truncate = '...'
  if (str.length > num) { // Checks to see if num is smaller than the string.
   return str.slice(0, num) + truncate;
  } else {
    return str;
  };
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

*/

/////////////////////////////// Finders Keepers //////////////////////////////

// A function that looks through an array (first argument) and returns
// the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

/*

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    
    
    if (func(arr[i]) === true) {
      return arr[i];
    };
    
  };
};

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

*/

/////////////////// Bool Primative Check ///////////////////

// Check if a value is classified as a boolean primitive. Return true or false.
/*
function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

console.log(booWho(true));

*/

////////////////////// Title Case a Sentence //////////////////////////

// My solution
/*
function titleCase(str) {

  let newArray = [];
  let strArray = str.toLowerCase().split(' ');
  
  for (let i = 0; i < strArray.length; i++) {

    newArray.push(strArray[i][0].toUpperCase() + strArray[i].slice(1,strArray[i].length));
    
  };

  return newArray.join(' ');
  
};

console.log(titleCase("sHoRt AnD sToUt"));


// I built this before I new about map() and replace() functions.

*/

/*
// Other solution, intermediate

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");


// Advanced code solution using regex

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

*/

///////////////// Slice and Splice ///////////////////////
/*
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first 
// array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same 
// after the function runs.

function frankenSplice(arr1, arr2, n) {
  
let newArr1 = [...arr1];
let newArr2 = [...arr2];

for (let i = 0; i < newArr1.length; i++) {
  newArr2.splice(n + i, 0, newArr1[i]);
  };

return newArr2;

;}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

*/

//////////// Remove Falsy Values from an Array /////////////
/*
function bouncer(arr) {

  let newArr = arr.filter((item) => {
    return item ? true : false;
  })
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

*/

/////////////////// Random Algo ///////////////

// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once
// it has been sorted. The returned value should be a number.

/*

// My solution

function getIndexToIns(arr, num) {
 // sorts the array
 let index; 
 
 arr.sort((a,b) => a - b);

  if (arr.length < 1) {
    index = 0;
  } else if (num > arr[arr.length - 1]) {
    index = arr.length;
  } else {
    index = arr.findIndex((item) => item >= num);
  };
  console.log(arr.length);
  return index;
  
 
};

console.log(getIndexToIns([2, 5, 10], 15));

//let array = [5, 3, 20, 3];

//array.sort((a,b) => a - b);

//console.log(array);




// Advanced solution

function getIndexToIns(arr, num) {

  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
  
  }
  
  getIndexToIns([1,3,4],2);

*/

////// Matching Letters ///////////////////
/*
// Return true if the string in the first element of 
// the array contains all of the letters of the string in the 
// second element of the array.

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

 */

/////////////////// Chunky Monkey ///////////////////

// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.

/*

function chunkArrayInGroups(arr, size) {

  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
  arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));




*/

/*

function sentensify(str) {
  // Add your code below this line
   return str.split(/\W/).join(' ');
  
  
  // Add your code above this line
}
console.log(sentensify("May-the-force-be-with-you"));



// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  
  return title.toLowerCase().trim().split(/\s+/).join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

console.log(winterComing);



*/

///////////// Using every() ////////////////////

// Returns a boolean value after a function is applied to every
// item in an array
/*
function checkPositive(arr) {
  // Add your code below this line
  return arr.every((item) => {
    return item > 0})
  
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, 4, 5]));



///////////////////  Using some() /////////////////

// The some method works with arrays to check if any 
// element passes a particular test. It returns a Boolean 
// value - true if any of the values meet the criteria, 
// false if not.








////////////// Example of a curry function /////////////


function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30);

*/

/*

function whatIsInAName(collection, source) {
  // What's in a name?
   let arr = collection.filter((n) => {
     return n === source; 
   })
  // Only change code below this line
  
  
  // Only change code above this line
  
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));



*/

/////////////////////// Converts Number to Roman Number ///////
/*
function convertToRoman(num) {
 
  let answer = '';

  while (num > 0) {
    if (num >= 1000) {
      answer += 'M';
      num -= 1000;
    } else if (num >= 900) {
      answer += 'CM';
      num -= 900;
    } else if (num >= 500) {
      answer += 'D';
      num -= 500;
    } else if (num >= 400) {
      answer += 'CD';
      num -= 400;
    } else if (num >= 100) {
      answer += 'C';
      num -= 100;
    } else if (num >= 90) {
      answer += 'XC';
      num -= 90;
    } else if (num >= 50) {
      answer += 'L';
      num -= 50;
    } else if (num >= 40) {
      answer += 'XL';
      num -= 40;
    } else if (num >= 10) {
      answer += 'X';
      num -= 10;
    } else if (num === 9) {
      answer += 'IX';
      num -= 9;
    } else if (num >= 5) {
      answer += 'V';
      num -= 5;
    } else if (num === 4) {
      answer += 'IV';
      num -= 4;
    } else if (num >= 1) {
      answer += 'I';
      num -= 1;
    }
  };
  
  
  
  return answer;
 }
 
 console.log(convertToRoman(9));

 */

////////////////////// Ceasar's Cipher ////////////////////

/*
 // One of the simplest and most widely known ciphers 
 // is a Caesar cipher, also known as a shift cipher. In a shift cipher 
 // the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the 
// letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.



function rot13 (string) {

  const alphabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '?', '.'];

  const codedAlphabet = [' ', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', '!', '?', '.'];
  
  let decodedCipher = [];


  let splitString = string.toUpperCase().split('');
  console.log(splitString);

  splitString.forEach((codeLetter) => {

    for (let i = 0; i < alphabet.length; i++) {
      if (codeLetter === alphabet[i]) {
        decodedCipher.push(codedAlphabet[i]);
      };
    };

  });

  return decodedCipher.join('');
  
};

let codedString = 'SERR PBQR PNZC!';
console.log(rot13(codedString));


////// Advanced solution ///////////
/*
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
};
*/

///////////// Steamroller ///////////////////

// Flatten a nested array. You must account
// for varying levels of nesting.
/*
function steamrollArray(array) {

  let answerArray = [];
  
  array.forEach((value) => {
    answerArray.push(value);
  });



  return answerArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


*/

///////////////////// Palindrome Checker //////////////////////
// My solution
/*
function palindrome(string) {

  function removeCharactersFromSentence (sentence) {
    let regex = /[a-z0-9]/ig;
    let result = sentence.match(regex);
    return result;
  };

  let characterFreeArray = removeCharactersFromSentence(string);
  return characterFreeArray.join('').toLowerCase() === characterFreeArray.reverse('').join('').toLowerCase();

};

console.log(palindrome("A man, a plan, a canal. Panama"));

// Faster solution. This solution doesn.t have to read th string 
// multiple times before determining if the string is palindrome.

function palindrome(str) {
  //assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if ( str[front].match(/[\W_]/) ) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    if ( str[back].match(/[\W_]/) ) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++
    back--
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true

}

*/

/*


function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort();
  // Add your code above this line
};

let random = ["a", "d", "c", "a", "z", "g"];
console.log(alphabeticalOrder(random));

*/

/////////////////////// Translate string into pig latin ///////////////
/*

function translatePigLatin(str) {

  let splitString = str.split('');
  let regex = /a|e|i|o|u/i;

  if (regex.test(splitString[0]) !== true && regex.test(splitString[1]) !== true) {
    return splitString.splice(2, splitString.length).join('') + str[0] + str[1] + 'ay';
  } else if (regex.test(splitString[0]) !== true) {
    return splitString.splice(1, splitString.length).join('') + str[0] + 'ay';
  } else {
    return str + 'way';
  }
};

console.log(translatePigLatin("consonant"));
*/

// class Beer {
//   constructor(name, type, abv) {
//     this.name = name;
//     this.type = type;
//     this.abv = abv;
//   }

//   whatBeer() {
//     return `Fuck you, ${this.name}`;
//   }
// }

// class SuperBeer extends Beer {
//   constructor(name, type, abv, desc, ibu) {
//     super(name, type, abv);
//     this.desc = desc;
//     this.ibu = ibu;
//   }
// }

// const newBeer = new Beer("Homestyle", "IPA", 9.0);

// let beerObjectArray = [];

// let createNewBeerObject = (name, type, abv) => {
//   beerObjectArray.push(new Beer(name, type, abv));
// };

// createNewBeerObject("Falls City", "Pills", 7);
// createNewBeerObject("Homestyle", "IPA", 9);

// console.log(beerObjectArray.length);

// let logArray = array => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i].name);
//   }
// };

// console.log(logArray(beerObjectArray));

// function digital_root(n) {
//   let numberArray = n.toString().split("");
//   let answer = 0;

//   for (let i = 0; i < numberArray.length; i++) {
//     answer += parseInt(numberArray[i], 10);
//   }

//   while (answer.toString().length > 1) {
//     let newAnswer = 0;
//     let test = answer.toString();

//     for (let k = 0; k < test.length; k++) {
//       newAnswer += parseInt(test[k], 10);
//     }

//     answer = newAnswer;
//   }

//   return answer;
// }

// console.log(digital_root(837));

// function divisors(integer) {
//   let answer = [];

//   for (let i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       answer.push(i);
//     }
//   }

//   if (!answer.length) {
//     return `${integer} is prime`;
//   } else {
//     return answer;
//   }
// }

// console.log(divisors(13));

let test = "1 555)555-5555";

function telephoneCheck(str) {
  let regExp = /\d|/g;
  let secondRegExp = /\d|\D/g;
  let funkyArray = str.match(secondRegExp);
  console.log(funkyArray);
  let numbersArray = str.match(regExp);
  console.log(numbersArray);

  if (numbersArray.length === 11 && numbersArray[0] !== "1") return false;
  if (numbersArray.length !== 10 && numbersArray.length !== 11) return false;
  return true;
}
console.log(telephoneCheck(test));

////////////// FCC Cash Register Problem //////////////

// function checkCashRegister(price, cash, cid) {
//   let cashRegister = { status: "", change: cid };
//   // console.log(cashRegister.status);
//   const changeNeeded = parseFloat(cash - price).toFixed(2);
//   const availableChange = totalCashRegister(cid);
//   cashRegister.status = getRegisterStatus(changeNeeded, availableChange);
//   // console.log(cashRegister.status);

//   if (cashRegister.status === "INSUFFICIENT_FUNDS") {
//     cashRegister.change = [];

//     return cashRegister;
//   }

//   // console.log(cashRegister.status);

//   cashRegister.change = getCustomerChange(changeNeeded, cid);

//   if (changeNeeded > totalCashRegister(cashRegister.change)) {
//     cashRegister.status = "INSUFFICIENT_FUNDS";
//     cashRegister.change = [];
//   }

//   // console.log(cashRegister.status);

//   if (cashRegister.status === "CLOSED") {
//     cashRegister.change = [...cid];
//   }

//   // console.log(cashRegister.status);

//   return cashRegister;

//   ////////////// Register Total //////////////
//   function totalCashRegister(changeInDrawer) {
//     let total = 0;

//     for (let change of changeInDrawer) {
//       let changeValue = change[1];
//       total += changeValue;
//     }

//     return total.toFixed(2);
//   }

//   //////// Register Sattus /////////////
//   function getRegisterStatus(changeNeeded, availableChange) {
//     if (Number(changeNeeded) > Number(availableChange)) {
//       return "INSUFFICIENT_FUNDS";
//     }

//     if (Number(changeNeeded) < Number(availableChange)) {
//       return "OPEN";
//     }

//     return "CLOSED";
//   }

//   function getCustomerChange(changeNeeded, changeInDrawer) {
//     let change = [];

//     // prettier-ignore
//     const CURRENCY_DICTIONARY = {
//       PENNY: 0.01,
//       NICKEL: 0.05,
//       DIME: 0.10,
//       QUARTER: 0.25,
//       ONE: 1.00,
//       FIVE: 5.00,
//       TEN: 10.00,
//       TWENTY: 20.00,
//       FIFTY: 50.00,
//       "ONE HUNDRED": 100.00
//     };

//     for (let i = changeInDrawer.length - 1; i >= 0; i--) {
//       const coinName = changeInDrawer[i][0];
//       const coinTotal = changeInDrawer[i][1];
//       const coinValue = CURRENCY_DICTIONARY[coinName];
//       let coinAmount = coinTotal / coinValue;
//       let coinsToReturn = 0;

//       while (changeNeeded >= coinValue && coinAmount > 0) {
//         changeNeeded -= coinValue;
//         changeNeeded = changeNeeded.toFixed(2);
//         coinAmount--;
//         coinsToReturn++;
//       }

//       if (coinsToReturn > 0) {
//         change.push([coinName, coinsToReturn * coinValue]);
//       }
//     }

//     return change;
//   }
// }

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
//   ])
// );
