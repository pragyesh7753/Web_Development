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
          completed: !prevTodo.completed
        } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-xl px-6 py-6 backdrop-blur-sm bg-white/10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <lord-icon
              src="https://cdn.lordicon.com/wxhtpnnk.json"
              trigger="loop"
              delay="2000"
              style={{ width: "50px", height: "50px" }}
            />
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
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
                className="w-full bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-2 outline-none text-white placeholder-white/60 focus:bg-white/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-4 h-4 text-white" />
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white outline-none focus:bg-white/20 transition-all"
              >
                <option value="all">All Priorities</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white outline-none focus:bg-white/20 transition-all"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </div>
          </div>

          <AnimatePresence>
            <div className="flex flex-col gap-y-3">
              {filteredTodos.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/msoeawqm.json"
                    trigger="loop"
                    delay="2000"
                    style={{ width: "150px", height: "150px", margin: "0 auto" }}
                  />
                  <p className="text-white/80 mt-4">No todos found. Start adding some!</p>
                </motion.div>
              ) : (
                filteredTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App