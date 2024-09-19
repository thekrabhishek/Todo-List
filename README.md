# 📝 Todo List Application

## Overview
A simple, responsive **Todo List** application built with **HTML, CSS, and JavaScript**. This app allows users to create, view, and delete tasks with due dates. It dynamically updates and displays the list of tasks and stores them in local storage.

## Demo

![Todo List GIF Demo](https://github.com/user-attachments/assets/8b40b056-1e99-437f-8298-18400ba7f203)

## Features
- **Add Todo:** Users can enter a task name and a due date.
- **Delete Todo:** Remove tasks from the list.
- **Responsive Design:** Works on mobile, tablet, and desktop devices.
- **Validation:** Input validation to ensure both task name and due date are entered before submission.
- **Local Storage:** Saves todos in local storage, so tasks persist on page reload.

## Tech Stack
- **HTML5**: Structure of the application
- **CSS3**: Styling and responsive design with Flexbox and Grid
- **JavaScript (ES6)**: Handles app logic, including adding/deleting tasks, rendering the list, and DOM manipulation
- **Local Storage**: For saving and loading tasks

## Code Structure
1. **HTML**: Structure of the app with input fields and buttons for adding tasks.
2. **CSS**: Styling for the form, task list, and responsive design.
3. **JavaScript**:
   - `addTodo()`: Adds a new todo to the list after validating the input.
   - `renderTodoList()`: Renders the current list of todos dynamically.
   - `localStorage`: Stores and retrieves todos for persistence.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```
2. Open the `index.html` file in your browser to view the app.

## How to Use
1. Enter a task name and due date.
2. Click **Add** to add the task to the list.
3. Click **Delete** to remove tasks from the list.
4. The list persists even after refreshing the browser!

## Screenshots
![App Screenshot](<img width="957" alt="Screenshot 2024-09-20 003814" src="https://github.com/user-attachments/assets/2787938f-b399-4fa8-9087-b987126e5971">
)

## Future Enhancements
- Edit tasks feature
- Sort tasks by due date
- Add priority levels for tasks

## Contributing
Feel free to fork the repository and submit a pull request to improve the functionality or design!
