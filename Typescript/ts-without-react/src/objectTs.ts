const chai = {
    name:"masala chai",
    price:20,
    isHot:true
}
// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea :{
    name:string;
    price:number;
    isHot:boolean;
}
tea ={
    name:"ginger tea",
    price:15,
    isHot:true,
}

type Tea = {
    name:string;
    price:number;
    ingredients:string[];
}
const adrakChai :Tea = {
    name:"adrak chai",
    price:25,
    ingredients:["water","milk","tea leaves","ginger","sugar"]
};
console.log(adrakChai);

type Cup ={
    size:string;
}
let smallCup :Cup = {
    size:"200ml",
};
console.log(smallCup);
let bigCup = {
    size:"500ml",
    material:"ceramic"
}
smallCup = bigCup
console.log(smallCup);
type Brew = {brewTime:number;}
const coffee = {brewTime:5,origin:"Colombia"};
const chaiBrew :Brew = coffee;
console.log(chaiBrew);

type User ={
    username:string
    password:string
}
const u:User = {
    username:"tea_lover",
    password:"securepassword123"
}
type Item = {
    name:string;
    quantity:number;
}
type address = {
    street:string;
    city:string;
    postalCode:string;
}
type Order = {
    item:Item;
    shippingAddress:address;
}
type Chai = {
    name:string;
    price:number;
    isHot:boolean;
}
const updateChai = (updates:Partial<Chai>)=>{
    console.log("Updating chai:",updates);
}
updateChai({price:22});
updateChai({isHot:false});
updateChai({})               // allowed in Partial type

type ChaiOrder = {
    name?:string;
    quantity?:number;
}
const placeOrder=(order:Required<ChaiOrder>)=>{
    console.log("Placing order:",order);
} 
placeOrder({name:"masala chai",quantity:2}); 
// placeOrder({name:"masala chai"}); // Error: Property 'quantity' is missing
// placeOrder({}); // Error: Property 'name' and 'quantity' are missing

type TeaDetail = {
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[];
}
type BasicTeaInfo = Pick<TeaDetail,"name" | "price">;
const chaiInfo:BasicTeaInfo = {
    name:"masala chai",
    price:20
}


type NewChaiDetail = Omit<TeaDetail,"ingredients">;
const newChai:NewChaiDetail = {
    name:"ginger chai",
    price:25,
    isHot:true
};
console.log(newChai);
