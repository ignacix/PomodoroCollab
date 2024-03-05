// CRONOMETRO
var cronometroInterval;
var segundos = 0;
var minutos = 0;
var horas = 0;
var enEjecucion = false;

//unificamos las funciones "iniciar y pausar" (anteriormente eran dos diferentes)
function iniciarPausarCronometro() {
  if (!enEjecucion) {
    cronometroInterval = setInterval(actualizarCronometro, 1000); //se inicia el intervalo cronometroInterval que llama a la función actualizarCronometro
    enEjecucion = true;
    document.getElementById('start-btn').textContent = 'Pausar'; //el start-btn por defecto es de "iniciar", das click y ahora el text content es "pausar".
  } else {
    clearInterval(cronometroInterval);
    enEjecucion = false;
    document.getElementById('start-btn').textContent = 'Iniciar';
  }
}

function reiniciarCronometro() {
  clearInterval(cronometroInterval);
  segundos = 0;
  minutos = 0;
  horas = 0;
  enEjecucion = false;
  document.getElementById('start-btn').textContent = 'Iniciar';
  document.body.classList.remove('fondo-descanso'); //si el fondo es de descanso, cuando reinicias vuelve al original
  actualizarDisplay();
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
    }
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

// Crear una instancia de ToDoList
const myToDoList = new ToDoList();

// Obtener elementos del DOM
const addButton = document.getElementById('addButton');
const inputTask = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Función para agregar una tarea al hacer clic en el botón
function addTaskOnClick() {
    // Obtener el valor del input
    const newTask = inputTask.value;
    // Agregar la tarea a la lista
    myToDoList.addTask(newTask);
    // Actualizar el contenido del párrafo con las tareas
    taskList.textContent = myToDoList.getAllTasks().map(task => task.task).join(', ');
    // Limpiar el input
    inputTask.value = '';
}

// Asignar el evento onclick al botón
addButton.onclick = addTaskOnClick;
