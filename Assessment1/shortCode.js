// Q1.
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

const check = new checkNumber(10);
//
// Q2.
const arr = [1, 2, 3, 4];
let newArr = [];
arr.forEach((element) => {
  let num = element * 2;
  newArr.push(num);
});
console.log(newArr);
//  Q3
const user = { name: "John", age: 25 };
// Use destructuring and template literals to log:
// "John is 25 years old."
let { name, age } = user;
console.log(name, " is ", age, " years old ");

// Q4
const msg = document.querySelector(".msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  msg.innerText = "Button Clicked!";
});

// Q5.
const numbers = [1, 2, 3, 4, 5];
const evenNums = numbers.filter((num) => num % 2 == 0);
console.log(evenNums);
const sum = numbers.reduce((acc, num) => {
  return acc + num;
});
console.log(sum);

// Q6.
const fetchBtn = document.getElementById("fetchBtn");
async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchBtn.addEventListener("click",getData);
