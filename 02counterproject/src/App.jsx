import { useState } from 'react'  // hook the update tha value in UI
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = ()=> {
    if(counter < 20 ){
      setCounter(counter + 1)
    }
  } 
  const decValue = ()=> {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    
  } 

  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value : {counter} </h3>
      <button onClick={addValue}>++</button>
      <br />
      <button onClick={decValue}>--</button>
    </>
  )
}

export default App
