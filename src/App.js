// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="App">
            <header>
                <h1>Task Management App</h1>
            </header>
            <main>
                <TaskForm fetchTasks={fetchTasks} />
                <TaskList tasks={tasks} fetchTasks={fetchTasks} />
            </main>
        </div>
    );
};

export default App;
