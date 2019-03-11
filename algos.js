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
// Slice removes a segment of the entire string. Remember, string characters behave live an array
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