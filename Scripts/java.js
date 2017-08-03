var questionDisplayBool = false;
var navigation2DisplayBool = true;
var endScreenDisplayBool = false;
var rounds = 0;
var savedNumber = 0;
var correctAnswer = 0;
var answer = 0;
var numberCorrect = 0;
var numberWrong = 0;
var doneAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var timerCount = 60;
var timing = false;

function test(){
  document.getElementById("test").innerHTML = Math.floor(Math.random()*10);
}

function toggleProblemDisplay(){
  if(questionDisplayBool){
    questionDisplayBool = false;
    document.getElementById("problem").style.display = "none";
  }else if(!questionDisplayBool){
    questionDisplayBool = true;
    document.getElementById("problem").style.display = "block";
  }
}

function toggleNavDisplay(){
  if(navigation2DisplayBool){
    navigation2DisplayBool = false;
    document.getElementById("navigation2").style.display = "none";
  }else if(!navigation2DisplayBool){
    navigation2DisplayBool = true;
    document.getElementById("navigation2").style.display = "block";
  }
}

function endScreenDisplay(){
  if(endScreenDisplayBool){
    endScreenDisplayBool = false;
    document.getElementById("endScreen").style.display = "none";
  }else if(!endScreenDisplayBool){
    endScreenDisplayBool = true;
    document.getElementById("endScreen").style.display = "block";
  }
}

function displayQuestion(first, sign, second){
  //console.log(second.toString());
  document.getElementById('questionNumber').innerHTML = (rounds + 1).toString();
  document.getElementById('firstNumber').innerHTML = first.toString();
  document.getElementById('sign').innerHTML = sign.toString();
  document.getElementById('secondNumber').innerHTML = second.toString();
  console.log("End");
}

function startMul(number){
  console.log("Start");
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  multiplication(number);
}

function multiplication(number){
  savedNumber = number;
  var randNum = 0;
  if(rounds < 20){
    console.log("MulStart");
    randNum = Math.floor(Math.random() * 10)+1;
    if(!checkDoneAnswer(randNum) && rounds < 10){
      multiplication(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(number, "X", randNum);
      correctAnswer = randNum * number;
      console.log(randNum.toString());
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkMul(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    console.log("Correct");
  }else {
    console.log("Fail");
  }
  document.getElementById('problemInput').value = "";
  multiplication(savedNumber);
}

function checkAnswer(){
  if(answer == correctAnswer){
    numberCorrect++;
    return true;
  }else{
    numberWrong++;
    return false;
  }
}

function checkDoneAnswer(toCheck){
  for(var i = 0; i < 20; i++){
    if(toCheck == doneAnswers[i]){
      return false;
    }
  }
  return true;
}

function displayEnd(){
  document.getElementById('correctNum').innerHTML = numberCorrect.toString();
  document.getElementById('wrongNum').innerHTML = numberWrong.toString();
  endScreenDisplay();
  toggleProblemDisplay();
}

function reset(){
  endScreenDisplay();
  toggleNavDisplay();
  numberCorrect = 0;
  numberWrong = 0;
  rounds = 0;
  timerCount = 60;
  for(var i = 0; i < 21; i++){
    doneAnswers[i] = 0;
  }
}

function reset2(){
  toggleNavDisplay();
  toggleProblemDisplay();
  timing = false;
  numberCorrect = 0;
  numberWrong = 0;
  rounds = 0;
  timerCount = 60;
  for(var i = 0; i < 21; i++){
    doneAnswers[i] = 0;
  }
}

function updateTimer(){
  if (timerCount < 0){
    numberWrong = numberWrong + (21 - rounds);
    displayEnd();
  }else{
    if(timing){
      document.getElementById('timer').innerHTML = timerCount;
      timerCount--;
      setTimeout(updateTimer, 1000);
    }
  }
}
