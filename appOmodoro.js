// CRONOMETRO
var cronometroInterval;
var segundos = 0;
var minutos = 0;
var horas = 0;
var enEjecucion = false;
var contadorVueltas = 0;
var contadorPomodoros = 0;

//unificamos las funciones "iniciar y pausar" (anteriormente eran dos diferentes)
function iniciarPausarCronometro() {
  if (!enEjecucion) {
    cronometroInterval = setInterval(actualizarCronometro, 1000); //se inicia el intervalo cronometroInterval que llama a la función actualizarCronometro
    enEjecucion = true;
    document.getElementById('start-btn').textContent = '𝗅𝗅'; //el start-btn por defecto es de "iniciar", das click y ahora el text content es "pausar".
  } else {
    clearInterval(cronometroInterval);
    enEjecucion = false;
    document.getElementById('start-btn').textContent = '▷';
  }
}

function reiniciarCronometro() {
  clearInterval(cronometroInterval);
  segundos = 0;
  minutos = 0;
  horas = 0;
  enEjecucion = false;
  document.getElementById('start-btn').textContent = '▷';
  contadorPomodoros = 0; // Reinicia el contador de pomodoros
  document.getElementById('contador-pomodoros').textContent = 'Vueltas: ' + contadorPomodoros;
  document.body.classList.remove('fondo-descanso'); //si el fondo es de descanso, cuando reinicias vuelve al original
  actualizarDisplay();
  // actualizarDisplay();  
}

function actualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 1) { // Tiempo de estudio (25')
      document.body.classList.add('fondo-descanso'); // Clase para cambiar el fondo
      alert('¡Descanso! Toma un descanso de 5 minutos.'); // Mensaje de descanso
    } else if (minutos === 2) { // Tiempo de descanso (5')
      document.body.classList.remove('fondo-descanso'); // Volver al fondo original
      alert('¡Estudio! Es hora de volver a estudiar.'); // Mensaje de estudio
      minutos = 0; // Reinicia los minutos para empezar otro ciclo de estudio
    
      contadorVueltas++;
      if (contadorVueltas % 2 === 0) { // Verifica si se han completado dos ciclos de descanso
        contadorVueltas = 0; // Reinicia el contador de vueltas
        contadorPomodoros++;
        document.getElementById('contador-pomodoros').textContent = 'Vueltas: ' + contadorPomodoros;
      }
    }
  }
  if(minutos==3){
    //le cambio el color al body
  }
  actualizarDisplay();
}

function actualizarDisplay() {
  var display = document.getElementById('cronometro-display');
  display.textContent = formatTime(horas) + ':' + formatTime(minutos) + ':' + formatTime(segundos);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// IMPLEMENTACIÓN DE CLASE ToDoList

// Obtener referencias a los elementos del DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const toDoListContainer = document.getElementById('toDoList');

// Crear una instancia de ToDoList
const toDoList = new ToDoList();

// Función para agregar una tarea
function addTask() {
    const taskText = taskInput.value;
    // Verificar si el input no está vacío antes de agregar la tarea
    if (taskText.trim() !== '') {
        // Agregar la tarea a la lista
        toDoList.addTask(taskText);
        // Crear un nuevo elemento <p> para mostrar la tarea
        const newTaskElement = document.createElement('p');
        newTaskElement.textContent = taskText;

        // Agregar margen izquierdo al elemento <p>
        newTaskElement.style.marginLeft = '20px';

        // Crear botones para marcar como completada y eliminar la tarea
        const completeButton = document.createElement('button');
        completeButton.textContent = '✓';
        completeButton.classList.add('btn', 'btn-success', 'me-2');
        completeButton.addEventListener('click', function() {
            // Marcar la tarea como completada
            toDoList.completeTask(toDoList.tasks.length - 1);
            // Tachar el texto de la tarea
            newTaskElement.style.textDecoration = 'line-through';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✘';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', function() {
            // Eliminar la tarea de la lista
            toDoList.removeTask(toDoList.tasks.length - 1);
            // Eliminar el elemento <p> de la lista
            newTaskElement.remove();
        });

        // Agregar los botones al contenedor de la tarea
        newTaskElement.appendChild(completeButton);
        newTaskElement.appendChild(deleteButton);

        // Agregar el nuevo elemento <p> al contenedor
        toDoListContainer.appendChild(newTaskElement);
        // Limpiar el input después de agregar la tarea
        taskInput.value = '';
    }
}

// Event listener para el evento click del botón
addButton.addEventListener('click', addTask);

// Event listener para el evento keydown en el input
taskInput.addEventListener('keydown', function(event) {
    // Verificar si la tecla presionada es Enter (cuyo código es 13)
    if (event.keyCode === 13) {
        // Llamar a la función addTask
        addTask();
    }
});

