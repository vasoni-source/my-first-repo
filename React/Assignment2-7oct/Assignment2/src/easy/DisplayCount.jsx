import React, { useState } from 'react'

export default function DisplayCount() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h3>Display Count</h3>
        <h4>{count}</h4>
        <button onClick={()=>{
            setCount(prev=>prev+1)
        }}>Click Me</button>
    </div>
  )
}
