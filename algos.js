////////////////////////// Example Algos ////////////////

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




//////////////// Find the Longest Word ////////////////////

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength.length) {
      maxLength = words[i];
    }
  }


  return maxLength;
}
let randoStr = "It's time to fuck  this godforsaken place up!";
console.log(findLongestWordLength(randoStr));




//////////////// Find the Largest Number in Subarrays /////////////////

function largestOfFour(arr) {
  let results = []; // defines an array results will go in

  for (let i = 0; i < arr.length; i++) {  // iterates through the first array
    let largeNum = arr[i][0];  // all subarray element will be compared against each other

    for (let sb = 0; sb < arr[i].length; sb++) { //iterates through the subarray
      if (arr[i][sb] > largeNum) {  // compares array item with variable
        largeNum = arr[i][sb];
      }
    }
    results[i] = largeNum; // largest number of the subarray gets placed in results array before next iteration
  }

  return results;
}

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
