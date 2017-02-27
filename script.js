var timerValue = 60;
var timerBool = true;
function squareNumber(){
  var squared = document.mainform.firstinput.value;
  squared = squared * squared;
  document.getElementById("result").innerHTML = "Result: " + squared;
}

function checkTimer(){
  document.getElementById("timerresult").innerHTML = "Timer: " + timerValue;
  if(timerValue > 0 && timerBool === true){
    timerValue = timerValue - 1;
    document.getElementById("timerbutton").value = "Stop Timer";
    document.getElementById("timerbutton").onclick = stopTimer;
    setTimeout(checkTimer, 1000);
  }else if(timerValue === 0){
    timerBool = false;
     document.getElementById("timerbutton").value = "Reset Timer";
    document.getElementById("timerbutton").onclick = resetTimer;
    setTimeout(checkTimer, 100);
  }
   timerBool = true;
}

function resetTimer(){
  document.getElementById("timerresult").innerHTML = "Timer: " + timerValue;
  document.getElementById("timerbutton").value = "Start Timer";
  document.getElementById("timerbutton").onclick = checkTimer;
  timerValue = 60;
}

function stopTimer(){
  timerBool = false;
  document.getElementById("timerbutton").value = "Start Timer";
  document.getElementById("timerbutton").onclick = restartTimer;
}

function restartTimer(){
  timerBool = true;
  checkTimer();
}
