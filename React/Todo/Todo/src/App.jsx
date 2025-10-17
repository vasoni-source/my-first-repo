import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { add ,deleteTodo} from "./features/add/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAdd = () => {
    setTodo("");
    dispatch(add(todo));
    
  };
  const handleDelete =(item)=>{
    dispatch(deleteTodo(item))
  }
  return (
    <div>
      <input type="text" placeholder="enter a todo" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {todos.map((item,index) => (
        <div key={index}>
          <h2>{item}</h2>
          <button onClick={()=>{handleDelete(item)}}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
