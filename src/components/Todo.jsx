import React, { useState } from "react";

function Todo() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {

        if (newTask.trim() !== '') {
            setTask(t => [...t, newTask]);
            setNewTask('')
        }

    }

    function deleteTask(index) {
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]

            setTask(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]

            setTask(updatedTask);
        }

    }

    return (
        <div className="to-do-list">
            <h1>Todo List</h1>

            <div>
                <input type="text" placeholder="Enter a Task..." value={newTask} id="TaskInput" onChange={handleInputChange} />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {task.map((t, index) =>
                    <li key={index}>
                        <span className="text">{t}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
            </ol>
        </div>
    )
}

export default Todo