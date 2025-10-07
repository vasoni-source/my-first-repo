import React from 'react'

export default function ReusableButton(props) {
  return (
    <div>
        <h3>ReusableButton</h3>
        <h4>{props.text}</h4>
        <button onClick={props.fn} style={{backgroundColor : props.color,color:"white"}}>Do something</button>
    </div>
  )
}
