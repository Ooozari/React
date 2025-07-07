import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl text-center text-white mb-9'>Todo App | Using Redux Toolkit</h1>
        <TodoForm />
        <TodoItems />
      </div>

    </>
  )
}

export default App
