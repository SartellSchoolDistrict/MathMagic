// VARIBLES

// Display Bools
var questionDisplayBool = false;
var navigation2DisplayBool = true;
var endScreenDisplayBool = false;
var wrongAnswerDisplayBool = false;
var settingsDisplayBool = false;
var savedSign = "?";
// Number of rounds
var rounds = 0;
var maxRounds = 20;
// Answer Numbers
var savedNumber = 0;
var correctAnswer = 0;
var answer = 0;
var numberCorrect = 0;
var numberWrong = 0;
var wrongAnswerSelection = 0;
// Answer Arrays
var doneAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var doneAnswers2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongAnswers2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wrongNumbers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var studentAnswered = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// Timer Varibles
var timerCount = 60;
var savedTimerCount = 60;
var timing = false;
var randNumTotal = 10;
var randNum = 0;

//
//
//

//DISPLAY TOGGLES

// Toggles Problem Display
function toggleProblemDisplay(){
  if(questionDisplayBool){
    questionDisplayBool = false;
    document.getElementById("problem").style.display = "none";
  }else if(!questionDisplayBool){
    questionDisplayBool = true;
    document.getElementById("problem").style.display = "block";
  }
}

// Toggle Navigation Display
function toggleNavDisplay(){
  if(navigation2DisplayBool){
    navigation2DisplayBool = false;
    document.getElementById("navigation2").style.display = "none";
  }else if(!navigation2DisplayBool){
    navigation2DisplayBool = true;
    document.getElementById("navigation2").style.display = "block";
  }
}

// Toggle End Screen Display
function endScreenDisplay(){
  if(endScreenDisplayBool){
    endScreenDisplayBool = false;
    document.getElementById("endScreen").style.display = "none";
  }else if(!endScreenDisplayBool){
    endScreenDisplayBool = true;
    document.getElementById("endScreen").style.display = "block";
    console.log("NW: " + numberWrong.toString());
    if(numberWrong == 0){
      document.getElementById("showWrongAnswersButton").style.backgroundColor = "#35424a";
      document.getElementById("showWrongAnswersButton").value = "Great Job!";
      document.getElementById("showWrongAnswersButton").disabled = true;
    }else{
      document.getElementById("showWrongAnswersButton").style.backgroundColor = "#148fce";
      document.getElementById("showWrongAnswersButton").value = "Show Wrong Answers";
      document.getElementById("showWrongAnswersButton").disabled = false;
    } 
  }
}

// Toggle Wrong Answers Display
function toggleWrongAnswerDisplay(){
  if(wrongAnswerDisplayBool){
    wrongAnswerDisplayBool = false;
    document.getElementById("wrongAnswersScreen").style.display = "none";
  }else if(!wrongAnswerDisplayBool){
    wrongAnswerDisplayBool = true;
    document.getElementById("wrongAnswersScreen").style.display = "block";
  }
}

// Toggle Settings Display
function toggleSettingsDisplay(){
  if(settingsDisplayBool){
    settingsDisplayBool = false;
    document.getElementById("settingsScreen").style.display = "none";
  }else if(!settingsDisplayBool){
    settingsDisplayBool = true;
    document.getElementById("settingsScreen").style.display = "block";
  }
}

//
//
//

// NAVIGATION SYNTAX

// Shows what you have selected
// Update all text in navigation
function updateSelectionText(){
  if(maxRounds == 20){
    console.log("20");
    document.getElementById("selectionRounds").innerHTML = "20 Questions";
    document.getElementById("selectionTime").innerHTML = "1 Minute";
    document.getElementById('201').className = "settingsHighlight";
    document.getElementById('1003').className = "settingsStopHighlight";
  }else{
    console.log("not20");
    document.getElementById("selectionRounds").innerHTML = "100 Questions";
    document.getElementById("selectionTime").innerHTML = "3 Minutes";
    document.getElementById('1003').className = "settingsHighlight";
    document.getElementById('201').className = "settingsStopHighlight";
  }

  if(randNumTotal == 10){
    console.log("10");
    document.getElementById("selectionRandom").innerHTML = "1-10";
    document.getElementById('1-10').className = "settingsHighlight";
    document.getElementById('1-12').className = "settingsStopHighlight";
  }else{
    console.log("not10");
    document.getElementById("selectionRandom").innerHTML = "1-12";
    document.getElementById('1-12').className = "settingsHighlight";
    document.getElementById('1-10').className = "settingsStopHighlight";
  }
}

//
//
//

// QUESTION DISPLAY

function displayQuestion(first, sign, second){
  //console.log(second.toString());
  document.getElementById('questionNumber').innerHTML = (rounds + 1).toString();
  document.getElementById('firstNumber').innerHTML = first.toString();
  document.getElementById('sign').innerHTML = sign.toString();
  document.getElementById('secondNumber').innerHTML = second.toString();
  console.log("End");
}

//
//
//

// START OF MULTIPLICATION SYNTAX

function startMul(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "X";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkMul()");
  document.getElementById('problemInput').focus();
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  multiplication(savedNumber);
}

// MIXED MULTIPLICATION

function startMulMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "X";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkMulMixed()");
  document.getElementById('problemInput').focus();
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  multiplicationMixed(savedNumber);
}

