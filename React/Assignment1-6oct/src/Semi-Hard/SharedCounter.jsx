import React from 'react'

export default function SharedCounter(props) {
    const handleIncrease = ()=>{
        props.counterUpadater(5)
    }
  return (
    <div>
        <h3>SharedCounter</h3>
        <h4>{props.counter}</h4>
        <button onClick={handleIncrease}>Increment from Child</button>
    </div>
  )
}
