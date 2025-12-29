let response :any = "42";
let numericValue :number = (response as string).length;

type Book ={
    name:string,
};
let bookString = '{"name":"TypeScript Basics"}';
let bookObject: Book = JSON.parse(bookString) as Book;
console.log(bookObject.name);

let value :any = "Hello, TypeScript!";
value = [1,2,3,4];
value= 2.3;
value.toUpperCase(); // This will cause a runtime error

let newValue :unknown = "Hello, TypeScript!";
newValue = [1,2,3,4];
newValue= 2.3;
// newValue.toUpperCase(); // Error: Object is of type 'unknown'.
if(typeof newValue === "string"){
    newValue.toUpperCase(); // Safe to use as string
}
const inputElement = document.getElementById("input") as HTMLInputElement;
console.log(inputElement.value);


// handle try catch 
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("error: ", error);
}
const data:unknown = "Sample Data";
const dataString: string = data as string;
console.log(dataString.length);
// never use case
type role ="admin" | "user" | "guest";

function redirectBasedOnRole(role: role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard.");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user homepage.");
        return;

    }
    role;
}
redirectBasedOnRole("guest");
function neverReturns(): never {
    while (true) {
        // Infinite loop
    }
};
