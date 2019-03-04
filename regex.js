// Is it possible to create a regex object to simplyfy 
// the regex memorization aspect? Maybe using template
// literals?


// Use the .test method to return true or false
/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);


*/

//// Exp. test ////
/*
let searchWord = (word, string) => {
    let regexWord = /word/; // Make sure thr regex is a literal
    let result = regexWord.test(string);
    return result;
};

let randomString = "What the fuck is going on here?";

let anotherVar = /fuck/;

console.log(searchWord('fuck', randomString));

console.log(anotherVar.test(randomString));
*/

///////////////// OR operator usage //////////////
/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Use the OR operator
// to search for multiple patterns.
let result = petRegex.test(petString);




let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Use the 'i' flag
// to ignore case in regex search.
let result = fccRegex.test(myString);

*/


let extractStr = "Extract the word 'coding' from this coding string.";
let codingRegex = /coding/g; // Use 'g' to pull every instance
let result = extractStr.match(codingRegex); // Change this line

console.log(result);
// Output looks like:
// ['coding', 
//   index: 18, 
//   input: 'Extract the word \'coding'\ from this string.']



console.log(extractStr);