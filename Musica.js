var audio = document.getElementById("audio");
var pause = document.getElementById("pause");

pause.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    pause.classList.remove("fa-play");
    pause.classList.add("fa-pause");
  } else {
    audio.pause();
    pause.classList.remove("fa-pause");
    pause.classList.add("fa-play");
  }
});