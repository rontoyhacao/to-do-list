const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');
const taskDropdown = document.querySelector('.task-filter');

// event listeners
taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteCheck);
taskDropdown.addEventListener('click', filterTask);

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
    inputCheckbox.classList.add('input-checkmark');
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

function deleteCheck(e) {
    const taskItem = e.target;

    // delete task
    if (taskItem.classList[0] === 'delete-btn') {
        const task = taskItem.parentElement;
        task.classList.add('exit-anim');
        // wait for the transition to end before removing the task
        task.addEventListener('transitionend', function() {
            task.remove();
        });
    }

    // mark a task as complete
    if (taskItem.classList[0] === 'input-checkmark') {
        const task = taskItem.parentElement;
        const task2 = task.parentElement;
        task2.classList.toggle('completed');
    }
}

function filterTask(e) {
    const tasks = taskList.childNodes;
    console.log(tasks);
    tasks.forEach(function(todo) {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'pending':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}