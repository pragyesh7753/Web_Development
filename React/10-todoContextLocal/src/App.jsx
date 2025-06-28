import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import './index.css'
import { TodoForm, TodoItem, Statistics } from './components'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, BarChart3, Download, Upload, Trash2, CheckCircle, SortAsc } from 'lucide-react'
import "lord-icon-element"

function App() {
  const [todos, setTodos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPriority, setFilterPriority] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("createdAt")
  const [showStats, setShowStats] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const categories = ["general", "work", "personal", "shopping", "health", "education"]

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const duplicateTodo = (id) => {
    const todoToDuplicate = todos.find(todo => todo.id === id)
    if (todoToDuplicate) {
      const newTodo = {
        ...todoToDuplicate,
        id: Date.now(),
        todo: `${todoToDuplicate.todo} (Copy)`,
        completed: false,
        completedAt: null,
        createdAt: Date.now()
      }
      setTodos((prev) => [newTodo, ...prev])
    }
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed,
          completedAt: !prevTodo.completed ? Date.now() : null
        } : prevTodo))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter(todo => !todo.completed))
  }

  const exportTodos = () => {
    const dataStr = JSON.stringify(todos, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `todos-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const importTodos = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedTodos = JSON.parse(e.target.result)
          if (Array.isArray(importedTodos)) {
            setTodos(importedTodos)
          }
        } catch (error) {
          alert('Invalid file format')
        }
      }
      reader.readAsText(file)
    }
  }

  const getStatistics = () => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    const pending = todos.filter(todo => !todo.completed).length
    const overdue = todos.filter(todo => {
      if (!todo.dueDate || todo.completed) return false
      return new Date(todo.dueDate) < new Date()
    }).length
    
    return { total, completed, pending, overdue }
  }

  const cleanupOldCompletedTodos = () => {
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000)
    setTodos((prev) => 
      prev.filter(todo => {
        return !todo.completed || !todo.completedAt || todo.completedAt > thirtyDaysAgo
      })
    )
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]")
    if (savedTodos.length > 0) {
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000)
      const cleanedTodos = savedTodos.filter(todo => {
        return !todo.completed || !todo.completedAt || todo.completedAt > thirtyDaysAgo
      })
      setTodos(cleanedTodos)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const interval = setInterval(cleanupOldCompletedTodos, 24 * 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const filteredAndSortedTodos = todos
    .filter(todo => todo.todo.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(todo => filterPriority === "all" ? true : todo.priority === filterPriority)
    .filter(todo => filterCategory === "all" ? true : (todo.category || "general") === filterCategory)
    .filter(todo => {
      if (filterStatus === "all") return true
      if (filterStatus === "completed") return todo.completed
      return !todo.completed
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "priority":
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        case "dueDate":
          if (!a.dueDate && !b.dueDate) return 0
          if (!a.dueDate) return 1
          if (!b.dueDate) return -1
          return new Date(a.dueDate) - new Date(b.dueDate)
        case "completed":
          return a.completed - b.completed
        default:
          return new Date(b.createdAt || b.id) - new Date(a.createdAt || a.id)
      }
    })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/xjovhxra.json"
            trigger="loop"
            style={{ width: "100px", height: "100px" }}
          />
          <p className="mt-4 text-lg">Loading your todos...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <TodoProvider value={{
      todos,
      addTodo,
      updateTodo,
      deleteTodo,
      toggleComplete,
      clearCompleted,
      duplicateTodo,
      searchTerm,
      setSearchTerm,
      filterPriority,
      setFilterPriority,
      filterStatus,
      setFilterStatus,
      filterCategory,
      setFilterCategory,
      sortBy,
      setSortBy,
      categories,
      getStatistics,
      exportTodos,
      importTodos
    }}>
      <div className="h-screen overflow-hidden py-4 px-2">
        <div className="w-full max-w-6xl mx-auto h-full flex flex-col space-y-3">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center flex-shrink-0"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <lord-icon
                src="https://cdn.lordicon.com/wxhtpnnk.json"
                trigger="loop"
                delay="2000"
                style={{ width: "40px", height: "40px", filter: "drop-shadow(0 2px 8px #a78bfa)" }}
              />
              <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl">
                TodoMaster Pro
              </h1>
            </div>
            <p className="text-white/50 text-sm">Organize your life, one task at a time</p>
          </motion.div>

          {/* Statistics Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center flex-shrink-0"
          >
            <button
              onClick={() => setShowStats(!showStats)}
              className="btn flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 px-3 py-1.5 text-sm"
            >
              <BarChart3 className="w-3 h-3" />
              {showStats ? 'Hide' : 'Show'} Statistics
            </button>
          </motion.div>

          {/* Statistics */}
          <AnimatePresence>
            {showStats && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass rounded-xl p-3 border border-white/30 flex-shrink-0"
              >
                <Statistics />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="glass rounded-xl border border-white/30 overflow-hidden flex-1 flex flex-col min-h-0">
            <div className="p-4 flex flex-col h-full space-y-3">
              {/* Todo Form */}
              <div className="flex-shrink-0">
                <TodoForm />
              </div>

              {/* Controls */}
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-between flex-shrink-0">
                <div className="flex flex-col md:flex-row gap-2 items-center flex-1 w-full">
                  <div className="relative flex-1 min-w-0 w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-white/60" />
                    <input
                      type="text"
                      placeholder="Search todos..."
                      className="w-full bg-white/10 border border-white/20 rounded-full pl-9 pr-3 py-2 outline-none text-white placeholder-white/60 focus:bg-white/20 transition-all text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Filter className="w-3 h-3 text-white" />
                    
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-full px-2 py-1.5 text-white text-xs outline-none focus:bg-white/20"
                    >
                      <option value="all" className="bg-purple-600">All Status</option>
                      <option value="completed" className="bg-purple-600">Completed</option>
                      <option value="incomplete" className="bg-purple-600">Pending</option>
                    </select>

                    <select
                      value={filterPriority}
                      onChange={(e) => setFilterPriority(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-full px-2 py-1.5 text-white text-xs outline-none focus:bg-white/20"
                    >
                      <option value="all" className="bg-purple-600">All Priorities</option>
                      <option value="high" className="bg-purple-600">🔴 High</option>
                      <option value="medium" className="bg-purple-600">🟡 Medium</option>
                      <option value="low" className="bg-purple-600">🟢 Low</option>
                    </select>

                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-full px-2 py-1.5 text-white text-xs outline-none focus:bg-white/20"
                    >
                      <option value="all" className="bg-purple-600">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-purple-600">
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                      ))}
                    </select>

                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-full px-2 py-1.5 text-white text-xs outline-none focus:bg-white/20"
                    >
                      <option value="createdAt" className="bg-purple-600">Recent First</option>
                      <option value="priority" className="bg-purple-600">Priority</option>
                      <option value="dueDate" className="bg-purple-600">Due Date</option>
                      <option value="completed" className="bg-purple-600">Status</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={clearCompleted}
                    className="btn px-2 py-1.5 text-xs bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 flex items-center gap-1"
                    disabled={!todos.some(todo => todo.completed)}
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear
                  </button>

                  <button
                    onClick={exportTodos}
                    className="btn px-2 py-1.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    Export
                  </button>

                  <label className="btn px-2 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 flex items-center gap-1 cursor-pointer">
                    <Upload className="w-3 h-3" />
                    Import
                    <input
                      type="file"
                      accept=".json"
                      onChange={importTodos}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Todos List */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex items-center justify-between mb-2 flex-shrink-0">
                  <h2 className="text-white font-semibold text-base">
                    {filteredAndSortedTodos.length === 0 ? 'No todos found' : 
                     `${filteredAndSortedTodos.length} ${filteredAndSortedTodos.length === 1 ? 'task' : 'tasks'}`}
                  </h2>
                  {filteredAndSortedTodos.length > 0 && (
                    <div className="flex items-center gap-1 text-white/60 text-xs">
                      <SortAsc className="w-3 h-3" />
                      Sorted by {sortBy.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto pr-1 space-y-2 min-h-0">
                  <AnimatePresence mode="popLayout">
                    {filteredAndSortedTodos.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full"
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/msoeawqm.json"
                          trigger="loop"
                          delay="2000"
                          style={{ width: "80px", height: "80px", filter: "drop-shadow(0 2px 16px #a78bfa)" }}
                        />
                        <p className="text-white/80 mt-3 text-base font-medium">
                          {searchTerm || filterStatus !== "all" || filterPriority !== "all" || filterCategory !== "all" 
                            ? "No todos match your filters" 
                            : "No todos yet. Create your first task!"}
                        </p>
                        {(searchTerm || filterStatus !== "all" || filterPriority !== "all" || filterCategory !== "all") && (
                          <button
                            onClick={() => {
                              setSearchTerm("")
                              setFilterStatus("all")
                              setFilterPriority("all")
                              setFilterCategory("all")
                            }}
                            className="btn mt-3 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1.5 text-sm"
                          >
                            Clear Filters
                          </button>
                        )}
                      </motion.div>
                    ) : (
                      filteredAndSortedTodos.map((todo, index) => (
                        <TodoItem key={todo.id} todo={todo} index={index} />
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white text-xs flex-shrink-0"
          >
            <p>Created with ❤️ by Pragyesh Kumar Seth</p>
          </motion.div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App