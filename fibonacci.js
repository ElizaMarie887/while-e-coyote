const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt("Enter a number: "))

let count = 0
let fibValue1 = 0
let fibValue2 = 1

while (count <n){
    console.log(fibValue1);
    const fibValue3 = fibValue1 + fibValue2;
    fibValue1 = fibValue2;
    fibValue2 = fibValue3;
    count = count + 1
}