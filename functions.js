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

console.log
