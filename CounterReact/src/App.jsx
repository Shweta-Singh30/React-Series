import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
  //useState is a hook(a method which havwe a single task) 
  //it return 2 value , 1st is a variable and 2nd is a function

  const addValue=() =>{
    console.log("Clicked",counter);
    counter=counter+1
    setCounter(counter)
  }

  const removeValue=()=>{
    console.log("Clicked",counter);
    
    setCounter(counter-1)
  
  }
  return (
    <>
      <h1>React</h1>
      <h5>Coubter value:{counter}</h5>
      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
