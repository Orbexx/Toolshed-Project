document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const editTaskFormContainer = document.getElementById('edit-task-form-container');
    const editTaskForm = document.getElementById('edit-task-form');

    loadTasks();

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        if (task === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
            saveTasks();
        });

        // const editButton = document.createElement('button');
        // editButton.textContent = 'Edit';
        // editButton.addEventListener('click', function() {
        //      if (taskToEdit) {
        //          document.getElementById('edit-task').value = taskToEdit.task;
        //      }
        //  })

        li.appendChild(deleteButton);
        // li.appendChild(editButton);
        todoList.appendChild(li);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        todoList.querySelectorAll('li').forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => addTodoFromStorage(task));
        }
    }

    function addTodoFromStorage(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
            saveTasks();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});