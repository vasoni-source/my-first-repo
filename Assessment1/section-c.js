// Q1.
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const section = document.querySelector("#section");
const arr = [];

function addTask() {
  let inpt = input.value;
  console.log(inpt);
  arr.push(inpt);
  console.log(arr);
  arr.map((item) => {
    let itemPara = document.createElement("p");
    section.appendChild(itemPara);
    itemPara.innerText = item;
  });
}

console.log(arr);
addBtn.addEventListener("click", addTask);

// Q2.
console.log("Start");

setTimeout(() => {
  console.log("Data fetched");
}, 0);
let myPromise = new Promise((resolve, reject) => {
  if (resolve) {
    console.log("Timeout");
  } else {
    console.log("Promise reject");
  }
});
async function fetchData() {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let result = await fetchData.json();
  console.log("End");
}
fetchData();
console.log("Promise resolved");
