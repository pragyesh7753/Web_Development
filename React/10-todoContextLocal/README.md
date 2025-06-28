# TodoMaster Pro

A modern, feature-rich todo application built with React 19, Vite, and Tailwind CSS v4.

## Features

✨ **Modern UI/UX**
- Beautiful glassmorphism design
- Animated backgrounds and transitions
- Responsive design for all devices
- Lord Icons integration

📝 **Advanced Todo Management**
- Create, edit, delete, and duplicate todos
- Priority levels (High, Medium, Low)
- Categories (Work, Personal, Shopping, etc.)
- Due dates with overdue detection
- Tags and descriptions
- Search and filter functionality

📊 **Analytics & Insights**
- Completion statistics
- Category breakdown
- Progress tracking
- Visual charts and metrics

💾 **Data Management**
- Local storage persistence
- Import/Export functionality
- Auto-cleanup of old completed tasks
- Backup and restore capabilities

## Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite 6** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React DatePicker** - Date selection component
- **Date-fns** - Date utility library
- **Lucide React** - Beautiful icons
- **Lord Icons** - Animated icons
- **Context API** - State management

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd 10-todoContextLocal
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint and fix issues
- `npm run lint:check` - Check for linting errors
- `npm run clean` - Clean build artifacts

## Project Structure

```
src/
├── components/          # React components
│   ├── TodoForm.jsx    # Todo creation form
│   ├── TodoItem.jsx    # Individual todo item
│   ├── Statistics.jsx  # Analytics dashboard
│   └── index.js        # Component exports
├── contexts/           # React Context providers
│   ├── TodoContext.js  # Main todo context
│   └── index.js        # Context exports
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind
```

## Features in Detail

### Todo Management
- **Quick Add**: Fast todo creation with enter key
- **Bulk Operations**: Clear completed, export/import
- **Smart Sorting**: Sort by date, priority, status, or name
- **Advanced Filtering**: Filter by status, priority, and category

### UI/UX
- **Glass Morphism**: Modern translucent design
- **Animations**: Smooth transitions and micro-interactions
- **Dark Theme**: Optimized for low-light usage
- **Mobile First**: Responsive design that works on all devices

### Data Persistence
- **Local Storage**: Automatic saving to browser storage
- **Data Export**: JSON export for backup
- **Data Import**: Restore from backup files
- **Auto Cleanup**: Old completed todos are automatically cleaned

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Created with ❤️ by Pragyesh Kumar Seth
