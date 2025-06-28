import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import './index.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import "lord-icon-element"

function App() {
  const [todos, setTodos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPriority, setFilterPriority] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
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

  const cleanupOldCompletedTodos = () => {
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
    setTodos((prev) => 
      prev.filter(todo => {
        // Keep todo if it's not completed or if it was completed less than 30 days ago
        return !todo.completed || !todo.completedAt || todo.completedAt > thirtyDaysAgo;
      })
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      // Clean up old completed todos before setting them
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
      const cleanedTodos = todos.filter(todo => {
        return !todo.completed || !todo.completedAt || todo.completedAt > thirtyDaysAgo;
      });
      setTodos(cleanedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Clean up old completed todos daily
  useEffect(() => {
    const interval = setInterval(() => {
      cleanupOldCompletedTodos()
    }, 24 * 60 * 60 * 1000) // Run every 24 hours

    return () => clearInterval(interval)
  }, [])

  const filteredTodos = todos
    .filter(todo => todo.todo.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(todo => filterPriority === "all" ? true : todo.priority === filterPriority)
    .filter(todo => {
      if (filterStatus === "all") return true;
      if (filterStatus === "completed") return todo.completed;
      return !todo.completed;
    });

  return (
    <TodoProvider value={{
      todos,
      addTodo,
      updateTodo,
      deleteTodo,
      toggleComplete,
      searchTerm,
      setSearchTerm,
      filterPriority,
      setFilterPriority,
      filterStatus,
      setFilterStatus
    }}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto glass shadow-2xl px-8 py-8 max-h-[90vh] flex flex-col border border-white/30 relative">
          <div className="flex items-center justify-center gap-3 mb-8">
            <lord-icon
              src="https://cdn.lordicon.com/wxhtpnnk.json"
              trigger="loop"
              delay="2000"
              style={{ width: "60px", height: "60px", filter: "drop-shadow(0 2px 8px #a78bfa)" }}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl">
              Manage Your Todos
            </h1>
          </div>

          <div className="mb-6">
            <TodoForm />
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <input
                type="text"
                placeholder="Search todos..."
                className="w-full bg-white/20 border border-white/30 rounded-full pl-10 pr-4 py-2 outline-none text-white placeholder-white/70 focus:bg-white/30 shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-4 h-4 text-white" />
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-full px-4 py-2 text-white outline-none focus:bg-white/30 shadow-inner"
              >
                <option value="all" className="bg-purple-600 text-white">All Priorities</option>
                <option value="high" className="bg-purple-600 text-white">High Priority</option>
                <option value="medium" className="bg-purple-600 text-white">Medium Priority</option>
                <option value="low" className="bg-purple-600 text-white">Low Priority</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-full px-4 py-2 text-white outline-none focus:bg-white/30 shadow-inner"
              >
                <option value="all" className="bg-purple-600 text-white">All Status</option>
                <option value="completed" className="bg-purple-600 text-white">Completed</option>
                <option value="incomplete" className="bg-purple-600 text-white">Incomplete</option>
              </select>
            </div>
          </div>

          <div className={filteredTodos.length === 0 ? "flex-1 flex items-center justify-center" : "overflow-y-auto flex-1 pr-1"}>
            <AnimatePresence>
              <div className={filteredTodos.length === 0 ? "w-full" : "flex flex-col gap-y-4 px-2"}>
                {filteredTodos.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/msoeawqm.json"
                      trigger="loop"
                      delay="2000"
                      style={{ width: "150px", height: "150px", margin: "0 auto", filter: "drop-shadow(0 2px 16px #a78bfa)" }}
                    />
                    <p className="text-white/80 mt-4 text-lg font-semibold">No todos found. Start adding some!</p>
                  </motion.div>
                ) : (
                  filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))
                )}
              </div>
            </AnimatePresence>
          </div>
          <h1 className='text-center text-white mt-4 text-sm opacity-80'>Created with ❤️ by Pragyesh Kumar Seth</h1>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App