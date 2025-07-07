import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed inset-0 flex justify-center items-center px-2">
          <div className="fixed flex flex-wrap justify-center bg-white gap-4 rounded-2xl p-3">
            <button
              onClick={() => { setColor("red") }}
              className="outline-0 bg-red-500 p-2 rounded-xl"
            >Red</button>
            <button
              onClick={() => { setColor("green") }}
              className="outline-0 bg-green-500 p-2 rounded-xl"
            >Green</button>
            <button
              onClick={() => { setColor("blue") }}
              className="outline-0 bg-blue-500 p-2 rounded-xl"
            >Blue</button>
            <button
              onClick={() => { setColor("yellow") }}
              className="outline-0 bg-yellow-500 p-2 rounded-xl"
            >Yellow</button>
            <button
              onClick={() => { setColor("orange") }}
              className="outline-0 bg-orange-500 p-2 rounded-xl"
            >Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
