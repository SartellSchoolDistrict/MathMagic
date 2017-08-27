var questionDisplayBool = false;
var navigation2DisplayBool = true;
var endScreenDisplayBool = false;
var wrongAnswerDisplayBool = false;
var settingsDisplayBool = false;
var rounds = 0;
var maxRounds = 20;
var savedNumber = 0;
var correctAnswer = 0;
var answer = 0;
var numberCorrect = 0;
var numberWrong = 0;
var doneAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var doneAnswers2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongAnswers2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongNumbers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongAnswerSelection = 0;
var timerCount = 60;
var savedTimerCount = 60;
var timing = false;
var randNumTotal = 10;
var randNum = 0;
var savedSign = "?";

function test(){

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

function toggleWrongAnswerDisplay(){
  if(wrongAnswerDisplayBool){
    wrongAnswerDisplayBool = false;
    document.getElementById("wrongAnswersScreen").style.display = "none";
  }else if(!wrongAnswerDisplayBool){
    wrongAnswerDisplayBool = true;
    document.getElementById("wrongAnswersScreen").style.display = "block";
  }
}

function toggleSettingsDisplay(){
  if(settingsDisplayBool){
    settingsDisplayBool = false;
    document.getElementById("settingsScreen").style.display = "none";
  }else if(!settingsDisplayBool){
    settingsDisplayBool = true;
    document.getElementById("settingsScreen").style.display = "block";
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
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "X";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkMul()");
  multiplication(number);
}

function multiplication(number){
  savedNumber = number;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      multiplication(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "X", number);
      correctAnswer = randNum * number;
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
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  multiplication(savedNumber);
}

function startMulMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "X";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkMulMixed()");
  multiplicationMixed(number);
}

function multiplicationMixed(number){
  savedNumber = Math.floor(Math.random() * randNumTotal)+1;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      multiplicationMixed(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "X", savedNumber);
      correctAnswer = randNum * savedNumber;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkMulMixed(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  multiplicationMixed(savedNumber);
}













function startDiv(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "&#247";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkDiv()");
  division(number);
}

function division(number){
  savedNumber = number;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      division(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "&#247", number);
      correctAnswer = randNum / number;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkDiv(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  division(savedNumber);
}

function startDivMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "&#247";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkDivMixed()");
  divisionMixed(number);
}

function divisionMixed(number){
  savedNumber = Math.floor(Math.random() * randNumTotal)+1;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      divisionMixed(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "&#247", savedNumber);
      correctAnswer = randNum / savedNumber;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkDivMixed(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  divisionMixed(savedNumber);
}

















function startAdd(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "+";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkAdd()");
  adding(number);
}

function adding(number){
  savedNumber = number;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      adding(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "+", number);
      correctAnswer = randNum + number;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkAdd(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  adding(savedNumber);
}

function startAddMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "+";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkAddMixed()");
  addingMixed(number);
}

function addingMixed(number){
  savedNumber = Math.floor(Math.random() * randNumTotal)+1;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      addingMixed(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "+", savedNumber);
      correctAnswer = randNum + savedNumber;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkAddMixed(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  addingMixed(savedNumber);
}






















function startSub(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "-";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkSub()");
  subtraction(number);
}

function subtraction(number){
  savedNumber = number;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      subtraction(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "-", number);
      correctAnswer = randNum - number;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkSub(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  subtraction(savedNumber);
}

function startSubMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "-";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkSubMixed()");
  subtractionMixed(number);
}

function subtractionMixed(number){
  savedNumber = Math.floor(Math.random() * randNumTotal)+1;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    if(!checkDoneAnswer(randNum) && rounds < randNumTotal){
      subtractionMixed(savedNumber);
    }else{
      doneAnswers[rounds] = randNum;
      displayQuestion(randNum, "-", savedNumber);
      correctAnswer = randNum - savedNumber;
      rounds++;
    }
  }else{
    displayEnd();
    timing = false;
  }
}

function checkSubMixed(){
  answer = document.getElementById('problemInput').value;
  if(checkAnswer()){
    /* Correct */
  }else {
    wrongAnswers[numberWrong - 1] = randNum;
    wrongAnswers2[numberWrong - 1] = savedNumber;
    wrongNumbers[numberWrong - 1] = rounds;
  }
  document.getElementById('problemInput').value = "";
  subtractionMixed(savedNumber);
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
  console.log(numberCorrect);
  console.log(maxRounds);
  document.getElementById('correctNum').innerHTML = numberCorrect.toString();
  document.getElementById('wrongNum').innerHTML = numberWrong.toString();
  document.getElementById('percentHere').innerHTML = Math.ceil((numberCorrect/maxRounds)*100).toString();
  endScreenDisplay();
  toggleProblemDisplay();
}





function reset(){
  endScreenDisplay();
  toggleNavDisplay();
  if(wrongAnswerDisplayBool){
    toggleWrongAnswerDisplay();
  }
  numberCorrect = 0;
  numberWrong = 0;
  rounds = 0;
  timerCount = savedTimerCount;
  wrongAnswerSelection = 0;
  for(var i = 0; i < maxRounds; i++){
    doneAnswers[i] = 0;
  }
  for(var i = 0; i < maxRounds; i++){
    wrongAnswers[i] = NULL;
  }
  for(var i = 0; i < maxRounds; i++){
    wrongNumbers[i] = NULL;
  }
  for(var i = 0; i < maxRounds; i++){
    wrongNumbers2[i] = NULL;
  }
}

function reset2(){
  toggleNavDisplay();
  toggleProblemDisplay();
  timing = false;
  numberCorrect = 0;
  numberWrong = 0;
  rounds = 0;
  timerCount = savedTimerCount;
  wrongAnswerSelection = 0;
  for(var i = 0; i < maxRounds; i++){
    doneAnswers[i] = 0;
  }
  for(var i = 0; i < maxRounds; i++){
    wrongAnswers[i] = NULL;
  }
  for(var i = 0; i < maxRounds; i++){
    wrongNumbers[i] = NULL;
  }
  for(var i = 0; i < maxRounds; i++){
    wrongNumbers2[i] = NULL;
  }
}









function updateTimer(){
  if (timerCount < 1){
    numberWrong = numberWrong + ((maxRounds + 1) - rounds);
    displayEnd();
  }else{
    if(timing){
      document.getElementById('timer').innerHTML = timerCount;
      timerCount--;
      setTimeout(updateTimer, 1000);
    }
  }
}

function updateSelectionText(){
  if(maxRounds == 20){
    document.getElementById("selectionRounds").innerHTML = "20 Questions";
    document.getElementById("selectionTime").innerHTML = "1 Minute";
  }else{
    document.getElementById("selectionRounds").innerHTML = "100 Questions";
    document.getElementById("selectionTime").innerHTML = "3 Minutes";
  }

  if(randNumTotal == 10){
    document.getElementById("selectionRandom").innerHTML = "1-10";
  }else{
    document.getElementById("selectionRandom").innerHTML = "1-12";
  }
}

function DisplayWrong(){
  document.getElementById("wrongSign").innerHTML = savedSign;

  document.getElementById("wrongAnswerNumberHere").innerHTML = wrongNumbers[wrongAnswerSelection].toString();
  if(savedSign == "+"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (wrongAnswers[wrongAnswerSelection] + wrongAnswers2[wrongAnswerSelection]).toString();
  }else if(savedSign == "-"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (wrongAnswers[wrongAnswerSelection] - wrongAnswers2[wrongAnswerSelection]).toString();
  }else if(savedSign == "&#247"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (wrongAnswers[wrongAnswerSelection] / wrongAnswers2[wrongAnswerSelection]).toString();
  }else if(savedSign == "X"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (wrongAnswers[wrongAnswerSelection] * wrongAnswers2[wrongAnswerSelection]).toString();
  }else{
    document.getElementById('wrongCorrectAnswer').innerHTML = "Calculation Error";
  }
}
