// Tools
/*
// Using Regex match and test functions/strings.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Hyphen allows you to set a letter span
// "i" means ignore case
// "g" means global match
// "/w" is the short-hand to capture all characters including the underscore
// Lookup Regex cheat sheet
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result);

// Displays every letter within the Regex range.
*/

// Example 2
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou1-9]/gi; // The carrot allows you to exclude items.
// This list will include spaces and punctuation.
let result = quoteSample.match(myRegex);

console.log(result);


// Example 3
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // The "+" looks for consective lettering
let result = difficultSpelling.match(myRegex);

onsole.log(result);
