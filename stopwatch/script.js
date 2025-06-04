window.addEventListener('DOMContentLoaded', () => {
  let timerDisplay = document.querySelector('.timerdisplay');
  let stopBtn = document.getElementById('stopBtn');
  let startBtn = document.getElementById('startBtn');
  let resetBtn = document.getElementById('resetBtn');

  let msec = 0;
  let secs = 0;
  let mins = 0;

  let timerId = null;

  startBtn.addEventListener('click', function() {
    if (timerId !== null) {
      clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
  });

  stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
  });

  resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = '00:00:00';
  });

  function startTimer() {
    msec++;
    if (msec > 99) {
      msec = 0;
      secs++;
      if (secs > 59) {
        secs = 0;
        mins++;
      }
    }
    timerDisplay.innerHTML = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}:${msec < 10 ? '0' + msec : msec}`;
  }
});