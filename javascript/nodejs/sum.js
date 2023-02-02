'use strict';


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numArr = [];
const question = () => {

    readline.question('Input a number\n', (input) => {
        if (input.toLowerCase() === 'stop') {
            console.log('Total number: ' + getNumber(numArr));
            readline.close();
        } else {
            console.log(`Your number is: ${input}`);
            numArr.push(parseInt(input));
            question();
        }
    });
};

function getNumber(numArr) {
    return numArr.reduce((a, b) => a + b);
}

question();