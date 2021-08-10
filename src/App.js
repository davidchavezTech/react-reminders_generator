import { useState } from 'react';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';

function App() {
	const [showAddTask, setShowAddTask] = useState(false)

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Apointment',
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30pm',
			reminder: false,
		}
	])

	//Add task
	const handleAddTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = {id, ...task }
		setTasks([...tasks, newTask])
	}
	
	//Delete task
	const handleDeleteTask = (id) =>{
		setTasks(tasks.filter( task => task.id !== id))
	}

	const handleToggleReminder = (id) => {
		setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
	}
	
return (
	<div className="container">
		<Header onAdd={() => setShowAddTask(!showAddTask)} showAddOrClose={showAddTask} />
		{showAddTask && <AddTask onAdd={handleAddTask} />}
		{tasks.length > 0 ? (
			<Tasks tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleReminder} />
		) : (
			"No tasks to show")
		}
	</div>
);
}

export default App;
