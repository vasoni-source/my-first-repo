import React from "react";
import { useState } from "react";
export default function ToggleUi() {
  const [show,setShow] = useState(true);
  const handleToggle = ()=>{
    setShow((prev)=>(prev===true?false:true))
  }
  //  const handleShow = ()=>{
  //   setShow((prev)=> (prev===true?false:true));
  // }
  return (
    <div>
      <h3>ToggleUi</h3>
     {
      show &&
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet
        illo dicta doloremque et qui fugiat pariatur, alias veritatis nesciunt
        consequuntur libero! Consectetur sed deleniti iusto officia
        voluptatibus, expedita necessitatibus!
      </p>
     }
      <button onClick={handleToggle}>{show?"Hide":"Show"}</button>
    </div>
  );
}
