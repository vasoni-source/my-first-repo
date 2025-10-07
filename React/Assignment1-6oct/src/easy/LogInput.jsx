import React from 'react'
import { useState } from 'react'
export default function LogInput() {
    const [input,setInput] = useState("")
    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }
    const handleInputLog = ()=>{
        console.log(input);
    }
  return (
    <div>
        <h3>LogInput</h3>
        <input type="text" onChange={handleInputChange}/>
        <button onClick={handleInputLog}>Log Input</button>
    </div>
  )
}
