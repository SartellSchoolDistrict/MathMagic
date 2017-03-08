var timerValue = 60;
var timerBool = true;
var doneQuestions = [];
doneQuestions[9] = 0;
var toCheck = 0;
var numUsed = 0;

function squareNumber(){//SQUARES A NUMBER FROM THE FIRST INPUT BOX  
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
    document.getElementById("timerbutton").onclick = resetTimer
    setTimeout(checkTimer, 100);
  }else{
   timerBool = true;
  }
}

function resetTimer(){
  timerBool = false;
  document.getElementById("timerresult").innerHTML = "Timer: " + timerValue;
  document.getElementById("timerbutton").value = "Start Timer";
  document.getElementById("timerbutton").onclick = checkTimer;
  timerValue = 60;
  timerBool = true;
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

function getRandomNumber(){
  var x = Math.floor((Math.random() * 10) + 1);
  return x;
}

function startQuestions(){
  document.getElementById("ErrorText").innerHTML += "Start Called ";
  displayQuestions();
}

function displayQuestions(){
    document.getElementById("ErrorText").innerHTML += "Display Called ";
    toCheck = getRandomNumber();
  if(checkArray(toCheck)){
    document.getElementById("ErrorText").innerHTML += "Display True";
    displayQuestions();
  }else{
    document.getElementById("ErrorText").innerHTML += "Display False";
    document.getElementById("Question").innerHTML = numUsed.toString;  //toCheck.toString();
    doneQuestion[numUsed] = toCheck;
    numUsed += 1;
  }
  
}

function checkArray(checkNum){
  document.getElementById("ErrorText").innerHTML += "Check Called ";
  for(i = 0; i < a.length; i++){
    if(doneQuestions[i] === checkNum){
      document.getElementById("ErrorText").innerHTML += "Check True ";
      return true;
      break;
    }else{
       continue;
    }
    document.getElementById("ErrorText").innerHTML += "Check False";
    return false;
  }
}
