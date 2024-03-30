"use strict"

//task1
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray2 = array2.map(function (item) {
    if (typeof item === "number") {
      return Math.pow(item, 2);
    } else if (typeof item === "string") {
      return item.toUpperCase();
    } else {
      return item;
    }
  });
  
  console.log(newArray2);

//task2
let info= "good day"
let splitedInfo = info.split(" ");
let newInfo = splitedInfo.slice(1, 2);
console.log(newInfo);

//task3
function stringLength(string) {
  return string.length;
}

let example = "string";

let getStringLength = stringLength(example);
console.log(getStringLength);
//task4
let answer = prompt("Capital of Georgia");
let correctAns = "tbilisi";
if (answer ===correctAns  || answer.toLowerCase() === correctAns) {
  alert("Correct!");
} else {
  alert("Incorrect");
};

//task5
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawuberry");
console.log(fruits);

//task6
let array3 = [5, 25, 89, 120, 36];
array3.push("javascript", "python");
array3.unshift("html", "css");
console.log(array3.length);
array3.pop();
array3.shift();
console.log(array3);

//task7
let fruits2 = ["orange", "banana", "kiwi"];
console.log(fruits2.length);
fruits2.push("apple", "pineapple");
fruits2.unshift("watermelon");
console.log(fruits2.length);
fruits2.splice(2, 0, "mango");
fruits2.pop();
fruits2.shift();
console.log(fruits2.length);

//task8
let array4 = [1, 2, 3, 4, 5];
array4.splice(3, 0, "a", "b", "c");
console.log(array4);

//task9
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray5 = array5.map(function (item) {
  let result = item / 3;
  return result;
});
console.log(newArray5);
//task10
let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

//task11
let array8 = [15, 100, 3, 10, 36];
array8.splice(2, 1, "three");
console.log(array8);
//task12
let array1 = ["hello1", 14, 24, "hello2"];

let numbersArray1 = array1.filter(function (item) {
  return typeof item === "number";
});
console.log(numbersArray1);

let numbersArray2 = array1.filter((item) => typeof item === "number");
console.log(numbersArray2);
