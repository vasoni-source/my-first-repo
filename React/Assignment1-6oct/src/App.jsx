import { useState } from 'react'
import './App.css'
import DisplayNameAge from './easy/DisplayNameAge'
import Welcome from './easy/Welcome'
import Counter from './easy/Counter'
import LogInput from './easy/LogInput'
import UserCard from './medium/UserCard'
import NumberDisplay from './medium/NumberDisplay'
import ChildParent from './medium/ChildParent'
import DisplayMessage from './medium/DisplayMessage'
import ToggleUi from './medium/ToggleUi'
import Timer from './Semi-Hard/Timer'
import ReusableButton from './Semi-Hard/ReusableButton'
import SharedCounter from './Semi-Hard/SharedCounter'

function App() {
  const [users,setUsers] = useState([
    {name: "alice",
      age: 22,
    },
    {name: "bob",
      age: 24
    },
    {
      name: "john",
      age: 20
    }
  ])
  const [num,setNum] = useState(0);
  const handleUpdateNum = ()=>{
    setNum(num+2);
  }
  const text1 = "I am Alice";
  const color1 ="red";
  const fn1 = ()=>{
    console.log("hii from fn 1")
  }
  const [sharedCounter,setSharedCounter] = useState(0);
   const incrementFromParent = () => {
    setSharedCounter(prev => prev + 5);
  };
  const handleChildUpdate = (value) => {
    setSharedCounter(prev => prev + value);
  };
  return (
    <div>
        <DisplayNameAge/>
        <Welcome name="Alice"/>
        <Welcome name="Bob"/>
        <Welcome name="john"/>
        <Counter/>
        <LogInput/>
        <h1>Medium Questions</h1>
        {
          users.map((user,idx)=>(
            <UserCard name = {user.name} age = {user.age} key={idx}/>
          )

          )
        }
        <NumberDisplay num = {num}/>
        <button onClick={handleUpdateNum}>Update Number</button>
        
        <ChildParent handleUpdateNum={handleUpdateNum}/>
        <h4>Num: {num}</h4>
        <DisplayMessage num={num}/>
        <ToggleUi/>
        <h1>Semi - Hard Questions</h1>
        <Timer/>
        <ReusableButton text={text1} color={color1} fn={fn1}/>
        <SharedCounter counter = {sharedCounter} counterUpadater={handleChildUpdate}/>
        <button onClick={incrementFromParent}>Increment from Parent</button>
    </div>

  )
}

export default App
