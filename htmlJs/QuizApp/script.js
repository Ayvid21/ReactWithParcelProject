const questionBank = [
    {
        question:
            "What will be the output of the following code snippet -> print(typeof(NaN));",
        answer: "Number",
        options: {
            option1: "Object",
            option2: "Number",
            option3: "String",
            option4: "None",
        },
    },
    {
        question:
            "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answer: "Object",
        options: {
            option1: "Boolean",
            option2: "Undefined",
            option3: "Object",
            option4: "Integer",
        },
    },
    {
        question:
            "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer: "Both the datatype and the result of the expression are compared.",
        options: {
            option1:
                "Both the datatype and the result of the expression are compared.",
            option2: "Only the datatype of the expression is compared.",
            option3: "Only the value of the expression is compared.",
            option4: "None.",
        },
    },
    {
        question:
            "Which function is used to serialize an object into a JSON string in Javascript?",
        answer: "stringify()",
        options: {
            option1: "stringify()",
            option2: "parse()",
            option3: "convert()",
            option4: "None",
        },
    },
    {
        question: "Which object in Javascript does not have a prototype?",
        answer: "Base Object",
        options: {
            option1: "All objects have a prototype",
            option2: "None of the objects have a prototype",
            option3: "Base Object",
            option4: "None",
        },
    },
    {
        question: "Which of the following are closures in Javascript?",
        answer: "All of the above",
        options: {
            option1: "Variable",
            option2: "Function",
            option3: "Objects",
            option4: "All of the above",
        },
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        answer: "All of the above",
        options: {
            option1: "Date",
            option2: "FileUpload",
            option3: "Function",
            option4: "All of the above",
        },
    },
    {
        question: "Which of the following is not a Javascript framework?",
        answer: "Cassandra",
        options: {
            option1: "Vue",
            option2: "Node",
            option3: "Cassandra",
            option4: "React",
        },
    },
    {
        question:
            "Which of the following methods can be used to display data in some form using Javascript?",
        answer: "All of the above",
        options: {
            option1: "document.write()",
            option2: "console.log()",
            option3: "window.alert()",
            option4: "All of the above",
        },
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answer: "const",
        options: {
            option1: "let",
            option2: "const",
            option3: "var",
            option4: "constant",
        },
    },
];
const startNow = document.querySelector(".start-now");
const highestScore = document.querySelector(".highest-score");
const openOverlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const questionElement = document.querySelector(".question-section");
const optionsElement = document.querySelector(".options-section");
const timerDisplay = document.querySelector(".timer span");
const allOptions = document.querySelectorAll(".option");
const nextButton = document.querySelector(".next");
const currentQuestionEl = document.querySelector('.current-question');
const totalQuestionsEl = document.querySelector('.total-questions');

// getting random question from the questionBank
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    return questionBank[randomIndex];
}

let score = 0;
let shuffledQuestions = [];

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

//to show the question on the popup screen
// Selecting an option should stop the timer and check if the answer is correct
let currentQuestion;

function showQuestion(questionObj) {
    clearInterval(timerInterval); // Stop any existing timer
    startTimer(); // Start fresh timer

    questionAnswered = false;
    nextButton.disabled = true; // Disable Next until user answers

    currentQuestion = questionObj;
    questionElement.textContent = questionObj.question;
    optionsElement.innerHTML = ''; // Clear previous options

    // Create and append options
    for (let key in questionObj.options) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.textContent = questionObj.options[key];
        optionsElement.appendChild(option);
    }

    // Query newly created options
    const allOptions = document.querySelectorAll('.option');

    // Add click event to each option
    allOptions.forEach(option => {
        option.addEventListener('click', () => {
            allOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            nextButton.disabled = false; // enable Next once an option is chosen

            if (questionAnswered) return; // Prevent multiple selections

            clearInterval(timerInterval); // Stop timer
            questionAnswered = true;
            nextButton.disabled = false; // Enable Next button

            const selectedAnswer = option.textContent;
            const isCorrect = selectedAnswer === questionObj.answer;

            if (isCorrect) {
                score++;
                option.classList.add("correct");
            } else {
                option.classList.add("incorrect");

                // Show correct answer and message
                allOptions.forEach(opt => {
                    if (opt.textContent === questionObj.answer) {
                        opt.classList.add('correct');

                        const message = document.createElement('div');
                        message.textContent = "This is the correct option.";
                        message.classList.add('correct-msg');
                        message.style.color = 'green';
                        message.style.fontSize = '12px';
                        message.style.marginTop = '10px';
                        opt.appendChild(message);
                    }
                });
            }

            // Disable all options after selection
            allOptions.forEach(opt => {
                opt.style.pointerEvents = "none";
            });

            // Save to question history
            questionHistory[currentIndex] = {
                question: questionObj,
                selectedAnswer: selectedAnswer
            };

            // Enable Next button now that question is answered
            nextButton.disabled = false;
            updateProgress();
        });
    });
}

