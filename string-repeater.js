const prompt = require('prompt-sync')({sigint: true});

let str1 = prompt("Enter a string: ")
let str2 = " "

while(str2.length <= 10){
    str2 += str1 
    console.log(str2)
}