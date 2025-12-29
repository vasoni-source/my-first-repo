function makeChai (type:string,cups:number){
    console.log(`Making ${cups} cups of ${type} chai.`)
}
makeChai("masala",2);

function getChaiPrice():number{
    return 25;
}
function makeOrder(order:string){
    if(!order) return null
    return order
}
function logChai():void{
    console.log("Chai is ready!");
}
function orderChai(type:string="masala"){

}
function createChai(order:{
    type:string;
    cups:number;
}):number{
   return 8
}