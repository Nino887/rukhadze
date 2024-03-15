"use strict";

//task:1
let number = 100

if (number < 50)  {
    console.log("Less than 50");
}
else if (number > 20){
    console.log("more than 20");
}
else {
    console.log("error");
}
let conditionResult = number < 50 ? "less than 50": number > 20 ? "more than 20": "error"

console.log(conditionResult);
//task:2

let username = "mariam"
if (username === mariam) {
    console.log(true);
}
else {
    console.log(false);
}
let nameResult = userName === mariam ? "true" : false;

console.log(userName);
//task:3

let userName1 = "Mariam";
switch (userName1) {
  case "Mariam":
    console.log(true);
    break;
  default:
    console.log(false);
}