import React from "react";
import { useState } from "react";
export default function ControlledInput({
  name,
  type,
  placeholder,
  className,
  valueBeforeCallback = ()=>{},
  valueAfterCallback = () => {},
//    value: vlue = "",
}) {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    valueBeforeCallback(e);
    // console.log("e from child:", e.target.value);
    setValue(e.target.value);
    valueAfterCallback(e)
  };
  return (
    <div>
      {/* <h3>ControlledInput</h3> */}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={className}
      />
    </div>
  );
}
