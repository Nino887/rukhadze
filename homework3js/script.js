"use strict";


//task1
function sum(...numbers){
    let sumLement=0;
    for(let item of numbers){
    sumLement += item;
}
return sumLement;
}
let resultSum = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultSum)

//task2
let user = {
    firstname: 'giorgi',
    lastname:'saakadze',
    age: 32,
    isloggedin: true
  }
  function getName(logInfo) {
    if (user.isloggedin) {
      return user.firstname + " " + user.lastname;
    }
    return false;
  }
  let result1 = getName(user.isloggedin);
console.log(result);

//task3
function getMax (...numbers){
    return Math.max(...numbers)
}
let maxResult = getMax(300,50,8,500,400);
console.log(maxResult);

//task4
function number (x) {
    if (x % 2 === 0) {
       return "this number is even"
    } else {
        return "this number is odd"
    }

}
let result2 = number (59)
console.log (result2)

//task6
let array = [7,6,5,4,3];
array.reverse (); 
console.log (array); 
