import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { Calendar, Tags, Plus, AlertCircle } from 'lucide-react';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState(null)
    const [priority, setPriority] = useState("medium")
    const [category, setCategory] = useState("general")
    const [tags, setTags] = useState("")
    const [errors, setErrors] = useState({})
    const [isExpanded, setIsExpanded] = useState(false)
    const { addTodo, categories } = useTodo()

    const validateForm = () => {
        const newErrors = {}
        if (!todo.trim()) {
            newErrors.todo = "Todo title is required"
        }
        if (todo.trim().length > 100) {
            newErrors.todo = "Todo title must be less than 100 characters"
        }
        if (description.length > 500) {
            newErrors.description = "Description must be less than 500 characters"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const add = (e) => {
        e.preventDefault()
        
        if (!validateForm()) return

        try {
            addTodo({
                todo: todo.trim(),
                description: description.trim(),
                completed: false,
                createdAt: Date.now(),
                dueDate,
                priority,
                category,
                tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
            })

            // Reset form
            setTodo("")
            setDescription("")
            setDueDate(null)
            setPriority("medium")
            setCategory("general")
            setTags("")
            setErrors({})
            setIsExpanded(false)
        } catch (error) {
            console.error('Error adding todo:', error)
            setErrors({ general: 'Failed to add todo. Please try again.' })
        }
    }

    return (
        <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <form onSubmit={add} className="space-y-2">
                <div className="space-y-1">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="What needs to be done?"
                                className={`w-full bg-white/10 border rounded-full px-3 py-2 outline-none text-white placeholder-white/60 focus:bg-white/20 transition-all text-sm ${
                                    errors.todo ? 'border-red-400' : 'border-white/20'
                                }`}
                                value={todo}
                                onChange={(e) => {
                                    setTodo(e.target.value)
                                    if (errors.todo) setErrors({...errors, todo: null})
                                }}
                                onFocus={() => setIsExpanded(true)}
                            />
                            {errors.todo && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-1 text-red-400 text-xs mt-1 px-3"
                                >
                                    <AlertCircle className="w-2 h-2" />
                                    {errors.todo}
                                </motion.div>
                            )}
                        </div>
                        
                        <motion.button 
                            type="submit"
                            className="rounded-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white shrink-0 hover:opacity-90 active:scale-95 transition-all duration-150 flex items-center gap-1 font-semibold text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Plus className="w-4 h-4" />
                            Add
                        </motion.button>
                    </div>
                </div>

                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 bg-white/5 rounded-lg p-3 border border-white/10"
                    >
                        <div>
                            <textarea
                                placeholder="Add description (optional)"
                                className={`w-full bg-white/10 border rounded-lg px-2 py-1.5 text-sm text-white placeholder-white/60 resize-none transition-all ${
                                    errors.description ? 'border-red-400' : 'border-white/20'
                                }`}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                    if (errors.description) setErrors({...errors, description: null})
                                }}
                                rows={2}
                            />
                            {errors.description && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-1 text-red-400 text-xs mt-1"
                                >
                                    <AlertCircle className="w-2 h-2" />
                                    {errors.description}
                                </motion.div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="flex items-center gap-1 text-white text-sm">
                                <Calendar className="w-3 h-3" />
                                <DatePicker
                                    selected={dueDate}
                                    onChange={date => setDueDate(date)}
                                    placeholderText="Set due date"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-xs focus:bg-white/20 transition-all"
                                    dateFormat="MMM d, yyyy"
                                    minDate={new Date()}
                                />
                            </div>

                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-xs focus:bg-white/20 transition-all"
                            >
                                <option value="low" className="bg-purple-600 text-white">🟢 Low Priority</option>
                                <option value="medium" className="bg-purple-600 text-white">🟡 Medium Priority</option>
                                <option value="high" className="bg-purple-600 text-white">🔴 High Priority</option>
                            </select>

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-xs focus:bg-white/20 transition-all"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat} className="bg-purple-600 text-white">
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center gap-1 text-white text-sm">
                            <Tags className="w-3 h-3" />
                            <input
                                type="text"
                                placeholder="Add tags (comma-separated)"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-xs focus:bg-white/20 transition-all"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                type="button"
                                onClick={() => setIsExpanded(false)}
                                className="text-white/60 text-xs hover:text-white transition-colors"
                            >
                                Collapse
                            </button>
                            <div className="text-white/60 text-xs">
                                {todo.length}/100 characters
                            </div>
                        </div>
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
}

export default TodoForm;