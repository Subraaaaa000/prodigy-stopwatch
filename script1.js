let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

function startTimer() {
  isRunning = true;
  timer = setInterval(updateDisplay, 10);
}

function stopTimer() {

    isRunning = false;
    clearInterval(timer);
  }
  
  function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.textContent = formatTime();
  }
  
  function updateDisplay() {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
    }
    display.textContent = formatTime();
  }
  
  function formatTime() {
    return (
        
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds + ':' +
            (milliseconds < 100 ? '0' : '') + milliseconds
          );
        }
        
        startBtn.addEventListener('click', function() {
          if (!isRunning) {
            startTimer();
            startBtn.textContent = 'Pause';
          } else {
            stopTimer();
            startBtn.textContent = 'Start';
          }
        });
        
        stopBtn.addEventListener('click', function() {
          stopTimer();
          startBtn.textContent = 'Start';
        });
        
        resetBtn.addEventListener('click', resetTimer);