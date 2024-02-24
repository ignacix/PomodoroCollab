// CRONOMETRO
var cronometroInterval;
var tiempoInicial;
var segundos = 0;
var minutos = 0;
var horas = 0;
var pausado = false;
var enEjecución = false;

// function iniciarCronometro() {
//   if (!pausado) {
//     cronometroInterval = setInterval(actualizarCronometro, 1000);
//     pausado = false;
//   }
// }

//Si está andando el cronometro no podes volver a apretar iniciar capo
function iniciarCronometro (){
  
  if (!enEjecución){
    cronometroInterval = setInterval (actualizarCronometro, 1000);
      enEjecución = true;
      pausado = false;
    }
  }

function pausarCronometro() {
  clearInterval(cronometroInterval);
  pausado = true;
  enEjecución = false;   
}

// function pausarCronometro(){
//   clearInterval (cronometroInterval);
//   enEjecución = false;
//   pausado = true;
// }

function reiniciarCronometro() {  
  segundos = 0;
  minutos = 0;
  horas = 0;
  pausado = false;  
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


document.getElementById('start-btn').addEventListener('click', iniciarCronometro);
document.getElementById('pause-btn').addEventListener('click', pausarCronometro);
document.getElementById('reset-btn').addEventListener('click', reiniciarCronometro);