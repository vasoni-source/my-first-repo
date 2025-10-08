import React, { useRef, useState } from 'react'

export default function FocusInput() {
    // Create a component that uses both state and ref. Use state for a counter and ref 
    // to focus an input when a button is clicked.
    const input = useRef(null);
    const [count,setCount] = useState(0);
    const handleInput = (e)=>{
        if(input.current){
            input.current.value = e.target.value;
        }
    }
    const handleFocus = ()=>{
        if (input.current.value.trim() === "") return;
        setCount(prev=>prev+1)
        input.current.focus();
        console.log(input.current.value);
    }
  return (
    <div>
        <h3>Focus Input</h3>
        <input type="text" ref={input} onChange={handleInput} />
        <h4>{count}</h4>
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}
