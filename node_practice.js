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






/////////////////// HTTP Module ////////////////////////

// Making a request

/*
let https = require("https");
let fs = require("fs");


let options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};


let req = https.request(options, (res) => {
    let responseBody = "";

    console.log("Response has started.");
    console.log(`Server Satus: ${res.statusCode}`);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", (chunk) => {

        console.log(chunk);

    });

    res.on("data", (chunk) => {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", () => {
        fs.writeFile("george-washington.html", responseBody, (err) => {
            if (err) {
                throw err;
            };

            console.log("File Downloaded");

        });
    });

});

req.on("error", () => {
    console.log(`Problem with request: ${err.message}.`)
});

req.end();


*/

////////////////////////// Building a Web Server ////////////////////////////
/*

let http = require("http");

let server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Hello world.");
});

server.listen(3000);


console.log("Server listening on port 3000");


*/



////////////////////// Serving JSON Data ///////////////

let http = require("http");
let data = require("./inventory");

http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    } else if (req.url === "/instock") {
        listInStock(res);
    } else if (req.url === "/onorder") {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Whoops.....data not found");
    };

}).listen(3000);

console.log("Server listening on port 3000");

// Functions that filter the JSON file for specified data.

let listInStock = (res) => {
    let inStock = data.filter((item) => {
        return item.avail === "In stock";
    });

    res.end(JSON.stringify(inStock));
};


let listOnBackOrder = (res) => {
    let onOrder = data.filter((item) => {
        return item.avail === "On back order";
    });

    res.end(JSON.stringify(onOrder));

};


// You can run this server through node and display through your browser on 
// port 3000.