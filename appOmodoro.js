// CRONOMETRO
var cronometroInterval;
var segundos = 0;
var minutos = 0;
var horas = 0;
var enEjecucion = false;
//eliminé la var tiempoInicial 
//eliminé la var pausado

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
  actualizarDisplay();
}

function actualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
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