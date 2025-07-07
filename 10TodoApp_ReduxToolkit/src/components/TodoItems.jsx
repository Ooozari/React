import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, deleteTodo, toggleCompleted, setFilterType, setStatusMessage } from '../features/todoSlice';

function TodoItems() {
  const todos = useSelector((state) => state.todo.todos);
  const filterType = useSelector((state) => state.todo.filterType) // defualt to All
  const dispatch = useDispatch();

  // Status Message
  const statusMessage = useSelector((state) => state.todo.statusMessage);


  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    dispatch(setStatusMessage("Todo updated!"));
    setEditId(null);
    setEditText('');
  };

  const handleCheckboxChange = (todo) => {
    dispatch(toggleCompleted({ id: todo.id }));
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  // Updated (smart Optimization)
  const filteredTodos = useMemo(() => {
    if (filterType === 'Completed') return todos.filter((todo) => todo.isCompleted);
    if (filterType === 'Un Completed') return todos.filter((todo) => !todo.isCompleted);
    return todos;
  }, [todos, filterType]); // <- when todos are updated (add, deletion) or filterType is changed


  // Status Message cleanUp and setTime
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        dispatch(setStatusMessage(null));
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [statusMessage]);

  return (
    <>
      {/* Filter Dropdown */}
      <div className="w-full flex justify-end pr-4 sm:pr-8 mb-4">
        <div className="flex flex-col items-end">
          <p
            className="bg-green-800 text-white p-2 text-sm sm:text-base rounded hover:cursor-pointer"
            onClick={handleShowFilter}
          >
            Filter by
          </p>
          {showFilter && (
            <ul className="bg-slate-600 text-sm p-2 mt-1 rounded w-32 sm:w-36 shadow-md">
              <li
                className="hover:bg-slate-500 px-2 py-1 rounded cursor-pointer"
                onClick={() => dispatch(setFilterType('All'))}
              >
                All
              </li>
              <li
                className="hover:bg-slate-500 px-2 py-1 rounded cursor-pointer"
                onClick={() => dispatch(setFilterType('Completed'))}
              >
                Completed
              </li>
              <li
                className="hover:bg-slate-500 px-2 py-1 rounded cursor-pointer"
                onClick={() => dispatch(setFilterType('Un Completed'))}
              >
                Un Completed
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Todo List */}
      <div className="flex justify-center items-center px-2">
        <div className="w-full sm:w-[90%] md:w-[80%]">
          <h3 className="text-white text-xl sm:text-2xl font-bold text-center mb-4">{filterType} Todos</h3>
          <ul className="space-y-3">
            {filteredTodos.length === 0 ? (
              <div className="text-white text-base sm:text-xl text-center bg-neutral-700 p-4 rounded">
                No todos found
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className={`p-3 rounded flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 sm:justify-between ${todo.isCompleted ? 'bg-green-500' : 'bg-gray-800'
                    }`}
                >
                  <div className="flex items-center w-full sm:w-auto">
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
                        className="flex-1 sm:w-64 p-1 rounded border bg-white text-black"
                      />
                    ) : (
                      <span className="flex-1 sm:w-64 text-white">{todo.text}</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {editId === todo.id ? (
                      <button
                        onClick={() => handleUpdate(todo.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(todo)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-400"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => {
                        dispatch(deleteTodo({ id: todo.id }));
                        dispatch(setStatusMessage("Todo deleted!"));
                      }}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
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
