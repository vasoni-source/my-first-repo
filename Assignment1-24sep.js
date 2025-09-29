// {
//   var x = 1;
//   let y = 2;
//   const z = 3;
// }

// console.log(x);
// console.log(y);
// console.log(z);
// the lines which is consoling y and z will throw an error because 
// y and z have block scope
/*
var x = 1;
let y=2;
const z = 3
*/
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 1;
// let b = 2;
// const c = 3;
// the output will be undefined
/*
because a hoisted and its value is inialized with undefined but let and 
cont gets into the temporal dead zone it value is not initialised b and 
c will throw an error*/

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const c1 = counter();
// console.log(c1());
// console.log(c1());
// const c2 = counter();
// console.log(c2());

// the output will be 1 2 1
// because both the variables calling the function
// seperately so the function in both variables will
// be start with count value 0 both are independent of each other both will 
// create there own execution context

let num = 10;
let obj = {value: 10};

function changePrimitive(x) {
  x = 20;
}

function changeObject(y) {
  y.value = 20;
}

changePrimitive("num",num);
changeObject("obj",obj);

// console.log(num);
// console.log(obj);
// the value of number will remain same because here we passed the value as parameter
// itself its address is not sent so it send a copy of that value it will not allow to update its value
// the value of obj changes because its passed the address of that variable so in change ints value will
// affect the original value
console.log(1 + "2");
// 12 1 will be converted to type string
console.log("2" * 3);
// 6 2 will be converted to number
console.log(0 == false);
// true both will be converted to one type 
console.log(0 === false);
// false checks the data type both have dirrent data types
console.log([] == false);
// true 
console.log([] === false);
// false check the type

// console 1 + "2"
// console "2" * 3 thyw both are type coersions

sayHello();
console.log(x);

function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;
// the sayhello function is called before its declaration it
// will work fine and console the hello beacuse of hoisting
// its declaration will  go at the top
// undefined
// if we add console log y before declaration it will throw an refference error
// beacause it will be in temporal dead zone
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name);
console.log(obj2.name);

console.log(obj1 === obj2);

// beacause objects are passed as refference both will
// share the same address so changing one will affect the other

const arr = [1, 2, 3, 4, 5];
const a = arr.sort();
const b = arr.slice(0, 3);
console.log(a === arr);
console.log(b === arr);
// sort method is mutate and slice is not because
// slice will return the new array and sort will change the original array
// the a===arr return true because sort is muate method it changes
// the original array and the value of both becomes same noth share memory location
// the b===arr return false because it will return the new array
// which is different from arr original array both share different memory
