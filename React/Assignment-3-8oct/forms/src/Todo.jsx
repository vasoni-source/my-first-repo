import React, { useState } from "react";
import "./Todo.css";
export default function Todo() {
  const [formData, setFormData] = useState({
    // title: "Reading",
    // description:
    //   "Creating a to-do list is a deceptively thoughts and managing tasks effectively. It serves as an external memory aid, freeing your mind from the anxiety of remembering every single detail and allowing",
    // priority: "High",
  });
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setTodos([...todos, formData]);
  };
  const handleDelete = (id) => {
    const result = todos.filter((todo) => {
      return todo.title != id;
    });
    console.log(result);
    setTodos(result);
  };
  return (
    <div className="main">
      <div className="semi-main">
        <h3>Todo</h3>
        <form action="" onSubmit={handelSubmit} className="form">
          <div className="wrapper">
            Title:{" "}
            <input
              type="text"
              name="title"
              onChange={handleChange}
              className="input"
            />
            Description:{" "}
            <textarea
              name="description"
              onChange={handleChange}
              className="input"
            ></textarea>
            priority:{" "}
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="input"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="btnMain">
            <button className="btn">Add</button>
          </div>
        </form>
      </div>
      <div className="wrapper2">
        {todos.map((data, idx) => (
          <div key={idx} className="card">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h3>{data.priority}</h3>
            <button className="btnnew{" onClick={() => handleDelete(data.title)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
