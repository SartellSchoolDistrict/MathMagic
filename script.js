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
  document.mainform.timerresult.innerHTML = "Timer: " + "Worked" + " Seconds";
}
