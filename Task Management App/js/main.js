document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskinput.value;
        if (taskTaxt === '') {
            alert('Please enter a task');
            return;
        }

        const task = new Task(taskText);
        TaskManager.addTask(task);
        taskInput.value = '';
        renderTasks();
    }
})