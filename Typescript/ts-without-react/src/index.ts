type chaiOrder ={
    type:string,
    sugar:number
}
function isChaiOrder(obj: any): obj is chaiOrder {
    return typeof obj === "object" && 
    obj!==null && typeof obj.type ==="string" && typeof obj.sugar ==="number"
}
function serveOrder(order: chaiOrder){
    if(isChaiOrder(order)){
       return `Serving a ${order.type} chai with ${order.sugar} spoons of sugar.`
    }else{
        return `serving default chai.`
    }
}
const obj = {
    type: "Masala",
    sugar: 2
}
console.log(serveOrder(obj));
type masalaChai = {
    type: "Masala",
    spiceLevel: number
}
type gingerChai = {
    type: "Ginger",
    gingerSlices: number
}
type elaichiChai={
    type: "Elaichi",
    aromaLevel:number
}
type chai = masalaChai | gingerChai | elaichiChai;
function makeChai (order: chai){
    switch(order.type){
        case "Masala":
            return `Making Masala Chai with spice level ${order.spiceLevel}.`;
        case "Ginger":
            return `Making Ginger Chai with ${order.gingerSlices} slices of ginger.`;
        case "Elaichi":
            return `Making Elaichi Chai with aroma level ${order.aromaLevel}.`;
        default:
            return `Making default chai.`;
    }
}
const order1: masalaChai = {
    type: "Masala",
    spiceLevel: 5
}
console.log(makeChai(order1));
function brew (order: masalaChai | gingerChai){
    if("spiceLevel" in order){
        return `Brewing Masala Chai with spice level ${order.spiceLevel}.`
    }
}

