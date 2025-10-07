import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [counter,setCounter] = useState(0);
    const handleIncrease = ()=>{
        setCounter(counter+1)
    }
    const handleDecrease = ()=>{
        setCounter(counter-1)
    }
  return (
    <div>
        <h3>Counter</h3>
         <h4>{counter}</h4>
         <div>
            <button onClick={handleIncrease}>Increase Counter</button>
            <button onClick={handleDecrease}>Decrease Counter</button>
         </div>
    </div>
  )
}
