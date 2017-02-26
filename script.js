var timerValue = 60;
var timerBool = false;
function squareNumber(){
  var squared = document.mainform.firstinput.value;
  squared = squared * squared;
  document.getElementById("result").innerHTML = "Result: " + squared;
}

function switchTimerBool(){
  if(timerBool === true){
     timerBool = false;
  }else if(timerBool === false){
     timerBool = true;
  }
}

function checkTimer(){
  document.mainform.getElementById("timerresult").innerHTML = "Timer: " + timerValue + " Seconds";
  if(timerValue > 0){
     timerValue = timerValue - 1;
    setTimeout(CheckTimer, 1000);
  }
}
