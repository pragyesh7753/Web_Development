import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
            dueDate: null,
            priority: "medium",
            tags: [],
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    searchTerm: "",
    setSearchTerm: (term) => {},
    filterPriority: "all",
    setFilterPriority: (priority) => {},
    filterStatus: "all",
    setFilterStatus: (status) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider