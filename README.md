# React To-Do List with Local Storage

This project is a **To-Do List** application built with React. It allows users to create, read, update, and delete (CRUD) tasks, and it saves data in the browser's local storage using JSON format. This way, your tasks persist even after you refresh the page.

## Features

- **Add New Task**: Enter a task title and description to add a new task.
- **View Tasks**: Displays a list of all tasks stored.
- **Edit Task**: Edit any existing task.
- **Delete Task**: Remove any task from the list.
- **Persistent Storage**: All tasks are saved in local storage and are automatically loaded upon reopening the app.

## Technologies Used

- **React**: For creating UI components.
- **Local Storage**: For saving tasks persistently.
- **CSS**: For basic styling.

## Getting Started

To run this project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Nithesh-R/react_to_do.git
Navigate to the project folder:

bash
Copy code
cd react-todo-list
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The app should now be running on http://localhost:3000.

How to Use
Add a Task: Use the input field to add a task. Enter the task details and click Add.
Edit a Task: Click on the Edit button next to a task, update the details, and save the changes.
Delete a Task: Click on the Delete button to remove a task.
View Tasks: All tasks are displayed in a list. The list is automatically updated as you add, edit, or delete tasks.
Code Highlights
Local Storage
The localStorage API is used to persist tasks. When the app loads, it retrieves tasks from local storage, and when tasks are modified, it saves the updated list back to local storage.

CRUD Operations
Create: Adds a new task to the list.
Read: Fetches tasks from local storage and displays them.
Update: Allows editing a specific task.
Delete: Removes a task from the list.
Example Code Snippets
Adding a Task
javascript
Copy code
const addTask = (task) => {
  const updatedTasks = [...tasks, task];
  setTasks(updatedTasks);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};
Loading Tasks from Local Storage
javascript
Copy code
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) setTasks(storedTasks);
}, []);
Folder Structure
java
Copy code
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── TaskList.js
│   │   ├── TaskForm.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── package.json
└── README.md
TaskList.js: Displays the list of tasks.
TaskForm.js: Handles creating and editing tasks.
App.js: Main component that manages state and renders TaskList and TaskForm.
Contributing
Feel free to fork the project and submit pull requests. Contributions, bug reports, and feature requests are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy coding!
