import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice.js';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();

    if (input.trim() === "") return; // Prevent adding empty todos

    dispatch(addTodo({
      text: input,
      isCompleted: false,
      isUpdateable: false
    }));

    setInput('');
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <form onSubmit={add} className="w-[40%] flex gap-0">
          <input
            type="text"
            placeholder='Enter your todo...'
            className="p-2 w-full bg-neutral-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 py-2 px-5 text-white hover:bg-blue-600"
          >
            Add
          </button>
        </form>
      </div>
    </>


  );
}

export default TodoForm;
