/*Add your JavaScript here*/

var y2kscore = 0;
var streetscore = 0;
var cleanscore = 0;
var coquettescore = 0;
var softscore = 0;

var AnsweredQuestions = 0;


var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");



q1a1.addEventListener("click", clean);
q1a2.addEventListener("click", soft);
q1a3.addEventListener("click", y2k);
q1a4.addEventListener("click", street);
q1a5.addEventListener("click", coquette);
q1a1.addEventListener("click", BlockAnswers);
q1a2.addEventListener("click", BlockAnswers);
q1a3.addEventListener("click", BlockAnswers);
q1a4.addEventListener("click", BlockAnswers);
q1a5.addEventListener("click", BlockAnswers);

q2a1.addEventListener("click", coquette);
q2a2.addEventListener("click", street);
q2a3.addEventListener("click", soft);
q2a3.addEventListener("click", clean);
q2a4.addEventListener("click", y2k);
q2a1.addEventListener("click", BlockAnswers);
q2a2.addEventListener("click", BlockAnswers);
q2a3.addEventListener("click", BlockAnswers);
q2a4.addEventListener("click", BlockAnswers);
q2a3.addEventListener("click", fix);

q3a1.addEventListener("click", street);
q3a2.addEventListener("click", y2k);
q3a3.addEventListener("click", clean);
q3a4.addEventListener("click", soft);
q3a5.addEventListener("click", coquette);
q3a1.addEventListener("click", BlockAnswers);
q3a2.addEventListener("click", BlockAnswers);
q3a3.addEventListener("click", BlockAnswers);
q3a4.addEventListener("click", BlockAnswers);
q3a5.addEventListener("click", BlockAnswers);

q4a1.addEventListener("click", street);
q4a2.addEventListener("click", coquette);
q4a3.addEventListener("click", soft);
q4a4.addEventListener("click", y2k);
q4a5.addEventListener("click", clean);
q4a1.addEventListener("click", BlockAnswers);
q4a2.addEventListener("click", BlockAnswers);
q4a3.addEventListener("click", BlockAnswers);
q4a4.addEventListener("click", BlockAnswers);
q4a5.addEventListener("click", BlockAnswers);

q5a1.addEventListener("click", y2k);
q5a2.addEventListener("click", soft);
q5a3.addEventListener("click", street);
q5a4.addEventListener("click", coquette);
q5a5.addEventListener("click", clean);
q5a1.addEventListener("click", BlockAnswers);
q5a2.addEventListener("click", BlockAnswers);
q5a3.addEventListener("click", BlockAnswers);
q5a4.addEventListener("click", BlockAnswers);
q5a5.addEventListener("click", BlockAnswers);


restart.addEventListener("click", RestartQuiz);


function RestartQuiz(){
  AnsweredQuestions = 0;
  streetscore = 0;
  y2kscore = 0;
  cleanscore = 0;
  softscore = 0;
  coquettescore = 0;
  result.innerHTML = "Your style is...";
  q1a1.style.color = 'black';
  q1a2.style.color = 'black';
  q1a3.style.color = 'black';
  q1a4.style.color = 'black';
  q1a5.style.color = 'black';
  q2a1.style.color = 'black';
  q2a2.style.color = 'black';
  q2a3.style.color = 'black';
  q2a4.style.color = 'black';
  q3a1.style.color = 'black';
  q3a2.style.color = 'black';
  q3a3.style.color = 'black';
  q3a4.style.color = 'black';
  q3a5.style.color = 'black';
  q4a1.style.color = 'black';
  q4a2.style.color = 'black';
  q4a3.style.color = 'black';
  q4a4.style.color = 'black';
  q4a5.style.color = 'black';
  q5a1.style.color = 'black';
  q5a2.style.color = 'black';
  q5a3.style.color = 'black';
  q5a4.style.color = 'black';
  q5a5.style.color = 'black';
}

