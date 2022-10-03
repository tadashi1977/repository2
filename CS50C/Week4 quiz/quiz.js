 let score = 0;

const questions = [
  "What is the capital of California?",
  "How many states border California?",
  "Which state is west of California?",
  "What is the tallest mountain in California?",
  "What year did California become a state?",
];

const answers = [
  "Sacramento",
  "3",
  "Hawaii",
  "Mt.Whitney",
  "1850",
];

let turn = 0;

document.getElementById("submit").addEventListener("click", checkAnswer);

showQuestion();

function checkAnswer() {
  if (document.getElementById("answer").value === answers[turn]) {
    document.getElementById("message").innerHTML = "Correct!";
    score = score + 1;
    if (turn < 4) {
      nextQuestion();
    } else {
      endGame();
    }
  } else {
    document.getElementById("message").innerHTML = "Wrong!";
  }
}

function showQuestion() {
  document.getElementById("question").innerHTML = questions[turn];
  document.getElementById("counter").innerHTML = turn + 1;
  document.getElementById("score").innerHTML = score;
}

function nextQuestion() {
  turn = turn + 1;
  if ( turn < questions.length) {
    showQuestion();
  }
}

function endGame() {
  document.getElementById("question").innerHTML = "Great Job!";
  document.getElementById("message").innerHTML = "Thanks for playing!"
  document.getElementById("score").innerHTML = score;
}