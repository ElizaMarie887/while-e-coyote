/*
-Get input from the user - prompt-sync
-while loop - allowers the user to input multiple numbers
-pring out the sum at the end- console.log
-Variable to hold the sum
- += to add to our sum
- reprompt inside the while loop
*/

const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Enter some numbers (type 0 when complete): "));

let sum = 0;

while(number != 0){

    sum += number;
    number = Number(prompt('~ '))

}

console.log(sum);
