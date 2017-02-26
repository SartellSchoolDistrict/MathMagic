var timerValue = 60;
var timerBool = false;
function squareNumber(){
  var squared = document.mainform.firstinput.value;
  squared = squared * squared;
  document.getElementById("result").innerHTML = "Result: " + squared;
}

function checkTimer(){
  document.getElementById("timerresult").innerHTML = "Timer: " + timerValue;
  if(timerValue > 0){
     timerValue = timerValue - 1;
    document.getElementById("timerbutton").value = "Stop Timer";
    setTimeout(checkTimer, 1000);
  }else if(timerValue === 0){
     document.getElementById("timerbutton").value = "Reset Timer";
    document.getElementById("timerbutton").onclick = "resetTimer();";
  }
}

function resetTimer(){
  timerValue = 60;
  document.getElementById("timerresult").innerHTML = "Timer: " + timerValue;
  document.getElementById("timerbutton").value = "Start Timer";
  document.getElementById("timerbutton").onclick = "checkTimer();";
}
