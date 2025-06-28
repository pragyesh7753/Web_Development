import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
            completedAt: null,
            createdAt: null,
            dueDate: null,
            priority: "medium",
            tags: [],
            category: "general",
            description: "",
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
    clearCompleted: () => {},
    duplicateTodo: () => {},
    searchTerm: "",
    setSearchTerm: () => {},
    filterPriority: "all",
    setFilterPriority: () => {},
    filterStatus: "all",
    setFilterStatus: () => {},
    filterCategory: "all",
    setFilterCategory: () => {},
    sortBy: "createdAt",
    setSortBy: () => {},
    categories: ["general", "work", "personal", "shopping", "health", "education"],
    getStatistics: () => {},
    exportTodos: () => {},
    importTodos: () => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider