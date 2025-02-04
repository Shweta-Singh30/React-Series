import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 class="text-black text-3xl font-extrabold underline mb-4">TAILWIND </h1>
      <Card Title="Science" About="A system of knowledge about the physical, chemical, and biological universe and the things that occur in it is called science."/>
      <Card Title="Math" About="Mathematics is the science and study of quality, structure, space, and change."/>

      <Card Title="English" About="a group of words, usually containing a subject and a verb, expressing a statement, question, instruction, or exclamation"/>
    </div>
    </>
  )
}

export default App