// END OF MULTIPLICATION 

//
//
//

// START OF DIVISION SYNTAX

function startDiv(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "&#247";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkDiv()");
  document.getElementById('problemInput').focus();
  division(number);
}

function division(number){
  savedNumber = number;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    randNum = randNum * number;
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  division(savedNumber);
}

// DIVISION MIXED

function startDivMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "&#247";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkDivMixed()");
  document.getElementById('problemInput').focus();
  divisionMixed(number);
}

function divisionMixed(number){
  savedNumber = Math.floor(Math.random() * randNumTotal)+1;
  randNum = 0;
  if(rounds < maxRounds){
    randNum = Math.floor(Math.random() * randNumTotal)+1;
    randNum = randNum * savedNumber;
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  divisionMixed(savedNumber);
}

// END OF DIVISION

//
//
//

// START OF ADDITION SYNTAX

function startAdd(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "+";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkAdd()");
  document.getElementById('problemInput').focus();
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  adding(savedNumber);
}

// MIXED ADDITION

function startAddMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "+";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkAddMixed()");
  document.getElementById('problemInput').focus();
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  addingMixed(savedNumber);
}

// END OF ADDITION

//
//
//

// START OF SUBTRACTION SYNTAX

function startSub(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "-";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkSub()");
  document.getElementById('problemInput').focus();
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  subtraction(savedNumber);
}

function startSubMixed(number){
  toggleProblemDisplay();
  toggleNavDisplay();
  timing = true;
  updateTimer();
  savedSign = "-";
  document.getElementById('submitProblemButton').setAttribute("onclick", "checkSubMixed()");
  document.getElementById('problemInput').focus();
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
    studentAnswered[numberWrong - 1] = answer;
  }
  document.getElementById('problemInput').value = "";
  document.getElementById('problemInput').focus();
  subtractionMixed(savedNumber);
}

// END OF SUNTRACTION

//
//
//

// ANSWER CHECKING

// Checks if current answer input was correct or incorrect
// Adds to numberCorrect or numberWrong
function checkAnswer(){
  if(answer == correctAnswer){
    numberCorrect++;
    return true;
  }else{
    numberWrong++;
    return false;
  }
}

// Checks if each answer from the toCheck array is correct or not
// Returns true or false for each answer
function checkDoneAnswer(toCheck){
  for(var i = 0; i < 20; i++){
    if(toCheck == doneAnswers[i]){
      return false;
    }
  }
  return true;
}

//
//
//

// END SCREEN DISPLAY
// Function is called from updateTimer() when your time runs out
function displayEnd(){
  console.log(numberCorrect);
  console.log(maxRounds);
  document.getElementById('correctNum').innerHTML = numberCorrect.toString();
  document.getElementById('wrongNum').innerHTML = numberWrong.toString();
  document.getElementById('percentHere').innerHTML = Math.ceil((numberCorrect/maxRounds)*100).toString();
  endScreenDisplay();
  toggleProblemDisplay();
}

// Displays wrong answers
// Called from next buttons and siaplay wrong answer button
// on the end screen
function DisplayWrong(){
  document.getElementById("wrongSign").innerHTML = savedSign;

  document.getElementById("wrongAnswerNumberHere").innerHTML = wrongNumbers[wrongAnswerSelection].toString();
  if(savedSign == "+"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (studentAnswered[wrongAnswerSelection].toString()) + " / " +((wrongAnswers[wrongAnswerSelection] + wrongAnswers2[wrongAnswerSelection]).toString());
  }else if(savedSign == "-"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (studentAnswered[wrongAnswerSelection].toString()) + " / " +((wrongAnswers[wrongAnswerSelection] - wrongAnswers2[wrongAnswerSelection]).toString());
  }else if(savedSign == "&#247"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (studentAnswered[wrongAnswerSelection].toString()) + " / " +((wrongAnswers[wrongAnswerSelection] / wrongAnswers2[wrongAnswerSelection]).toString());
  }else if(savedSign == "X"){
    document.getElementById("wrongSecondNumber").innerHTML = wrongAnswers2[wrongAnswerSelection].toString();
    document.getElementById("wrongFirstNumber").innerHTML = wrongAnswers[wrongAnswerSelection].toString();
    document.getElementById('wrongCorrectAnswer').innerHTML = (studentAnswered[wrongAnswerSelection].toString()) + " / " +((wrongAnswers[wrongAnswerSelection] * wrongAnswers2[wrongAnswerSelection]).toString());
  }else{
    document.getElementById('wrongCorrectAnswer').innerHTML = "Calculation Error";
  }
}

//
//
//

// RESET VARIBLES AND OTHER SYNTAX

// Resets the syntax
//I don't know why there is two
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

//
//
//

// TIMER SYNTAX

// Called when game starts
function updateTimer(){
  if (timerCount < 1){
    // If timer isn't 0
    numberWrong = numberWrong + ((maxRounds + 1) - rounds);
    displayEnd();
  }else{
    if(timing){
      // Start timeout() and continue runing function 
      document.getElementById('timer').innerHTML = timerCount;
      timerCount--;
      setTimeout(updateTimer, 1000);
    }
  }
}

//
//
//
