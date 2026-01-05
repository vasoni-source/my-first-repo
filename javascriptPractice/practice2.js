// --------------------------------Map--------------------------------------------
// Task 1 => Given an array of numbers, return a new array where each number is squared.
let arr1 = [1,2,3,4,5];

function square(arr){
  let squraedNum = arr.map((num)=>num*num);
  return squraedNum;
}

console.log(square(arr1));
// --------------------------------------------------------------------------------
// Task 2 => Convert an array of temperatures in Celsius to Fahrenheit.

let celsiusArr = [25,40,13,-4,35];

function convertToFahraenheit(celsiusArr){
  let FahrenheitTemps = celsiusArr.map((celsius)=>(celsius*9/5) +32);
  return FahrenheitTemps
}
console.log(convertToFahraenheit(celsiusArr))
// --------------------------------------------------------------------------------


// Task 3 => From an array of strings, return an array containing the length of each string.

let arrOfStr = ["vaibhavi","pragya","anuja"];

function legthOfString(arr){
  let lengthArr = arr.map((word)=>word.length);
  return lengthArr;
}
console.log(legthOfString(arrOfStr));

// --------------------------------------------------------------------------------

// Task 4 => Given an array of objects { name, price }, return an array of just the prices.

const arrOfObj = [{name:"iphone",price:80000},{name:"buds",price:1200},{name:"tv",price:22000}];

function returnPrice(arr){
  const prices = arr.map((obj)=>obj.price);
  return prices
}
console.log(returnPrice(arrOfObj));

// --------------------------------------------------------------------------------

// Task 5 => Capitalize the first letter of each word in an array of strings.

const arrWord = ["dog","cat","cow","pig"];

function capitalizeFirstLetter(arr){
  const capitalizedWord = arr.map((word)=>word.charAt(0).toUpperCase()+word.slice(1));
  return capitalizedWord;
}
console.log(capitalizeFirstLetter(arrWord))

// --------------------------------Filter-------------------------------------------
// Task 1 => From an array of numbers, return only the even numbers.
const arrOfNumbers = [1,4,2,9,5,0];

function evenNumbers(arr){
  const evenNums = arr.filter((num)=>num%2===0);
  return evenNums;
}
console.log(evenNumbers(arrOfNumbers))
// --------------------------------------------------------------------------------

// Task 2 => Filter out all falsy values from an array.

const values = [1,0,true,false,"","vaibhavi",null,undefined,{} , {name:"pragya",age:23}];

function filterFalsyValues(arr){
  const falsyValues = arr.filter((value)=>!value);
  return falsyValues;
}
console.log(filterFalsyValues(values))

// --------------------------------------------------------------------------------


// Task 3 => From an array of strings, keep only strings with more than 5 characters.

const arrayOfstring = ["vaibhavi","nidhi","anuja","bob","vaishnavi"];

function stringWithMoreThenFiveChar(arr){
  const str = arr.filter((name)=>name.length>5);
  return str;
}
console.log(stringWithMoreThenFiveChar(arrayOfstring));

// --------------------------------------------------------------------------------

//  Task 4 => Given an array of users { name, isActive }, return only active users.

const users = [{name:"vaibhavi",isActive:true},{name:"pragya",isActive:false},{name:"anuja",isActive:true}];

function activeUsers(users){
  const activeUsers = users.filter((user)=>user.isActive===true);
  return activeUsers;
}
console.log(activeUsers(users))

// --------------------------------------------------------------------------------

// Task 5 => From an array of numbers, remove all duplicate values.

const numbers = [1,2,3,1,5,8,5,6,9];

function removeDuplicate(arr){
  const newArr = arr.filter((num,index,arr)=>num);
  return newArr;
}
console.log(removeDuplicate(numbers))

// --------------------------------Reduce-------------------------------------------


// Task 1 => Find the sum of all numbers in an array.

const nums = [1,2,3,4,5];

function sum(arr){
  const sum = arr.reduce((acc,curr)=> acc+curr,0)
  return sum;
}
console.log(sum(nums))

// Task 2 => Find the maximum number in an array.

const numArr = [12,34,5,4,34,87,56,17];

function maxNum(arr){
  const maNum = arr.reduce((acc,curr,index,arr)=> {return acc>curr ? acc : curr});
  return maNum;
}
console.log(maxNum(numArr));

// --------------------------------------------------------------------------------

