const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');   


addTaskBtn.addEventListener('click',   
 () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        if (addTaskBtn.dataset.editId) {
            const taskItem = document.getElementById(addTaskBtn.dataset.editId);
            taskItem.querySelector('.task-text').textContent = taskText;
            addTaskBtn.textContent = 'Add Task';
            delete addTaskBtn.dataset.editId;
        } else {
            const newTask = document.createElement('li');
            newTask.innerHTML = `
                <input type="checkbox" class="complete-checkbox">
                <span class="task-text">${taskText}</span>
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            `;
            newTask.id = Date.now();
            taskList.appendChild(newTask);
        }
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.parentElement;   

        taskList.removeChild(taskItem);   

    } else if (event.target.classList.contains('edit-btn')) {
        const taskItem = event.target.parentElement;
        const taskText = taskItem.querySelector('.task-text').textContent;   

        taskInput.value = taskText;
        addTaskBtn.textContent = 'Update Task';
        addTaskBtn.dataset.editId = taskItem.id;
    }
});

taskList.addEventListener('change', (event) => {
    if (event.target.classList.contains('complete-checkbox')) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle('completed');
    }
});