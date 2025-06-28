import { useState, useRef } from 'react'
import { useTodo } from '../contexts/TodoContext';
import { Calendar, Tags, Copy, FileText, Clock, AlertCircle, Edit3, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { format, isToday, isTomorrow, isPast } from 'date-fns';
import DatePicker from 'react-datepicker';

function TodoItem({ todo, index }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [description, setDescription] = useState(todo.description || "")
    const [dueDate, setDueDate] = useState(todo.dueDate)
    const [priority, setPriority] = useState(todo.priority)
    const [category, setCategory] = useState(todo.category || "general")
    const [tags, setTags] = useState(todo.tags.join(', '))
    const [showDetails, setShowDetails] = useState(false)
    const { updateTodo, deleteTodo, toggleComplete, duplicateTodo, categories } = useTodo()
    const itemRef = useRef(null)

    const editTodo = () => {
        updateTodo(todo.id, { 
            ...todo, 
            todo: todoMsg,
            description,
            dueDate,
            priority,
            category,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
        })
        setIsTodoEditable(false)
    }

    const cancelEdit = () => {
        setTodoMsg(todo.todo)
        setDescription(todo.description || "")
        setDueDate(todo.dueDate)
        setPriority(todo.priority)
        setCategory(todo.category || "general")
        setTags(todo.tags.join(', '))
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    const handleDuplicate = () => {
        duplicateTodo(todo.id)
    }

    const getPriorityConfig = () => {
        switch(todo.priority) {
            case 'high': 
                return {
                    bg: 'bg-red-500/15 border-red-400/40',
                    badge: 'bg-red-500/30 text-red-200 border-red-400/50',
                    icon: '🔴',
                    label: 'High Priority'
                };
            case 'medium': 
                return {
                    bg: 'bg-yellow-500/15 border-yellow-400/40',
                    badge: 'bg-yellow-500/30 text-yellow-200 border-yellow-400/50',
                    icon: '🟡',
                    label: 'Medium Priority'
                };
            case 'low': 
                return {
                    bg: 'bg-green-500/15 border-green-400/40',
                    badge: 'bg-green-500/30 text-green-200 border-green-400/50',
                    icon: '🟢',
                    label: 'Low Priority'
                };
            default: 
                return {
                    bg: 'bg-gray-500/15 border-gray-400/40',
                    badge: 'bg-gray-500/30 text-gray-200 border-gray-400/50',
                    icon: '⚪',
                    label: 'No Priority'
                };
        }
    }

    const getDueDateStatus = () => {
        if (!todo.dueDate) return null;
        const date = new Date(todo.dueDate);
        if (isPast(date) && !todo.completed) return 'overdue';
        if (isToday(date)) return 'today';
        if (isTomorrow(date)) return 'tomorrow';
        return 'upcoming';
    }

    const getDueDateConfig = () => {
        const status = getDueDateStatus();
        switch(status) {
            case 'overdue': 
                return {
                    color: 'bg-red-500/30 text-red-200 border-red-400/50',
                    icon: '🚨',
                    urgent: true
                };
            case 'today': 
                return {
                    color: 'bg-orange-500/30 text-orange-200 border-orange-400/50',
                    icon: '📅',
                    urgent: true
                };
            case 'tomorrow': 
                return {
                    color: 'bg-yellow-500/30 text-yellow-200 border-yellow-400/50',
                    icon: '📝',
                    urgent: false
                };
            default: 
                return {
                    color: 'bg-blue-500/30 text-blue-200 border-blue-400/50',
                    icon: '📅',
                    urgent: false
                };
        }
    }

    const formatDueDate = () => {
        if (!todo.dueDate) return "No due date";
        const date = new Date(todo.dueDate);
        const status = getDueDateStatus();
        
        switch(status) {
            case 'today': return 'Due Today';
            case 'tomorrow': return 'Due Tomorrow';
            case 'overdue': return `Overdue (${format(date, 'MMM d')})`;
            default: return format(date, 'MMM d, yyyy');
        }
    }

    const priorityConfig = getPriorityConfig();
    const dueDateConfig = getDueDateConfig();

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            layout
            transition={{ duration: 0.2 }}
            className={`group relative border rounded-xl overflow-hidden glass shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg ${
                todo.completed 
                    ? "bg-green-400/10 border-green-400/40" 
                    : priorityConfig.bg
            } ${isTodoEditable ? 'ring-2 ring-purple-400/60 shadow-purple-500/20' : ''}`}
            whileHover={{ y: -2 }}
        >
            {/* Priority Indicator Strip */}
            {!todo.completed && (
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                    todo.priority === 'high' ? 'bg-red-500' :
                    todo.priority === 'medium' ? 'bg-yellow-500' :
                    todo.priority === 'low' ? 'bg-green-500' : 'bg-gray-500'
                }`} />
            )}

            <div className="p-3 space-y-2">
                {/* Header Section */}
                <div className="flex items-start gap-3">
                    <motion.input
                        type="checkbox"
                        className="cursor-pointer w-5 h-5 rounded-md accent-purple-500 border-2 border-purple-400/60 shadow-md hover:scale-110 transition-all duration-200 mt-0.5 flex-shrink-0"
                        checked={todo.completed}
                        onChange={toggleCompleted}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    />
                    
                    <div className="flex-1 min-w-0">
                        <div className="space-y-2">
                            <input
                                type="text"
                                className={`w-full text-base font-medium transition-all duration-200 rounded-lg px-3 py-2 border ${
                                    isTodoEditable 
                                        ? "bg-white/15 border-white/30 text-white focus:bg-white/20 focus:border-purple-400/50" 
                                        : "border-transparent bg-transparent text-white/95 hover:bg-white/5"
                                } ${todo.completed ? "line-through text-white/60" : ""}`}
                                value={todoMsg}
                                onChange={(e) => setTodoMsg(e.target.value)}
                                readOnly={!isTodoEditable}
                                placeholder="Enter todo title..."
                            />
                            
                            {/* Status Badges - Compact Row */}
                            <div className="flex flex-wrap gap-1.5 items-center">
                                {/* Due Date Badge */}
                                {todo.dueDate && (
                                    <motion.span 
                                        className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border ${dueDateConfig.color}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <span className="text-xs">{dueDateConfig.icon}</span>
                                        <span className="truncate">{formatDueDate()}</span>
                                        {dueDateConfig.urgent && <AlertCircle className="w-2.5 h-2.5 animate-pulse" />}
                                    </motion.span>
                                )}
                                
                                {/* Priority Badge */}
                                <motion.span 
                                    className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border ${priorityConfig.badge}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <span className="text-xs">{priorityConfig.icon}</span>
                                    <span className="hidden sm:inline">{priorityConfig.label}</span>
                                    <span className="sm:hidden">{todo.priority}</span>
                                </motion.span>
                                
                                {/* Category Badge */}
                                <span className="flex items-center gap-1 text-xs font-medium bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded-md border border-indigo-400/50">
                                    <Tags className="w-2.5 h-2.5" />
                                    <span className="truncate max-w-16">{(todo.category || 'general').charAt(0).toUpperCase() + (todo.category || 'general').slice(1)}</span>
                                </span>

                                {/* Tags - Show count if many */}
                                {todo.tags && todo.tags.length > 0 && (
                                    <div className="flex items-center gap-1">
                                        {todo.tags.slice(0, 2).map((tag, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-xs bg-purple-500/25 text-purple-200 px-1.5 py-0.5 rounded border border-purple-400/30 font-medium"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                        {todo.tags.length > 2 && (
                                            <span className="text-xs text-white/60 font-medium">
                                                +{todo.tags.length - 2}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* Action Buttons - Compact */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                        {isTodoEditable ? (
                            <>
                                <motion.button
                                    className="btn px-2 py-1.5 text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 flex items-center gap-1"
                                    onClick={editTodo}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Save className="w-3 h-3" />
                                    <span className="hidden sm:inline">Save</span>
                                </motion.button>
                                <motion.button
                                    className="btn px-2 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-500 flex items-center gap-1"
                                    onClick={cancelEdit}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X className="w-3 h-3" />
                                </motion.button>
                            </>
                        ) : (
                            <>
                                <motion.button
                                    className="btn px-2 py-1.5 text-xs font-medium flex items-center gap-1"
                                    onClick={() => setIsTodoEditable(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Edit3 className="w-3 h-3" />
                                </motion.button>
                                <motion.button
                                    className="btn px-2 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 flex items-center"
                                    onClick={handleDuplicate}
                                    title="Duplicate todo"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Copy className="w-3 h-3" />
                                </motion.button>
                                <motion.button
                                    className="btn px-2 py-1.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 flex items-center"
                                    onClick={() => setShowDetails(!showDetails)}
                                    title="Toggle details"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FileText className="w-3 h-3" />
                                </motion.button>
                                <motion.button
                                    className="btn px-2 py-1.5 text-xs bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500"
                                    onClick={() => deleteTodo(todo.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X className="w-3 h-3" />
                                </motion.button>
                            </>
                        )}
                    </div>
                </div>

                {/* Description (when not editing) */}
                {(todo.description && !isTodoEditable) && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-black/20 rounded-lg p-3 border border-white/10"
                    >
                        <p className="text-white/80 text-sm leading-relaxed">{todo.description}</p>
                    </motion.div>
                )}

                {/* Edit Form - Compact */}
                {isTodoEditable && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 bg-black/20 rounded-lg p-3 border border-white/10"
                    >
                        <div className="space-y-2">
                            <label className="block text-white/80 text-xs font-medium">Description</label>
                            <textarea
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/60 resize-none focus:bg-white/15 focus:border-purple-400/50 transition-all"
                                placeholder="Add a detailed description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={2}
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="space-y-1">
                                <label className="block text-white/80 text-xs font-medium">Due Date</label>
                                <DatePicker
                                    selected={dueDate}
                                    onChange={date => setDueDate(date)}
                                    placeholderText="Set due date"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:bg-white/15 focus:border-purple-400/50 transition-all"
                                    dateFormat="MMM d, yyyy"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label className="block text-white/80 text-xs font-medium">Priority</label>
                                <select
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:bg-white/15 focus:border-purple-400/50 transition-all"
                                >
                                    <option value="low" className="bg-purple-700">🟢 Low</option>
                                    <option value="medium" className="bg-purple-700">🟡 Medium</option>
                                    <option value="high" className="bg-purple-700">🔴 High</option>
                                </select>
                            </div>
                            
                            <div className="space-y-1">
                                <label className="block text-white/80 text-xs font-medium">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:bg-white/15 focus:border-purple-400/50 transition-all"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat} className="bg-purple-700">
                                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="block text-white/80 text-xs font-medium">Tags</label>
                            <input
                                type="text"
                                placeholder="Add tags separated by commas"
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:bg-white/15 focus:border-purple-400/50 transition-all"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>
                    </motion.div>
                )}

                {/* Details Section - Compact */}
                {showDetails && !isTodoEditable && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-black/20 rounded-lg p-3 border border-white/10"
                    >
                        <div className="space-y-1.5 text-xs text-white/70">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3 text-purple-400" />
                                <span>Created: {format(new Date(todo.createdAt || todo.id), 'MMM d, yyyy • HH:mm')}</span>
                            </div>
                            {todo.completedAt && (
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-3 h-3 text-green-400" />
                                    <span>Completed: {format(new Date(todo.completedAt), 'MMM d, yyyy • HH:mm')}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default TodoItem;