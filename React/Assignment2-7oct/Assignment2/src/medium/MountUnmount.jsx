import React, { useEffect } from 'react'

export default function MountUnmount() {
    useEffect(()=>{
        console.log("Component Mounted")
        alert("Mounted")
        

        return ()=>{
            console.log("Component Unmounted")
        }
},[])
const handleToggle = ()=>{
    console.log("fn runs")
}
  return (
    <div>
        <h3>Mount Unmount</h3>
        <button onClick={handleToggle}>toggle</button>
    </div>
  )
}
