import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'  // automatically import from folder name
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {
    const [todos, setTodos] = useState([]) //passing an empty array as it is array of object


    const addTodo = (todo) => {
        setTodos((prev) => ([{ id: Date.now(), ...todo }, ...prev])) // addTodo("Buy Car", false) we only need to pass title and flag
    }

    const deleteTodo = (id) => {
        setTodos((prev) =>
            prev.filter((todo) => (todo.id !== id))) // set all the todo that does not match the id
    }


    const updateTodo = (id, updatedTodo) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? updatedTodo : todo
            )
        );
    };


    const toggleCompleted = (id) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)) //Updating the status of todo
    }

    // save in local storage

    useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosFromStorage && todosFromStorage.length > 0) {
        setTodos(todosFromStorage);
    }
}, []);


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)) // todo state global
    }, [todos])

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div
                                key={todo.id}
                                className='w-full'
                            >
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
};

export default App
