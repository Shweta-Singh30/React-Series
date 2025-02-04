import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
  
      <div className="w-full h-screen duration-200"
       style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white  rounded-3xl px-3 py-2">
          <button
          onClick={()=>setColor("red")}
          //onclick  takes the function as argument and if we give 
          //onClick={setColor} , then we pass the reference of function but we can't give the argument of setColor by this method
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"red"}}>Red</button>
          

         
          <button
           onClick={()=>setColor("green")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"green"}}>Green</button>
         

         
          <button
           onClick={()=>setColor("blue")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"blue"}}>Blue</button>
          

         
          <button
           onClick={()=>setColor("black")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"black"}}>Black</button>


         
          <button
           onClick={()=>setColor("white")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl"
          style={{backgroundColor:"white"}}>White</button>
         
         <button
           onClick={()=>setColor("olive")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"olive"}}>olive</button>
         
         <button
           onClick={()=>setColor("yellow")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"yellow"}}>Yellow</button>
         
         <button
           onClick={()=>setColor("purple")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"purple"}}>Purple</button>
         
         <button
           onClick={()=>setColor("pink")}
          className="outline-None px-4 py-1 rounded-full shadow-2xl text-white"
          style={{backgroundColor:"pink"}}>Pink</button>
         
         
         
          </div>

          
        </div>
      </div>



    
  )
}

export default App
