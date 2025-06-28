import React from 'react'
import { useTodo } from '../contexts/TodoContext'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, AlertTriangle, Target, TrendingUp, Calendar } from 'lucide-react'

function Statistics() {
    const { todos } = useTodo()

    const stats = {
        total: todos.length,
        completed: todos.filter(todo => todo.completed).length,
        pending: todos.filter(todo => !todo.completed).length,
        overdue: todos.filter(todo => {
            if (!todo.dueDate || todo.completed) return false
            return new Date(todo.dueDate) < new Date()
        }).length,
        highPriority: todos.filter(todo => todo.priority === 'high' && !todo.completed).length,
        completionRate: todos.length > 0 ? Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100) : 0
    }

    const categoryStats = todos.reduce((acc, todo) => {
        const category = todo.category || 'general'
        if (!acc[category]) {
            acc[category] = { total: 0, completed: 0 }
        }
        acc[category].total++
        if (todo.completed) acc[category].completed++
        return acc
    }, {})

    const statCards = [
        {
            title: 'Total Tasks',
            value: stats.total,
            icon: Target,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-500/20'
        },
        {
            title: 'Completed',
            value: stats.completed,
            icon: CheckCircle,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-500/20'
        },
        {
            title: 'Pending',
            value: stats.pending,
            icon: Clock,
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-500/20'
        },
        {
            title: 'Overdue',
            value: stats.overdue,
            icon: AlertTriangle,
            color: 'from-red-500 to-pink-500',
            bgColor: 'bg-red-500/20'
        },
        {
            title: 'High Priority',
            value: stats.highPriority,
            icon: TrendingUp,
            color: 'from-purple-500 to-violet-500',
            bgColor: 'bg-purple-500/20'
        },
        {
            title: 'Completion Rate',
            value: `${stats.completionRate}%`,
            icon: Calendar,
            color: 'from-indigo-500 to-purple-500',
            bgColor: 'bg-indigo-500/20'
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {statCards.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`${stat.bgColor} rounded-xl p-4 border border-white/20 glass`}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <stat.icon className="w-6 h-6 text-white" />
                            <span className={`text-2xl font-bold text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                                {stat.value}
                            </span>
                        </div>
                        <h3 className="text-white/80 text-sm font-medium">{stat.title}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Category Breakdown
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(categoryStats).map(([category, data]) => (
                        <motion.div
                            key={category}
                            className="bg-white/10 rounded-lg p-4 border border-white/10"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white/90 font-medium capitalize">
                                    {category}
                                </span>
                                <span className="text-white/60 text-sm">
                                    {data.completed}/{data.total}
                                </span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${data.total > 0 ? (data.completed / data.total) * 100 : 0}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Statistics
