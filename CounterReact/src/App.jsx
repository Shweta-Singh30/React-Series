import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
  //useState is a hook(a method which havwe a single task) 
  //it return 2 value , 1st is a variable and 2nd is a function

  
  const addValue=() =>{
    if (counter<20) 
    {
    counter=counter+1
    setCounter(counter)
   
    }
  }
 
  //for decrease value of counter
  const removeValue=()=>{
    if(counter>0)
    {
    setCounter(counter-1)
    }
  
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
