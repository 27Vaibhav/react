import { useState } from 'react'
import './App.css'

function App() {
  let[counter,setcounter]=useState(15)

  const addValue=()=>{
    if(counter>19){
      alert("Limit exceed")
    }else{
    setcounter(counter+1)
    }
    console.log("Value added",counter)
  }

  const decreaseValue=()=>{
    if(counter<1){
      alert("Cant go below 0")
    }else{
    setcounter(counter-1)
    }
  }

  return (
    <>
     <h2>Yho hoo Yoo hooo hooo</h2>
     <p>Counter Value : {counter}</p>
     <button onClick={addValue}>Increase {counter}</button>
     <br />
     <button onClick={decreaseValue}>decrease {counter}</button>
     <p>Footer {counter}</p>
    </>
  )
}

export default App
