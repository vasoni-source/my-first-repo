// Operators Practice
// Predict the output of given console.log statements:

// console.log(3 + 3 * 6 / 6);
// 6 * have highest precidency then / then + 
// console.log(10 % 4 * 2 + 5);
// 9 % and * have high precidency then + it gets calculated from left to right
// console.log(1 + "1" - 1);
// 101+"1 "becomes 11 tbeacase of type conversion 
// console.log(true + false);
// 1 true states for 1 and false staes for 0 
// console.log("5" * 2 + 1);
// 11 type conversion happens from "5" to 5 

// Truthy/Falsy Filters

// const arr = [0, "", null, undefined, NaN, 1, "hello", true, false];
// Filter only truthy values from an array.
// Filter only falsy values from an array.

// let arr = [1,3,5,7,null,0,false];
// let truthy = arr.filter(i=>i);
// console.log(truthy);
// let falsy = arr.filter(i=>!i);
// console.log(falsy);

// Optional Chaining

// const user = { profile: { name: "Pablo" } };
// const user2 = { profile:null };
// Access a property safely when the path exists.
// Try accessing a deeply nested property that doesn’t exist (without throwing error).
// console.log(user.profile.name);
// console.log(user2?.profile?.name);

// Object Freeze/Seal

// const car = { brand: "Tesla", model: "X" };
// Create an object and seal it. Try adding and modifying properties.
// Freeze the object and try modifying properties.
// Object.freeze(car)
// Object.seal(car);
// car.brand = "honda";
// car.color = "red";
// console.log(car);

// Array Functions

// const nums = [1, 2, 3, 4, 5];
// Given an array of numbers, use map, filter, and reduce in a chain to:
// Multiply each number by 2.
// Keep only numbers >= 6.
// Return the sum of the resulting numbers.
// let multiples = nums.map(num => num*2);
// console.log(multiples);
// let greaterNums = multiples.filter(ele=>ele>=6)
// console.log(greaterNums);
// let sum = greaterNums.reduce((acc,num,index)=>acc+num);
// console.log(sum);

// let arr = ["Alice", "Bob", "Charlie"];

// let result = arr.reduce((acc,curr,index)=>  {acc[index] = curr;
// return acc;},{}
// )
// console.log(result);

// Find Unique Values

// const arr = [1, 2, 2, 3, 4, 4, 5];
// Given an array with duplicates, return an array of unique values.
// Solve once with filter.
// Solve again with reduce.

// const unique = arr.filter((num , index ,arr)=>{
//     return arr.indexOf(num)===index;
// })
// console.log(unique);
// const unique2 = arr.reduce((acc,curr)=>{
//     if(!acc.includes(curr)){
//         acc.push(curr);
//     }
//     return acc;
// },[])

function addKeyValue(obj, key, value) {
  // code here
  //   obj.color = "red";
  obj[key] = value;
  return obj;
}

const person = { name: "Pablo" };
console.log(addKeyValue(person, "age", 25));
addKeyValue(person, "salary", 20000);
console.log(person);
