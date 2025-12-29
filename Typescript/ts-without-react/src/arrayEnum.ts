const chaiFlavours : string[] = ["masala","ginger","cardamom"];
const chaiPrices : number[] = [20,15,25];
const ratings: Array<number> = [4.5,4.0,5.0];

type Chai ={
    name:string;
    price:number;
}
const menu:Chai[]=[
    {name:"masala",price:20},
    {name:"ginger",price:15},
    {name:"cardamom",price:25}
];

const cities:readonly string[] = ["Delhi","Mumbai","Kolkata"];
// cities.push("Chennai") // Error: Cannot add to a readonly array

const table:number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let chaiTuple :[string,number,boolean];
chaiTuple = ["masala",20,true];
// chaiTuple = [20,"masala",true]; // Error

let userInfo:[string,number,boolean?];
userInfo = ["tea_lover",30];
userInfo = ["tea_lover",30,true];

const location :readonly [number,number] = [28.6139,77.2090];
const chaiItems:[name:string,price:number]=["masala",20];

enum ChaiSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
}
const myChaiSize:ChaiSize = ChaiSize.Medium;
console.log(`Selected chai size: ${myChaiSize}`);

enum OrderStatus {
    Pending = 100,
    InProgress , // 101
    Completed,  // 102
    Cancelled // 103
}
enum ChaiType {
    Masala = "MASALA",
    Ginger = "GINGER",
    Cardamom = "CARDAMOM"
}
function makeChai(type:ChaiType){
    console.log(`Making a cup of ${type} chai.`);
}
makeChai(ChaiType.Ginger);
// makeChai("massala"); // Error: Argument of type '"massala"' is not assignable to parameter of type 'ChaiType'.

enum RandomChai {
    ID=1,
    NAME="Chai Lover",
} // not a good practice to mix types in enum

const enum Sugars {
    LOW=1,
    MEDIUM=2,
    HIGH=3
}
const mySugarLevel:Sugars = Sugars.MEDIUM;

let t:[number,string] = [1,"Chai"];
t.push("Extra"); // Allowed, but not recommended