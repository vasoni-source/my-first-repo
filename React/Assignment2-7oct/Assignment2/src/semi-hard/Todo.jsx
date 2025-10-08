import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewToDo] = useState("");
  const handleInput = (e) => {
    setNewToDo(e.target.value);
    console.log(newTodo);
  };
  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    const newtodo = {
      todo: newTodo,
      id: uuidv4(),
    };
    // setTodos([...todos,newtodo]);
    setTodos((prevTodos) => [...prevTodos, newtodo]);
    setNewToDo("");
  };
  const handleDelete = (id)=>{
    const newList = todos.filter((todo)=>todo.id!==id)
    setTodos(newList);
  }

  return (
    <div>
      <h3>Todo</h3>
      <input type="text" onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      {todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <h4>{todo.todo}</h4>
              <button style={{backgroundColor:"red",color:"white"}} onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <h4>No To dos to show</h4>
      )}
    </div>
  );
}