startNow.addEventListener("click", () => {
    highestScore.classList.remove("show"); // optional hide
    popup.classList.add("open-popup");
    openOverlay.classList.add("show");
    currentIndex = 0;
    shuffledQuestions = shuffleArray([...questionBank]);
    showQuestion(shuffledQuestions[currentIndex]);
    nextButton.style.display = 'block';
    updateProgress();
});

// if you want to close the popup on clicking on the overlay
// openOverlay.addEventListener("click", () => {
//   popup.classList.remove("open-popup");
//   openOverlay.classList.remove("show");
// });

nextButton.addEventListener("click", () => {
    showNextQuestion();
})

//show 2-minute timer when a question shows
function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}: ${secs}`;
}

// timer handling
let timerInterval;

function startTimer() {
    let timeLeft = 120; // 2mins

    timerDisplay.textContent = formatTime(timeLeft);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            goToNextQuestion(); // if the time ends then move to next question
        }
    }, 1000);
}

// Next button functionality 
let currentIndex = 0;
let questionHistory = [];
let totalQuestions = questionBank.length;
let questionAnswered = false;

// Set total questions count at the start
totalQuestionsEl.textContent = totalQuestions;

function restartQuiz() {
    score = 0;
    currentIndex = 0;
    questionHistory = [];
    shuffledQuestions = shuffleArray([...questionBank]);
    popup.classList.add("open-popup");
    openOverlay.classList.add("show");
    nextButton.style.display = 'block';
    showQuestion(shuffledQuestions[currentIndex]);
    updateProgress();
}


function showSummary() {
    questionElement.innerHTML = `🎉 Quiz Completed!<br>Your Score: ${score}/${totalQuestions}`;
    optionsElement.innerHTML = '';

    const summary = document.createElement('div');
    summary.classList.add('summary');

    questionHistory.forEach((entry, i) => {
        const correct = entry.question.answer;
        const selected = entry.selectedAnswer;
        const isCorrect = correct === selected;

        const item = document.createElement('div');
        item.textContent = `Q${i + 1}: ${isCorrect ? '✅' : '❌'}`;
        item.style.fontSize = "1.2rem";
        item.style.marginBottom = "5px";
        summary.appendChild(item);
    });

    optionsElement.appendChild(summary);

    // Restart Button
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Restart Quiz";
    restartBtn.classList.add('start-now');
    restartBtn.style.fontSize = '1.3rem';

    restartBtn.addEventListener("click", restartQuiz);

    // End Button
    const endBtn = document.createElement('button');
    endBtn.textContent = "End Quiz";
    endBtn.classList.add('start-now');
    endBtn.style.backgroundColor = '#e74c3c';
    endBtn.style.fontSize = '1.3rem';

    endBtn.addEventListener("click", () => {
        popup.classList.remove("open-popup");
        openOverlay.classList.remove("show");
    });

    // Button container
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.alignItems = 'center';
    buttonGroup.style.justifyContent = 'space-around';
    buttonGroup.style.gap = '10px';
    buttonGroup.style.marginTop = '20px';

    buttonGroup.appendChild(restartBtn);
    buttonGroup.appendChild(endBtn);

    optionsElement.appendChild(buttonGroup);

    timerDisplay.textContent = '';
    nextButton.style.display = 'none';
}

function showNextQuestion() {
    if (!questionAnswered) {
        alert("Please select an option before continuing.");
        return;
    }

    currentIndex++;

    if (currentIndex < totalQuestions) {
        questionAnswered = false;
        showQuestion(shuffledQuestions[currentIndex]);

    } else {
        showSummary();
    }
}

function updateProgress() {
    currentQuestionEl.textContent = String(currentIndex + 1).padStart(2, '0');
}

