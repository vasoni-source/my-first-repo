type TeaReceipe = {
  water: number;
  milk: number;
};
class MasalaTea implements TeaReceipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "medium" | "large";
}

class Chai implements CupSize {
  size: "small" | "medium" | "large" = "medium";
}
// this will not work make interface to use it 
// type Response = {ok:true} | {ok:false};
// class myRes implements Response {
//   ok: boolean= true;
// }
type TeaType = "masala" | "ginger" | "lemon";
function orderChai (t:TeaType){
console.log(t)
}
 type BaseChai = {teaLeaves:number};
 type Extra = {masala:number};
    type MasalaChai = BaseChai & Extra;
    const myChai :MasalaChai = {teaLeaves:10, masala:5};
    console.log(myChai);

    type User ={
        username:string;
        bio?:string;
    }
    const u1 : User = {
        username:"john_doe",
    };
    console.log(u1);
     const u2 : User = {
        username:"vaibhavi",
        bio:"Avid tea lover and TypeScript enthusiast."
    };
    console.log(u2);

    type Config = {
    readonly appName:string
    version:string;
    };
    const config:Config = {
        appName:"TeaApp",
        version:"1.0.0"
    };
    console.log(config);
    // config.appName = "NewTeaApp"; // Error: Cannot assign to 'appName' because it is a read-only property.   