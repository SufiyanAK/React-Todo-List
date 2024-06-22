import React, { useState } from "react";

function Todo() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp() {

    }

    function moveTaskDown() {

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