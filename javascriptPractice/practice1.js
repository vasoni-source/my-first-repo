// Task 1
const students = [
  {
    name: "Rahul",
    scores: [80, 50, 75],
    details: { city: "Delhi" },
  },
  {
    name: "Aman",
    scores: [60, 65, 70],
    details: { city: "Mumbai" },
  },
  {
    name: "Priya",
    scores: [70, 80, 75],
    details: { city: "Delhi" },
  },
  {
    name: "Neha",
    scores: [90, 60, 65],
    details: { city: "Delhi" },
  },
];

// Tasks:

// Select only the students whose city is "Delhi".
const DehlhiStudents = students.filter(
  (student) => student.details.city === "Delhi"
);
console.log("Delhi Students", DehlhiStudents);

// For each selected student:

// Calculate the average of their scores.s
const averageScoreOfStudents = DehlhiStudents.map((student) => {
  let avg = Math.floor(
    student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length
  );
  // return `{name:${ student.name.toUpperCase()}} : {average:${ avg}}`
  return { name: student.name.toUpperCase(), average: avg };
});

console.log("Average score of students", averageScoreOfStudents);

// Convert their name to uppercase.

// Filter out students whose average score is 75 or below.
const studentBelowAvg = averageScoreOfStudents
  .filter((student) => student.average < 75)
  .map((student) => `${student.name}:${student.average}`);
console.log("students below 75", studentBelowAvg);

// Create a new array of strings in the format: ["RAHUL: 80", "PRIYA: 75"]


// Task2

var x = [1,2,3,4,5,6,7,8,9];

Array.prototype.gourav = function(){
  const even = x.filter((x)=>x%2===0)
  return even
}

console.log(x.gourav())

// Task 3
function Adder(a){
  
  let x = a;
  
  return function (b){
    let y=b;
    
    return function (c){
      let z=c
      let sum = x+y+z
      return sum
    }
  }
  
}
console.log(Adder(1)(2)(3))

// Task 4
// Q: cheack palindrome
let flag = true;
function isPalindrome(str){
  let newStr = str.split(" ").join("").toLowerCase();
  console.log(newStr)
  for(let i=0;i<newStr.length;i++){
    console.log(newStr[i] ,":",newStr[newStr.length-i-1] )
    if(newStr[i]!=newStr[newStr.length-i-1]){
      
      flag = false;
    }
  }
  if(flag===true){
    return true;
  }
  else{
    return false
  }
}
console.log(isPalindrome("Race Car"));
// Output: true

// Task 5
function countChars(str){
  for(let i=0;i<str.length;i++){
    let count =0;
    for(let j=0;str.length;j++){
      if(str[i]===str[j]){
        count++;
        
      }
    }
    console.log(str[i],":",count)
  }
}
countChars("javascript");