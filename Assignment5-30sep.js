// Part 1: Event Loop & Execution Order
// Predict the output of the following code before running it:
// console.log('1');

// setTimeout(() => console.log('timeout 1'), 0);

// Promise.resolve().then(() => console.log('promise 1'));

// console.log('2');

// setTimeout(() => console.log('timeout 2'), 0);

// Promise.resolve().then(() => console.log('promise 2'));

// console.log('3');
// output 
// 1,2,3,promise1,promise2,timeout1,timeout2
// Question: Why do promises run before setTimeout?
// because promises have high priority in the priority queu
// Analyze this code and explain the exact order of execution:
// async function test() {
//   console.log('A');
//   await Promise.resolve();
//   console.log('B');
// }
// test();
// console.log('C');
// first it will execute the function call and in the function it first console the 
// A then await promise will go to the webapi and wait then it will exeute the console C 
// then event loop checks the stack then it is empty it will push the await promise to 
// stack and it executes then consoles B
// Question: What happens inside the microtask queue when await is used?
// Ans : it will divide the synchrounous part and asyncronous part and event loop will
//  prioritise the task in microtask becase microtask carries priority tasks 


// Run this code and measure the delay:
// console.time('timer');
// setTimeout(() => {
//   console.timeEnd('timer');
// }, 2000);

// for (let i = 0; i < 1e9; i++) {} 
// Question: Why does the setTimeout callback run later than 2s?
// Because we have  aheavy loop here first the loop will execute in the stack and 
// settTimout will go to webapi then check the stack if empty it executes in the 
// stack settimeout assures the delay of 2 second but it can execute later then 2 sec


// Given this snippet, fix it so that it prints in the correct order:
// Expected: 1 → 2 → 3 → 4
// console.log(1);

// setTimeout(() => console.log(4), 0);

// Promise.resolve().then(() => console.log(3));

// console.log(2); 

function fn(){
    console.log("Done");
}
setTimeout(fn, 2000);

function delay(s) {
  return new Promise(resolve => setTimeout(resolve, s));
}

delay(2000).then(() => console.log("Done"));

function delay2(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fn2() {

  await delay2(2000);  

  console.log("Done");
}

fn2();
