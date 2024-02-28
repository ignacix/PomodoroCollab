class ToDoList {
    constructor() {
        this.tasks = [];
    }

    // Método para agregar una tarea a la lista
    addTask(task) {
        this.tasks.push({ task: task, completed: false });
    }

    // Método para marcar una tarea como completada
    completeTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks[taskIndex].completed = true;
        } else {
            console.error('Índice de tarea inválido.');
        }
    }

    // Método para eliminar una tarea de la lista
    removeTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks.splice(taskIndex, 1);
        } else {
            console.error('Índice de tarea inválido.');
        }
    }

    // Método para obtener todas las tareas de la lista
    getAllTasks() {
        return this.tasks;
    }

    // Método para obtener tareas completadas
    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    // Método para obtener tareas pendientes
    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }
}