function BlockAnswers(){
  if (AnsweredQuestions == 1) {
    q1a1.style.color = 'LightBlue';
    q1a2.style.color = 'LightBlue';
    q1a3.style.color = 'lightblue';
    q1a4.style.color = 'lightblue';
    q1a5.style.color = 'lightblue';
  } else if (AnsweredQuestions == 2) {
    q2a1.style.color = 'lightblue';
    q2a2.style.color = 'lightblue';
    q2a3.style.color = 'lightblue';
    q2a4.style.color = 'lightblue';
  } else if (AnsweredQuestions == 3) {
    q3a1.style.color = 'lightblue';
    q3a2.style.color = 'lightblue';
    q3a3.style.color = 'lightblue';
    q3a4.style.color = 'lightblue';
    q3a5.style.color = 'lightblue';
  } else if (AnsweredQuestions == 4) {
    q4a1.style.color = 'lightblue';
    q4a2.style.color = 'lightblue';
    q4a3.style.color = 'lightblue';
    q4a4.style.color = 'lightblue';
    q4a5.style.color = 'lightblue';
  } else if (AnsweredQuestions == 5) {
    q5a1.style.color = 'lightblue';
    q5a2.style.color = 'lightblue';
    q5a3.style.color = 'lightblue';
    q5a4.style.color = 'lightblue';
    q5a5.style.color = 'lightblue';
  }
}

function y2k(){
  y2kscore += 1;
  AnsweredQuestions += 1;

  console.log("AnsweredQuestions = " + AnsweredQuestions + " y2kscore = " + y2kscore);

  if (AnsweredQuestions == 5) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function soft(){
  softscore += 1;
  AnsweredQuestions += 1;

  console.log("AnsweredQuestions = " + AnsweredQuestions + " softscore = " + softscore);

  if (AnsweredQuestions == 5) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function street(){
  streetscore += 1;
  AnsweredQuestions += 1;

  console.log("AnsweredQuestions = " + AnsweredQuestions + " streetscore = " + streetscore);

  if (AnsweredQuestions == 5) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function coquette(){
  coquettescore += 1;
  AnsweredQuestions += 1;

  console.log("AnsweredQuestions = " + AnsweredQuestions + " coquettescore = " + coquettescore);

  if (AnsweredQuestions == 5) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function clean(){
  cleanscore += 1;
  AnsweredQuestions += 1;

  console.log("AnsweredQuestions = " + AnsweredQuestions + " cleanscore = " + cleanscore);

  if (AnsweredQuestions == 5) {
    console.log("The quiz is done!")
    updateResult();
  }
}



function fix(){
  AnsweredQuestions = 2;
  BlockAnswers();
  q3a1.style.color = 'black';
  q3a2.style.color = 'black';
  q3a3.style.color = 'black';
  q3a4.style.color = 'black';
  q3a5.style.color = 'black';
}




function updateResult(){
  if (y2kscore > softscore && y2kscore >= streetscore && y2kscore >= coquettescore && y2kscore > cleanscore) {
    result.innerHTML = "Your style is y2k! <br> <img src='assets/y2k1.JPG'><img src='assets/y2k2.JPG'><img src='assets/y2k3.JPG'>";
    console.log("Your style is y2k!");
  } else if (softscore >= y2kscore && softscore > streetscore && softscore >= coquettescore && softscore > cleanscore) {
    result.innerHTML = "Your style is soft! <br> <img src='assets/soft1.JPG'><img src='assets/soft2.JPG'><img src='assets/soft3.JPG'>";
    console.log("Your style is soft!")
  } else if (streetscore > y2kscore && streetscore >= softscore && streetscore > coquettescore && streetscore >= cleanscore) {
    result.innerHTML = "Your style is streetwear! <br> <img src='assets/street1.JPG'><img src='assets/street2.JPG'><img src='assets/street3.JPG'>";
    console.log("Your style is street!")
  } else if (coquettescore > y2kscore && coquettescore > softscore && coquettescore >= streetscore && coquettescore >= cleanscore) {
    result.innerHTML = "Your style is coquette! <br> <img src='assets/coquette1.JPG'><img src='assets/coquette2.JPG'><img src='assets/coquette3.JPG'>";
    console.log("Your style is coquette!")
  } else if (cleanscore >= y2kscore && cleanscore >= softscore && cleanscore > streetscore && cleanscore > coquettescore) {
    result.innerHTML = "Your style is clean! <br> <img src='assets/clean1.JPG'><img src='assets/clean2.JPG'><img src='assets/clean3.JPG'>";
    console.log("Your style is clean!")
  } else if (cleanscore == y2kscore && cleanscore == softscore && cleanscore == streetscore && cleanscore == coquettescore) {
    result.innerHTML = "Your style is clean! <br> <img src='assets/clean1.JPG'><img src='assets/clean2.JPG'><img src='assets/clean3.JPG'>";
    console.log("Your style is clean!")
  }
}
