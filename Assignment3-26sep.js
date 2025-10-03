// Easy Level
// 1. Shallow vs Deep Copy
// let obj = { x: 1, y: { z: 2 } };
// let copy1 = { ...obj };
// let copy2 = structuredClone(obj);

// copy1.y.z = 50;
// copy2.y.z = 100;

// console.log(obj.y.z); 
// Predict the output?
// 50

// 2. Array Destructuring
const nums = [5];
const [a=1, b=2, c=3] = nums;
console.log(a, b, c); 
// What will be logged?
// 5,2,3

// 3. Object Destructuring
const student = { id: 1, name: "Ravi" };
const { id, name, grade="A" } = student;
console.log(id, name, grade);
// What is grade value?
// 1,Ravi,A

// 4. String Reverse
// Implement a function that reverses "JavaScript" using the custom .reverse() method.
const str = "javascript";
String.prototype.reverse = function(){
return this.split("").reverse().join("");
}
console.log(str.reverse());

// 5. String Methods
console.log("  hello world  ".trim().toUpperCase().slice(0,5));
// What will be the output?
// HELLO

//  Medium Level
// 6. Prototype Inheritance/
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function() {
  console.log(this.type + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak();
// What will be logged?
// Dog makes a sound
// Add another method eat() in prototype that logs "Dog is eating" and call it.
Animal.prototype.eat = function(){
    console.log(this.type + " is eating");
}
dog.eat();

// this Keyword
const person = {
  name: "Amit",
  greet: () =>{
    console.log("Hello " + this.name);
  }
};
const greetFn = person.greet;
greetFn();

function fn(name){
    this.name = name;
    this.greet2 = ()=>{
        console.log(this.name);
    }
}
const obj = new  fn("amit");
obj.greet2();
// Why does this print undefined?
// because object does not have this only functions have it so it will 
// take the this from global scope also the refference of greetFn is seperate
// it does not reffer to person
// // Fix it using .bind().

// let greetfn = person.greet.bind(person);
// greetfn();

// 8. Class vs Constructor
// Write a constructor function and a class for Book with properties: title, author
// Add a method getDetails() in both which returns "title by author".
// Create 2 objects and call the method.
class Book {
  constructor(title,author){
    this.title = title;
    this.author = author;
  }
    getDetails(){
      console.log(this.title ," by " ,this.author);
    }
}
const myObj = new Book("girl wash your face","Rachell Hollis")
myObj.getDetails();

function Book2(title,author){
  this.title = title;
  this.author = author;
  this.getDetails = function(){
     console.log(this.title ," by " ,this.author);
  }
}
const myObj2 = new Book2("girl wash your face","Rachell Hollis");
myObj2.getDetails();

// 9. Array Functions
// Write code using:
// map() → multiply every element in [1,2,3,4] by 3.
// filter() → keep only even numbers.
// reduce() → find sum of all elements.
const arr = [1,2,3,4,5];
const multiples = arr.map(i=>i*2);
console.log(multiples);
const evens = multiples.filter(num=>num%2==0);
console.log(evens);
const sum  = evens.reduce((acc,num)=>acc+num);
console.log(sum);

// 10. Ways to Create Objects
// Create an object representing a Laptop using all 5 ways (Literal, new Object(), Constructor, Class, Object.create()).
// Each object should have a property brand = "HP".
class laptop {
  constructor(brand){
    this.brand = brand;
  }
}
const laptop1 = {
  brand :"HP"
}
console.log(laptop1.brand);
const laptop2 = new laptop("HP");
console.log(laptop2.brand);
const laptop3 = new Object();
laptop3.brand = "HP";
console.log(laptop3.brand);
