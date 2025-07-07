import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setStatusMessage } from '../features/todoSlice.js';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const statusMessage = useSelector((state) => state.todo.statusMessage)


  const add = (e) => {
    e.preventDefault();

    if (input.trim() === "") return; // Check: Prevent adding empty todos

    dispatch(addTodo({
      text: input,
      isCompleted: false,
      isUpdateable: false
    }));
    dispatch(setStatusMessage("Todo Added!"))
    setInput('');
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        dispatch(setStatusMessage(null));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);


  return (
    <>
      <div className="flex justify-center items-center px-4">
        <form
          onSubmit={add}
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col sm:flex-row gap-2"
        >
          <input
            type="text"
            placeholder="Enter your todo..."
            className="p-2 w-full bg-neutral-600 text-white rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 px-4 py-2 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
          >
            Add
          </button>
        </form>
      </div>
    </>


  );
}

export default TodoForm;
