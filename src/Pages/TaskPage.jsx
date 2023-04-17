import React, { useState } from 'react';
import './TaskPage.css'

function TaskPage() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleUpdateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    const handleDeleteTask = (taskToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDelete.id));
    };

    return (
        <div className="container">
            <h1 className="title">To-Do List</h1>
            <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
            <TaskForm onAddTask={handleAddTask} />
        </div>
    );
}

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
    const handleUpdateClick = (event, task) => {
        const updatedTaskName = window.prompt('Enter the new task name:', task.name);
        if (updatedTaskName) {
            onUpdateTask({ ...task, name: updatedTaskName });
        }
    };

    const handleDeleteClick = (event, task) => {
        const shouldDelete = window.confirm(`Are you sure you want to delete "${task.name}"?`);
        if (shouldDelete) {
            onDeleteTask(task);
        }
    };

    return (
        <ul className="list">
            {tasks.map((task) => (
                <li key={task.id}>
                    <div className="task">{task.name}</div>
                    <div className="buttons">
                        <button className="edit-button" onClick={(event) => handleUpdateClick(event, task)}>Edit</button>
                        <button className="delete-button" onClick={(event) => handleDeleteClick(event, task)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

function TaskForm({ onAddTask }) {
    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        const newTask = {
            id: Date.now(),
            name: newTaskName,
        };
        onAddTask(newTask);
        setNewTaskName('');
        
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label">
                New task:
                <input
                    className="input"
                    type="text"
                    value={newTaskName}
                    onChange={(event) => setNewTaskName(event.target.value)}
                    required
                />
            </label>
            <button className="add-button" type="submit">Add</button>
        </form>
    );
}

export default TaskPage;

