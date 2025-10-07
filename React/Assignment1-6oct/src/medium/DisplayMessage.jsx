import React, { useEffect } from 'react'

export default function DisplayMessage(props) {
    useEffect(()=>{
        console.log("Number Changed")
    },[props.num])
  return (
    <div>
        <h3>DisplayMessage</h3>

    </div>
  )
}
