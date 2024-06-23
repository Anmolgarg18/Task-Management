// frontend/src/components/TaskList.js
import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <div key={task._id} className="task">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
