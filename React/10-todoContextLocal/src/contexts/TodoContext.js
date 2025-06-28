import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
            completedAt: null,
            dueDate: null,
            priority: "medium",
            tags: [],
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
    searchTerm: "",
    setSearchTerm: () => {},
    filterPriority: "all",
    setFilterPriority: () => {},
    filterStatus: "all",
    setFilterStatus: () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider