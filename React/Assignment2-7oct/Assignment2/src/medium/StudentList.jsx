import React, { useState } from 'react'
import { useEffect } from 'react';

export default function StudentList() {
    // Create a component that renders a list of students. Add a button to add a 
    // new student dynamically and verify that keys are working properly.
    const [students,setStudents] = useState([
        // {
        //     name:"Alice",
        //     Age:20,
        //     rollNo:1000
        // },
        //    {
        //     name:"Bob",
        //     Age:22,
        //     rollNo:1001
        // },
        //    {
        //     name:"Pablo",
        //     Age:24,
        //     rollNo:1002
        // },
        //    {
        //     name:"John",
        //     Age:23,
        //     rollNo:1003
        // },
        //    {
        //     name:"david",
        //     Age:20,
        //     rollNo:1004
        // },
        "Alice","Bob","Pablo","John","David"
    ])
    const [input,setInput] = useState("");
    const handleChange = (e)=>{
        setInput(e.target.value)
        console.log(e.target.value);
    }
    const handleAdd = ()=>{
         if (input.trim() === "") return;
        setStudents([...students,input]);
        console.log(students);
    }
  return (
    <div>s
        <h3>Student List</h3>
        <input type="text" value={input} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
        {
            students.map((student)=>(
                <h4 key={student}>{student}</h4>
            ))
        }
    </div>
  )
}
