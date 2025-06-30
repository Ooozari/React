import { useContext, createContext } from "react";


// step1: create context
export const todoContext = createContext({
    // properties or data member (array of object) of TODO context
    todos: [
        {
            id: 1,
            todo: "My first Todo",
            isCompleted: false,
        },
    ],

    // functinalities related to TODO context

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},

})

//step2: make provider for your context
export const TodoProvider = todoContext.Provider

//step3: creating custom hooks to access the context
export function useTodo(){
    return useContext(todoContext)
}


 
