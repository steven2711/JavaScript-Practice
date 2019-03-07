//console.log(process.argv);
// Contains a path to node and the current working file.

///////// Working with Time /////////
/*
let waitTime = 4000;
let currentTime = 0;
let waitInterval = 300;
let percentWaited = 0;

let writeWaitingPercent = (p) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.... ${p}%`);
};


let interval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime)*100)
    writeWaitingPercent(percentWaited);

}, waitInterval);


setTimeout(() => {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log('done');
}, waitTime);

process.stdout.write('\n\n\n\n');
writeWaitingPercent(percentWaited);


*/

/////////////// Working with Readline() /////////////////
/*
let readline = require('readline');
let fs = require("fs");
let rl = readline.createInterface(process.stdin, process.stdout);


let realPerson = {
    name: '',
    sayings: []
};




rl.question('What is a real persons name? ', (answer) => {
   
    realPerson.name = answer;

    fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n===========\n\n\n`); 
    // Creates a file. Located in Finder.

    rl.setPrompt(`What would ${realPerson.name} say? (type 'exit' to end)`);

    rl.prompt();
   
    rl.on('line', (saying) => {
        realPerson.sayings.push(saying.trim());

        fs.appendFile(realPerson.name + '.md', `* ${saying}\n`);  
        // Appends to the file each saying.       

        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? `);
            rl.prompt();
        };

   });
    
})

*/



////////////////// Using the exec command ////////////////
/*
let exec = require("child_process").exec;


exec("open https://facebook.com")   // Opens FB in a new tab

*/




/////////////////// Reading Files //////////////////

/*
let fs = require("fs");


fs.readFile("./Desktop/poop.txt", "UTF-8", (err, contents) => {
    if (err) {
        console.log(err);
    };

    console.log(contents);
})

*/
