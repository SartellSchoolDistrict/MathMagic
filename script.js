var timerValue = 60;
var timerBool = true;
var doneQuestions = [,,,,,,,,,];
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
   document.getElementById("ErrorText").innerHTML += "CHECK NUM" + toCheck.toString(); 
  if(checkArray()){
    document.getElementById("ErrorText").innerHTML += "Display True";
    displayQuestions();
  }else{
    document.getElementById("ErrorText").innerHTML += "Display False ";
    document.getElementById("Question").innerHTML = toCheck.toString();
    document.getElementById("ErrorText").innerHTML += "YEP";
    doneQuestion[numUsed] = toCheck;
    document.getElementById("ErrorText").innerHTML += "NOPE YOUR SCREWED";
    numUsed += 1;
    document.getElementById("ErrorText").innerHTML += "Num Used = " + numUsed + "<br />";
  }
  
}

function checkArray(){
  document.getElementById("ErrorText").innerHTML += "Check Called ";
  for(i = 0; i < doneQuestions.length; i++){
    if(doneQuestions[i] === toCheck){
      document.getElementById("ErrorText").innerHTML += "Check True ";
      return true;
      break;
    }else{
      document.getElementById("ErrorText").innerHTML += "CONTINUE";
       continue;
    }
    document.getElementById("ErrorText").innerHTML += "Check False";
    return false;
  }
}
 
