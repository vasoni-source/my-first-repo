class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}
const masalaChai = new Chai("masala", 20);
masalaChai.price = 25; // Allowed

class NewChai {
    public flavour:string="masala"

    private secreteIngredients = "cardamom, ginger";
    reveal(){
        return this.secreteIngredients;
    }
}
const c = new NewChai();
c.reveal();
// c.secreteIngredients // Error: Property 'secreteIngredients' is private

class Shop {
    protected shopName="Chai Point";
}
class Branch extends Shop {
    getShopName(){
        return this.shopName;
    }
}
const branch = new Branch();
branch.getShopName();
// branch.shopName // Error: Property 'shopName' is protected

class Wallet{
    #balance=100;
    getBalance(){
        return this.#balance;
    }                       
}
const myWallet = new Wallet();
myWallet.getBalance();
// myWallet.#balance // Error: Private field '#balance' must be declared in an enclosing class

class Cup{
    readonly capacity:number=250;   
    constructor(capacity:number){
        this.capacity=capacity;  
    }
}

class ModernChai{
    private _sugar =2;

    get sugar(){
        return this._sugar;
    }

    set sugar(amount:number){
        if(amount<0){
            console.log("Sugar amount cannot be negative.");
            return;
        }
        this._sugar=amount;
    }
}
const c2 = new ModernChai();
c2.sugar=3;

class EkChai{
    static shopName="Ek Chai";

    constructor(public flavour:string){}
}
console.log(EkChai.shopName);

abstract class Drink{
    abstract make():void;
}
class MyChai extends Drink{
    make(){
        console.log("Making chai...");
    }
}

class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater:Heater){}
    
    makeChai(){
        this.heater.heat();
        console.log("Chai is made.");
    }
}