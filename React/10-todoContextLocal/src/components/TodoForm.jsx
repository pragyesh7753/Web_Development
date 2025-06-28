import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { Calendar, Tags } from 'lucide-react';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const [dueDate, setDueDate] = useState(null)
    const [priority, setPriority] = useState("medium")
    const [tags, setTags] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({
            todo,
            completed: false,
            dueDate,
            priority,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
        })

        // Reset form
        setTodo("")
        setDueDate(null)
        setPriority("medium")
        setTags("")
    }

    return (
        <motion.form
            onSubmit={add}
            className="space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 outline-none text-white placeholder-white/60 focus:bg-white/20 transition-all"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit"
                    className="rounded-full px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white shrink-0 hover:opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-2">
                    <lord-icon
                        src="https://cdn.lordicon.com/mecwbjnp.json"
                        trigger="hover"
                        style={{ width: "20px", height: "20px" }}
                        colors="primary:#ffffff,secondary:#ffffff"
                    />
                    Add
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex items-center gap-2 text-white w-full md:w-auto">
                    <Calendar className="w-4 h-4" />
                    <DatePicker
                        selected={dueDate}
                        onChange={date => setDueDate(date)}
                        placeholderText="Set due date"
                        className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm w-full md:w-auto focus:bg-white/20 transition-all"
                        dateFormat="MMM d, yyyy"
                    />
                </div>

                <div className="flex items-center gap-2 text-white w-full md:w-auto">
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full md:w-auto bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm focus:bg-white/20 transition-all"
                    >
                        <option value="low" className="bg-purple-600 text-white">Low Priority</option>
                        <option value="medium" className="bg-purple-600 text-white">Medium Priority</option>
                        <option value="high" className="bg-purple-600 text-white">High Priority</option>
                    </select>
                </div>

                <div className="flex items-center gap-2 text-white flex-1 w-full">
                    <Tags className="w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Add tags (comma-separated)"
                        className="w-full bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm focus:bg-white/20 transition-all"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
            </div>
        </motion.form>
    );
}

export default TodoForm;