import React, { useEffect } from "react";
import { useState } from "react";
import ReusableButton from "./ReusableButton";
export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [runningTimer,setRunningTimer] = useState(true);
 
  
  useEffect(() => {
    let id ;
   if(runningTimer==true){
    id = setInterval(() => {
      setTimer(prevCount => prevCount + 1); 
    }, 1000);

   }
    return () => {
      clearInterval(id);
    };
  }, [runningTimer]);
  
  const handleStop = () => {
    setRunningTimer(false)
  };
   const handleStart = () => {
    setRunningTimer(true)
  };
  
  const handleReset = () => {
    setRunningTimer(false)
    setTimer(0);
  };
  const fn2 = () => {
    console.log("hii from fn 2");
  };
  const text2 = " I am bob";
  const color2 = "blue";
  return (
    <div>
      <h3>Timer</h3>
      <h4>{timer}</h4>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ReusableButton text={text2} color={color2} fn={fn2}/>
    </div>
  );
}
