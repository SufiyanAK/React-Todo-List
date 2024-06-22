# Todo List App

## Hello, Folks!

Welcome to the best Todo List app you will ever see. It's simple, it's easy, and it's going to change the way you handle your tasks. Believe me, it's fantastic.

## How to Get Started

First things first, you need to get the app running on your local machine. Here's how you do it:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/SufiyanAK/React-Todo-List.git
   ```

2. **Navigate to the App Directory:**

   ```bash
   cd 'React-Todo-List'
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   or
   npm i
   ```

4. **Start the App:**
   ```bash
   npm run dev
   ```

## Using the App

Alright, now you're up and running. Let's talk about how you can use this beautiful app.

1. **Add a Task:**

   - Look at that input box at the top, the one that says "Enter a Task...".
   - Type in your task.
   - Hit the "Add" button. Boom! Your task is now on the list.

2. **Delete a Task:**

   - See that "Delete" button next to each task? Click it, and the task is gone. Just like that.

3. **Move Tasks Up and Down:**
   - Want to move a task up? Click the ☝️ button.
   - Want to move it down? Click the 👇 button.
   - Easy, right?

## The Code

Here's a quick look at the magic behind the scenes.

- **State Management:** We're using React's `useState` to handle our tasks.
- **Adding Tasks:** We check if the task isn't empty, then add it to our list.
- **Deleting Tasks:** Simple, just filter out the task.
- **Moving Tasks:** We swap the tasks in the list to move them up or down.

```jsx
import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          id="TaskInput"
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((t, index) => (
          <li key={index}>
            <span className="text">{t}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              ☝️
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
```

## Conclusion

Folks, it's a great app. You'll love it. It's so easy, even I could use it. So, get out there, be productive, and make your todo list work for you. Enjoy!

---

### Feel free to reach out if you have any questions or need further assistance.

Best,
`Your Friendly Developer: Sufiyan AK`
