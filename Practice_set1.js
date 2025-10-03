// Question:
// Given the following object, how would you create a deep copy of it so that
// modifying the nested object in the copy does not affect the original?
const original = { name: "Alice", address: { city: "Paris", zip: 75000 } };
const deepCopy = structuredClone(original);
deepCopy.address.city = "london";
console.log(deepCopy);
console.log(original);

// Question:
// Write a function that reverses a string without using the built-in reverse() method.
function reverseString(str) {
//   your code here
    let reverseStr = ""
    for(let i = str.length-1;i>=0;i--){
        reverseStr += str[i]; 
    }
    return reverseStr;
}
console.log(reverseString("JavaScript")); // should print "tpircSavaJ"

// Question:
// Given an array of numbers, write a function that returns a new array with only
// even numbers multiplied by 2 using array methods.const numbers = [1, 2, 3, 4, 5, 6];
// expected output: [4, 8, 12]
const numbers = [1, 2, 3, 4, 5, 6];
const evenNum = numbers.filter((num) => num % 2 == 0);
console.log(evenNum);
const multipliedNum = evenNum.map((num) => num * 2);
console.log(multipliedNum);

// Question:
// How can you create an object with keys dynamically based on an array of strings?
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
// create an object: { name: "Alice", age: 25, city: "Paris" }
const obj = {};
for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}
console.log(obj);

// Question:
// What will be the output of the following and why?
console.log(5 + "5");
// 55 5 will converted from number to string
console.log("5" - 2);
// 3 5 will converted from string to number
console.log(true + 1);
// 2  here true will be converted to 1 
console.log(null == 0);
// false here null is reffered to as object
console.log(null === 0);
// false
// console.log(typeof(null)) here type of null will be object 
// Question:
// Write a closure that keeps track of a counter. Each time the function is called,
// it should increment and return the counter.const counter = createCounter();
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Question:
// What will be logged to the console and why?
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);
// 2
// Reason both obj1 and obj2 have same refference so changing one will change the other;

// Question:
// Given an array of objects, find all objects where the age is greater than 18.
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 25 },
];
// expected output: [{name: "Bob", age: 20}, {name: "David", age: 25}]
const ageFilter = users.filter((user) => user.age > 18);
console.log(ageFilter);

// Question:
// Write a function to capitalize the first letter of each word in a string.function
function capitalizeWords(str) {
  // your code here
  const words = str.split(" ");
  const capitalWords =[];
  for(let i=0;i<words.length;i++){
    let word = words[i];
    word = word.slice(0,1).toUpperCase() + word.slice(1,words.length+1)

    capitalWords.push(word);
  }
  const result = capitalWords.join(" ");
  return result;
}
console.log(capitalizeWords("hello world from js")); // "Hello World From Js"

// Question:
// What’s the difference between these two approaches? Which one is shallow and which 
// is deep?
const arr = [[1], [2], [3]];
const copy1 = arr.slice();
const copy2 = JSON.parse(JSON.stringify(arr));
// slice is a shalow copy because it will chnage the original arr both have same reffernce 
// to the nested objects
// JSON.parse(JSON.stringify(arr)) is deep copy beaciuse changes in copy will not 
// change the original both have there own refferences