//console.log(process.argv);
// Contains a path to node and the current working file.

///////// Working with Time /////////

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