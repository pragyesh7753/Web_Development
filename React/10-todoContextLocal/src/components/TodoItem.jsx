import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import { Calendar, Tags } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [dueDate, setDueDate] = useState(todo.dueDate)
    const [priority, setPriority] = useState(todo.priority)
    const [tags, setTags] = useState(todo.tags.join(', '))
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { 
            ...todo, 
            todo: todoMsg,
            dueDate,
            priority,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
        })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    const getPriorityColor = () => {
        switch(todo.priority) {
            case 'high': return 'bg-red-500/20';
            case 'medium': return 'bg-yellow-500/20';
            case 'low': return 'bg-green-500/20';
            default: return 'bg-gray-500/20';
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`flex flex-col border border-white/20 rounded-lg px-3 py-2 gap-y-1 glass shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-xl ${todo.completed ? "bg-green-400/20" : getPriorityColor()}`}
            style={{ transformOrigin: 'center center' }}
        >
            <div className="flex items-center gap-x-2">
                <input
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 rounded-full accent-purple-500 border-2 border-purple-400 shadow-sm hover:scale-110 transition-all duration-150"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <input
                    type="text"
                    className={`border outline-none w-full rounded-md px-2 py-0.5 text-base font-medium transition-all duration-200 ${
                        isTodoEditable ? "bg-white/20 border-white/30 text-white" : "border-transparent bg-transparent text-white/90"
                    } ${todo.completed ? "line-through text-white/60" : ""}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                    style={{ background: isTodoEditable ? "rgba(255,255,255,0.08)" : "none" }}
                />
                <button
                    className="btn ml-1 px-2 py-0.5 text-xs"
                    onClick={() => isTodoEditable ? editTodo() : setIsTodoEditable(true)}
                    style={{ minWidth: 44 }}
                >
                    {isTodoEditable ? "Save" : "Edit"}
                </button>
                <button
                    className="btn ml-1 px-2 py-0.5 text-xs bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500"
                    onClick={() => deleteTodo(todo.id)}
                    style={{ minWidth: 44 }}
                >
                    Delete
                </button>
            </div>
            <div className="flex flex-wrap gap-1 items-center mt-0.5">
                <span className="flex items-center gap-1 text-xs text-white/70 bg-black/20 px-1.5 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {todo.dueDate ? format(new Date(todo.dueDate), 'MMM d, yyyy') : "No due date"}
                </span>
                <span className={`flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-full ${getPriorityColor()} border border-white/10`}>
                    <Tags className="w-3 h-3" />
                    {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
                </span>
                {todo.tags && todo.tags.length > 0 && todo.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-purple-500/30 text-white px-1.5 py-0.5 rounded-full">#{tag}</span>
                ))}
            </div>
        </motion.div>
    );
}

export default TodoItem;