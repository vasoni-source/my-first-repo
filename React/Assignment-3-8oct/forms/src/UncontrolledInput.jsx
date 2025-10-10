import React from 'react'

export default function UncontrolledInput({type,name,ref,className,placeholder}) {
    // const handleChange =(e)=>{
    //     console.log("from uncontrolled :", e.target.value)
    //     // ref.current.value = value;
    //     // ref.current = e;
    //     // valueAfterCallback(ref.current)
    //     valueAfterCallback()

    //     console.log("e:",e)
    //     console.log("ref",ref)
    // }
  return (
    <div>
        <input type={type} name={name}  ref = {ref} className={className} placeholder={placeholder}/>
    </div>
  )
}