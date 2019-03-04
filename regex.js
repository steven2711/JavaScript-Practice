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

/*

let extractStr = "Extract the word 'coding' from this coding string.";
let codingRegex = /coding/g; // Use 'g' to pull every instance
let result = extractStr.match(codingRegex); // Change this line

console.log(result);
// Output looks like:
// ['coding', 
//   index: 18, 
//   input: 'Extract the word \'coding'\ from this string.']



console.log(extractStr);


*/

/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // "." is a wildcard character. This would match with fun, sun
// bun, hun, run, shun, etc.
let result = unRegex.test(exampleStr);


///////////////////// Character Classes and Shortcuts //////////////////


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Use brackets to specify a character class.
// For example, b[aei]g, would find bag, beg, and big. Use a hyphen to specify an 
// range of letters. [a-e].
// Note: \w is a shortcut equal to [A-Za-z0-9_]
// To search for the opposite use \W.
// To search all digits use \d. Equal to [0-9]. The opposite is \D.
let result = quoteSample.match(vowelRegex); 

*/

/*

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // You can also secify a range of numbers.
let result = quoteSample.match(myRegex); 

console.log(result);


*/

/*
let quoteSample = "3 blind mice.";
let myRegex = /[^a-z0-9]/ig; // The carot is used to negate characters.
let myRegex = /^3/; // Also used to find the first word of a string.
let result = quoteSample.match(myRegex); 



console.log(result);
*/

/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Finds every instance where "s" is consecutive.
let result = difficultSpelling.match(myRegex);


console.log(result);


*/


// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/;

// Used to match specified characters 0 or more times.

// let result = chewieQuote.match(chewieRegex);



// console.log(result);



/*

let text = "What the fuck is the titanic?";
//let myRegex = /t[a-z]*i/; // Finds the largest instance of the specified characters.
let myRegex = /t[a-z]?i/; // Finds the shortest instance.
let result = text.match(myRegex);


console.log(result);


*/
/*

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Use the dollar sign to find patterns at the end of strings.
let result = lastRegex.test(caboose);

console.log(result);

*/

/*

let username = "JackOfAllTrades900";
let userCheck = /^[a-z]{2,}\d*$/i; 
let result = userCheck.test(username);

// 1. The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// 2. Username letters can be lowercase and uppercase.
// 3. Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.




console.log(result);

*/
/*



let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // This will find all whitespace within a string.
//This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
// \S adds up all non-whitespace characters.
let result = sample.match(countWhiteSpace);



*/

/*

let sampleWord = "astro99naut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/i;
// ?= is a positive lookahead. It will make sure the pattern is there,
// but it will not actually match it.
// ?! is a negative match. It will make sure the element in the search pattern 
// isn't there.
// 1. Matches passwords that are five characters long and have two consecutive
// digits.
let result = pwRegex.test(sampleWord);


console.log(result);

*/

/*

let repeatNum = "42 42 42 67 98 20";
let reRegex = /(\d*)\s\1/; // Research more about search groups.
let result = repeatNum.match(reRegex);


console.log(result);


*/

/*

let huhText = "This sandwich is good.";
let fixRegex = /good/g; // Searches for the pattern 'good'
let replaceText = "okey-dokey"; // Replacement text
let result = huhText.replace(fixRegex, replaceText);



console.log(result);


*/