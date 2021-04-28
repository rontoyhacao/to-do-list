const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');

taskButton.addEventListener('click', addTask);

function addTask(e) {
    e.preventDefault();

    // add task: create list item
    const newTask = document.createElement('li');
    const newTaskLabel = document.createElement('label');
    newTaskLabel.classList.add('container');
    newTaskLabel.innerText = taskInput.value;
    newTask.appendChild(newTaskLabel);

    // add task: create checkbox
    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    newTaskLabel.appendChild(inputCheckbox);
    const completeTaskCheckbox = document.createElement('span');
    completeTaskCheckbox.classList.add('checkmark');
    newTaskLabel.appendChild(completeTaskCheckbox);

    // add task: create delete button
    const deleteTask = document.createElement('button');
    deleteTask.classList.add('delete-btn');
    deleteTask.innerHTML = '<i class="fas fa-times"></i>';
    newTask.appendChild(deleteTask);

    // append to task list
    taskList.appendChild(newTask);

    // clear input field
    taskInput.value = '';
}