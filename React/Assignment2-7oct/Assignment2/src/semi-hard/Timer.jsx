import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function Timer() {
  const [timer, setTimer] = useState(0);
 const refId = useRef(null);
  
  useEffect(() => {
 
    const id = setInterval(() => {
      setTimer(prevCount => prevCount + 1); 
    }, 1000);
    refId.current = id
    console.log("mounted behaviour")
    return () => {
      clearInterval(refId.current);
      console.log("unmounted behaviour")
    };
  }, []);
  
  const handleStop = () => {
    clearInterval(refId.current)
  };
   const handleStart = () => {
     const id = setInterval(() => {
      setTimer(prevCount => prevCount + 1); 
    }, 1000);
    refId.current = id

  };
  
  const handleReset = () => {
    clearInterval(refId.current)
    setTimer(0);
  };

  return (
    <div>
      <h3>Timer</h3>
      <h4>{timer}</h4>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
