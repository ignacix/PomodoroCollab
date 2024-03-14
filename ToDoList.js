class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task: task, completed: false });
    }

    completeTask(taskIndex) {
        this.toggleTaskStatus(taskIndex, true);
    }

    removeTask(taskIndex) {
        if (this.isValidIndex(taskIndex)) {
            this.tasks.splice(taskIndex, 1);
        }
    }

    getAllTasks() {
        return this.tasks;
    }

    toggleTaskStatus(taskIndex, completed) {
        if (this.isValidIndex(taskIndex)) {
            this.tasks[taskIndex].completed = completed;
        }
    }

    isValidIndex(taskIndex) {
        if (taskIndex < 0 || taskIndex >= this.tasks.length) {
            console.error('Índice de tarea inválido.');
            return false;
        }
        return true;
    }
}

