'use strict';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name?\n', name => {
    console.log(`Welcome ${name}`);

    readline.question('How old are you?\n', question2);
});

const question2 = (age) => {
    if (age < 16) {
        console.log("You're not allowed to drive in Iowa");
    } else {
        console.log("You're allowed to get a drivers license in Iowa");
    }
    readline.close();
};