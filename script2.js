function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a valid task.');
        return;
    }

    var pendingTasksList = document.getElementById('pendingTasks');
    var newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', function () {
        moveTask(this, pendingTasksList, 'completedTasks');
    });

    pendingTasksList.appendChild(newTask);
    taskInput.value = '';
}

function moveTask(task, fromList, toListId) {
    var toList = document.getElementById(toListId);
    toList.appendChild(task);
    task.removeEventListener('click', function () {
        moveTask(this, toList, 'pendingTasks');
    });
    task.addEventListener('click', function () {
        moveTask(this, fromList, 'completedTasks');
    });
}