let questions = [];
let currentQuestion = 0;
let score = 0;
let subject = "";

function startQuiz(selectedSubject) {
  subject = selectedSubject;
  questions = generateQuestions(subject);
  document.querySelector("button").style.display = "none";
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function generateQuestions(subject) {
  if (subject === "math") {
    return [
      { q: "What is 5 + 3?", a: "8" },
      { q: "What is 10 - 4?", a: "6" },
      { q: "What is 3 x 2?", a: "6" },
      { q: "What is 12 ÷ 4?", a: "3" },
      { q: "What is 7 + 6?", a: "13" },
    ];
  } else if (subject === "english") {
    return [
      { q: "Fill in the blank: The cat ___ on the mat.", a: "sat" },
      { q: "Opposite of 'big'?", a: "small" },
      { q: "Past tense of 'run'?", a: "ran" },
      { q: "What is a synonym of 'happy'?", a: "joyful" },
      { q: "Spell 'education'", a: "education" },
    ];
  }
  return [];
}

function showQuestion() {
  document.getElementById("feedback").textContent = "";
  if (currentQuestion < questions.length) {
    document.getElementById("question").textContent =
      questions[currentQuestion].q;
    document.getElementById("answer").value = "";
  } else {
    endQuiz();
  }
}

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].a.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    document.getElementById("feedback").textContent = `❌ Wrong. Correct: ${correctAnswer}`;
  }

  currentQuestion++;
  setTimeout(showQuestion, 1000);
}

function endQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = `You got ${score} out of ${questions.length} correct.`;
}
