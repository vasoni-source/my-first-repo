interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}
const masala: Chai = {
    flavour: "masala",
    price: 20,
    milk: true
};
console.log(masala);

interface Shop {
   readonly id: number;
    name: string;
}
const chaiShop: Shop = {
    id: 1,
    name: "The Tea House"
};
// chaiShop.id = 2;    // Error: Cannot assign to 'id' because it is a read-only property.
console.log(chaiShop);

interface DiscountCalculator {
    (price: number): number;
}
const apply50 :DiscountCalculator=(p)=>p*0.5;

interface TeacMachine {
    start(): void;
    stop(): void;
}
const machine: TeacMachine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }
};
// signature indexing
interface ChaiRatiings {
    [flavour:string]:number;
}
const ratings:ChaiRatiings={
    masala:4.5,
    ginger:4
}
// merging interfaces

interface User{
    name:string;
}
interface User{
    age:number;
}

const u:User ={
    name:"vaibhavi",
    age:42
}

// extend interfaces
interface A{
    a:string
}
interface B{
    b:string
}
interface C extends A,B{

}
