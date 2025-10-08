import { useState } from "react";
import "./App.css";
import FruitList from "./easy/FruitList";
import DisplayCount from "./easy/DisplayCount";
import StudentList from "./medium/StudentList";
import FocusInput from "./medium/FocusInput";
import MountUnmount from "./medium/MountUnmount";
import Todo from "./semi-hard/Todo";
import Timer from "./semi-hard/Timer";

function App() {


  return <div>

    <FruitList/>
    <DisplayCount/>
    <StudentList/>
    <FocusInput/>
    <MountUnmount/>
    <Todo/>
    <Timer/>
  </div>;
}

export default App;
