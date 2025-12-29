import { useState } from "react";
import ChaiCard from "./components/ChaiCard";
import "./App.css";
import Counter from "./components/Counter";
import ChaiList from "./components/ChaiList";
import type { Chai } from "./types";
import OrderForm from "./components/OrderForm";
import Card from "./components/Card";
function App() {
  const chais: Chai[] = [
    { id: 1, name: "Chai", price: 2.5 },
    { id: 2, name: "Green Tea", price: 3.0 },
    { id: 3, name: "Black Tea", price: 2.0 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <ChaiCard name="Chai" price={2.5} isSpecial={true} />
      <ChaiCard name="Iphone" price={80000}  />
      <ChaiList chais={chais} />
      <Counter/>
      <OrderForm onSubmit={(order) => console.log(order)} />
        <Card title="Chai" footer={<button>Add to Cart</button>}/>

        
          
       
    </>
  );
}

export default App;
