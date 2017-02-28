var timerValue = 60;
var timerBool = true;

/*function  Start(){
  //Called on window open. Use this insted of space above to keep more organized
  var timerValue = 60;
  var timerBool = true;
}*/

/*function Update(){ NOT NEEDED YET
  
  //Runs Update every 10 miliseconds. Use Update to make contantly updating things.
  setInterval(Update(), 10);
}*/ 

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
  timerBool = false;
  document.getElementById("timerresult").innerHTML = "Timer: " + timerValue;
  document.getElementById("timerbutton").value = "Start Timer";
  document.getElementById("timerbutton").onclick = checkTimer;
  timerValue = 60;
  //timerBool = true;
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
