import React, { useState } from "react";

export default function FruitList() {
  const [fruits, setFruits] = useState([
    {
      name: "Apple",
      url: "https://static.vecteezy.com/system/resources/thumbnails/016/940/260/small/apple-fruit-isolated-on-white-background-photo.jpg",
    },
    {
        name:"Banana",
        url:"https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg"
    },
    {
        name:"Grapes",
        url: "https://media.istockphoto.com/id/184099853/photo/fresh-grapes.jpg?s=612x612&w=0&k=20&c=IxIcZ4M8c4-ksK4bvmtKUp03jaZwRMBcxplyZB-iZ0A="
    },
    {
        name:"Mango",
        url: "https://www.greenlife.co.ke/wp-content/uploads/2022/04/Mangoes.jpg"
    }
  ]);
  const [show,setShow] = useState(true);
  const handleToggle = ()=>{
    setShow(!show);
  }
  return (
    <div>
      <h3>Fruits List</h3>
      {
        show ? 
        fruits.map((fruit) => (
       <div key={fruit.name} >
         <img src={fruit.url} alt="Fruit Image" style={{width:"100px",height:"100px"}}/>
        <h4>{fruit.name}</h4>
       </div>
      )):null
      }
      <button onClick={handleToggle}>{show?"Hide":"Show"}</button>
    </div>
  );
}
