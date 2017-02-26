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

function CheckTimer(){
  document.mainform.timerresult.innerHTML = "Timer: " + timerValue + " Seconds";
  if(timerValue === 0){
     document.getElementById("timerbutton").value = "Reset Timer";
  }else if(timerValue === 60){
     document.mainform.timerresult.innerHTML = "Timer: " + timerValue + " Seconds";
  }else if(timerValue > 0){
   document.getElementById("timerbutton").value = "Stop Timer";
   timerValue -= 1;
   setTimeout(CheckTimer(), 1000);
  }
}
