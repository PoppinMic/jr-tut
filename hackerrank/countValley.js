'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
  let arr = s.split("");
  let altitude = 0, valleyStart = false, result = 0;
  arr.forEach(element => {
    if(element === "U"){
      altitude++;
    }else{
      altitude--;
    }
    if(altitude <0 && valleyStart === false){
      valleyStart = true;
      result++;
    }
    if(altitude >= 0){
      valleyStart = false;
    }
  });
  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
