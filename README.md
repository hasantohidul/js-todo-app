# To-Do List Application

This repository contains a simple To-Do application built using HTML, CSS, and JavaScript. The app allows users to add, view, and manage tasks in a clean and responsive interface.

## Features

- **Add / Delete Tasks:** Users can insert new tasks using a text field and a submit button and delete a task from the task list.
- **Complete Tasks** Users can mark a task as completed by clicking a checkbox
- **Responsive Design:** The layout adjusts to different screen sizes for optimal user experience on both desktop and mobile devices.
- **Task List Management:** The tasks are dynamically displayed as a list.
- **Data Persistence:** Tasks are saved in the browser's `localStorage`, ensuring that they persist even after refreshing the browser or reopening the app.

## Files

1. **index.html**  
   The main HTML file which structures the application, including:
   - A form for adding new tasks.
   - A section to display the task list.
   - Links to external CSS and JS files.

2. **styles.css**  
   This file contains all the styling for the application, featuring:
   - Basic layout and typography styles.
   - Flexbox-based responsive design for better user experience across devices.
   - Button hover effects and task list styling.

3. **app.js**  
   The JavaScript logic that powers the To-Do list functionality:
   - Handles task addition, deletion rendering tasks dynamically, and updating the task list as completed.
   - Maintains data persistence by using `localStorage` a build in object

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/hasantohidul/js-todo-app.git
   ```
2. Navigate to the project directory and open index.html in any browser.

## Dependencies
- No external dependencies are required. All styles and scripts are included in the project.

## License
This project is open source and available under MIT License