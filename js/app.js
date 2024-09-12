const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  try {
    const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
  } catch (error) {
    console.log("Error parsing tasks from localStorage:", error);
    tasks = [];
  }
  
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskTitle = todoInput.value.trim();

  if (!taskTitle) {
    alert("Please, enter a task!");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  todoInput.value = "";
});

const renderTasks = () => {
  todoList.innerHTML = "";

  if (!tasks) {
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute("data-task-id", task.id);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", toggleTaskCompletion);

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", handleTaskDeletion);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
};

const toggleTaskCompletion = (e) => {
  const taskId = parseInt(e.target.parentElement.getAttribute("data-task-id"));

  const task = tasks.find((t) => t.id === taskId);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
};

const handleTaskDeletion = (e) => {
  const taskId = parseInt(e.target.parentElement.getAttribute("data-task-id"));

  tasks = tasks.filter(t => t.id !== taskId);
  saveTasks();
  renderTasks();
};


const saveTasks = () => localStorage.setItem("tasks", JSON.stringify(tasks));