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
        switch(priority) {
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
            className={`flex flex-col border border-white/20 rounded-xl px-4 py-3 gap-y-2 backdrop-blur-sm ${todo.completed ? "bg-green-500/20" : getPriorityColor()}`}
        >
            <div className="flex items-center gap-x-3">
                <input
                    type="checkbox"
                    className="cursor-pointer w-5 h-5 rounded-full accent-purple-500"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <input
                    type="text"
                    className={`border outline-none w-full rounded-lg px-2 py-1 ${
                        isTodoEditable ? "bg-white/10 border-white/20" : "border-transparent bg-transparent"
                    } ${todo.completed ? "line-through text-white/60" : "text-white"}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />
                
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 shrink-0 disabled:opacity-50 transition-all"
                    onClick={() => {
                        if (todo.completed) return;
                        if (isTodoEditable) {
                            editTodo();
                        } else setIsTodoEditable((prev) => !prev);
                    }}
                    disabled={todo.completed}
                >
                    <lord-icon
                        src={isTodoEditable ? "https://cdn.lordicon.com/oqdmuxru.json" : "https://cdn.lordicon.com/wloilxuq.json"}
                        trigger="hover"
                        style={{ width: "20px", height: "20px" }}
                    />
                </button>
                
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 shrink-0 transition-all"
                    onClick={() => deleteTodo(todo.id)}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/jmkrnisz.json"
                        trigger="hover"
                        style={{ width: "20px", height: "20px" }}
                    />
                </button>
            </div>

            {isTodoEditable ? (
                <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Calendar className="w-4 h-4 text-white" />
                        <DatePicker
                            selected={dueDate}
                            onChange={date => setDueDate(date)}
                            placeholderText="Set due date"
                            className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white w-full md:w-auto"
                            dateFormat="MMM d, yyyy"
                        />
                    </div>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full md:w-auto bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white"
                    >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>

                    <div className="flex items-center gap-2 flex-1 w-full">
                        <Tags className="w-4 h-4 text-white" />
                        <input
                            type="text"
                            placeholder="Add tags (comma-separated)"
                            className="w-full bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                </div>
            ) : (
                <div className="flex gap-4 items-center text-sm">
                    {dueDate && (
                        <div className="flex items-center gap-1 text-white/80">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(dueDate), 'MMM d, yyyy')}</span>
                        </div>
                    )}
                    {todo.tags.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                            {todo.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="bg-white/10 px-2 py-0.5 rounded-full text-xs text-white/80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    );
}

export default TodoItem;