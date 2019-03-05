//////// Examples of Array Manipulations ///////////
/*
///////// Push and Unshift ////////////
function mixedNumbers(arr) {

arr.unshift('I',2,'three'); // unshift places items in front of the array
arr.push(7,'VIII', 9); // push places items at the back of the array

  return arr;
}


console.log(mixedNumbers(['IV', 5, 'six']));

*/
/*
///////////// Pop and Shift ///////////
function popShift(arr) {
  let popped = arr.pop(); // Pop removes item at end of array
  let shifted = arr.shift(); // Shift removes item at beginning of array
  return [shifted, popped];
}
// Both removed items can be assigned to variables
console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

/*
////////////// Splice //////////////
let array = ['today', 'was', 'not', 'so', 'great'];

let newArray = array.splice(2, 2); // First arg. defines array position.
// Second arg. defines number of items to remove.
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
console.log(array);
console.log(newArray);
// Spliced items can be assigned to a new array.
*/

//////////////// Splice ex. 2 ///////////////
/*
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "Blanched Almond"); // The third parameter is used
  // to replace what was removed. Can take numerous args.
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));




/////////// Slice //////////////
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3); // First parmeter is index pointer, second is the index stopper.
// Slice allows you to copy specified elements to a new
// array without altering the original.
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

console.log(weatherConditions);
console.log(todaysWeather);


/////////// Spread Operator //////////////
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; //Copies the entire array.
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
console.log(thisArray);
console.log(thatArray);



/////// Spread Operator Ex. 2 //////////
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 4));



/////// Spread Operator Ex. 3 ////////
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

console.log(thatArray);



///// Testing if Element Exists and/or What Array Position ///////

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')) // returns -1
console.log(fruits.indexOf('oranges')) // returns 2
console.log(fruits.indexOf('pears')) // returns 1, the first index at which the element exists



///// Iterating Through Arrays with Loops ////////

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {      // Iterates through the array to choose numbers greater than 10.
      newArr.push(arr[i]);  // Places the items in a new array.
    }
  }
  return newArr;
}


let randoArray = [2, 12, 8, 14, 80, 0, 1];
console.log(greaterThanTen(randoArray));
// returns [12, 14, 80]
console.log(randoArray);





/////// Iterating Ex. 2 ////////////
function filteredArray(arr, elem) { // Checks to see if element is in the array.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem)===-1) {
      newArr.push(arr[i]);
    };
  };
  return newArr;
};

let poop = [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]];

console.log(filteredArray(poop, 5));
console.log(poop[0][1]);
console.log(poop[0].indexOf(2));


*/




////////// Adding Key-value pairs to Objects ///////////
/*
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};

let randVar = 'followers';

// let userData = FCC_User.randVar;
// You can't use dot notation to access an object with 
// a variable.


let userData = FCC_User[randVar];
// You can use brackets however.


console.log(userData);

*/
///////// Iterate Through the Keys of an Object with a For...In Statement //////////
/*
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let count = 0;
  for (let user in obj) {
    if (obj[user].online === true) { // Make sure to use bracket notation when
      // using variables.
      count++;
    };
    
  };
  return count;
};

console.log(countOnline(users));

//console.log(users.Alan.online);

*/

////// Getting a list of object keys /////////
/*
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
// Returns the object keys as strings in an array //
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));


*/


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line  
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, 'Pete'));

//console.log(user.data.friends);