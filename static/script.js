document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let taskInput = document.getElementById('task-input');
    let task = taskInput.value;

    fetch('/add_task', {
        method: 'POST',
        body: new URLSearchParams({
            'task': task
        })
    })
        .then(response => response.json())
        .then(data => {
            updateTaskList(data.tasks);
            taskInput.value = '';  // Limpiar el campo
        });
});

function updateTaskList(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';  // Limpiar la lista actual

    tasks.forEach(function (task, index) {
        let li = document.createElement('li');
        li.textContent = task.task;
        taskList.appendChild(li);
    });
}
