// Task 01

// 1) Design the Quiz Questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "London"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  // Add more questions...
];

// 2) Display questions
for (let i = 0; i < quizQuestions.length; i++) {
  const currentQuestion = quizQuestions[i];
  console.log(`Question ${i + 1}: ${currentQuestion.question}`);
  for (let j = 0; j < currentQuestion.options.length; j++) {
    console.log(`${j + 1}. ${currentQuestion.options[j]}`);
  }
  // Prompt the user for their answer and compare with the correct answer
  const userAnswer = parseInt(prompt("Enter your answer (1-4):"));
  if (userAnswer === currentQuestion.correctAnswer + 1) {
    console.log("Correct answer!");
  } else {
    console.log("Wrong answer!");
  }
  console.log(""); // Empty line for readability
}

// 4) Calculate and display results
let score = 0;
for (let i = 0; i < quizQuestions.length; i++) {
  const currentQuestion = quizQuestions[i];
  const userAnswer = parseInt(prompt(`Question ${i + 1}: ${currentQuestion.question}\nEnter your answer (1-4):`));
  if (userAnswer === currentQuestion.correctAnswer + 1) {
    score++;
  }
}

console.log(`Your score: ${score} out of ${quizQuestions.length}`);


// // Task 02


// var userNumber =+ prompt("Enter the Number");
// var table = "";
// console.log("Table of " + userNumber + ":");
// for (var i = 1; i <= 10; i++) { 
//   table = userNumber * i;
//   console.log(userNumber + " x " + i + " = " + table);
// } console.log('----------------------');


// // // Task 03

// var userNumber2 =+ prompt ("Enter the Number")
// var table2 = "";

// for (var i = 2; i <= userNumber2; i++) {
//   console.log("Table of " + i + ":");
//   for (var j = 1; j <= 10; j++) {
//     var table2 = i * j;
//     console.log(i + " x " + j + " = " + table2);
//   }
//   console.log('----------------------');
// }





