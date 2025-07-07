import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, deleteTodo, toggleCompleted, setFilterType } from '../features/todoSlice';

function TodoItems() {
  const todos = useSelector((state) => state.todo.todos);
  const filterType = useSelector ((state) => state.todo.filterType) // defualt to All
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText('');
  };

  const handleCheckboxChange = (todo) => {
    dispatch(toggleCompleted({ id: todo.id }));
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const filterTodos = () => {
    if (filterType === 'Completed') return todos.filter((todo) => todo.isCompleted);
    if (filterType === 'Un Completed') return todos.filter((todo) => !todo.isCompleted);
    return todos;
  };

  const filteredTodos = filterTodos();

  return (
    <>
      <div className="w-full flex justify-end pr-8 mb-4">
        <div className="flex flex-col items-end">
          <p
            className="bg-green-800 text-white p-1 rounded-sm hover:cursor-pointer"
            onClick={handleShowFilter}
          >
            Filter by
          </p>
          <ul className={`bg-slate-600 text-xs p-1 rounded-sm ${showFilter ? 'visible' : 'invisible'}`}>
            <li
              className="hover:bg-slate-500 rounded-sm px-1 hover:cursor-pointer"
              onClick={ () => dispatch(setFilterType('All')) } // dispatch action
            >
              All
            </li>
            <li
              className="hover:bg-slate-500 rounded-sm px-1 hover:cursor-pointer"
              onClick={() => dispatch(setFilterType('Completed'))}
            >
              Completed
            </li>
            <li
              className="hover:bg-slate-500 rounded-sm px-1 hover:cursor-pointer"
              onClick={() => dispatch(setFilterType('Un Completed'))}
            >
              Un Completed
            </li>
          </ul>
        </div>
      </div>


    <div className='flex justify-center items-center'>
<div className="w-[80%]">
        <h3 className="text-white text-2xl font-bold text-center mb-2">{filterType} Todos</h3>
        <ul className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="text-white text-xl text-center bg-neutral-700 p-4">
              No todos found
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className={`p-3 rounded flex items-center justify-between ${todo.isCompleted ? 'bg-green-500' : 'bg-gray-800'
                  }`}
              >
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleCheckboxChange(todo)}
                  className="mr-2"
                />

                {editId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 mr-2 p-1 rounded border"
                  />
                ) : (
                  <span className="flex-1 mr-2">{todo.text}</span>
                )}

                {editId === todo.id ? (
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-400"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-400"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
      
    </>
  );
}

export default TodoItems;
