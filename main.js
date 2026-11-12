
// =========================================
// BESELOTE'S BIRTHDAY SURPRISE
// =========================================

// 1. HERO SURPRISE BUTTON
const startButton = document.querySelector("#start-btn");

startButton.addEventListener("click", () => {
    let message = document.querySelector("#surprise-message");

    if (!message) {
        message = document.createElement("div");
        message.id = "surprise-message";

        message.innerHTML = `
            <h2>GOTCHA! 😂🎉</h2>
            <p>
                You thought I forgot your birthday?
                NEVER! You're too unforgettable. 😭❤️
            </p>
            <p>
                Welcome to your special birthday experience,
                Beselote! 🎀
            </p>
        `;

        message.style.marginTop = "30px";
        message.style.padding = "25px";
        message.style.borderRadius = "20px";
        message.style.background = "#fff0f7";
        message.style.lineHeight = "1.8";

        document.querySelector(".hero-content")
            .appendChild(message);
    }

    startButton.textContent = "SURPRISE UNLOCKED! 🎉";
});


// 2. BIRTHDAY QUIZ QUESTIONS
const questions = [
    {
        question: "Who is the birthday queen today? 👑",
        options: [
            "Obviously ME! 😌",
            "Let me ask Google 😂",
            "Nobody, I'm just iconic 😭"
        ],
        feedback: [
            "Correct! Your confidence is already celebrating 😂",
            "Google confirms: IT'S YOU! 🎀",
            "The drama has officially started 😭"
        ]
    },

    {
        question: "What's your official superpower? 🦸‍♀️",
        options: [
            "Making everyone laugh 😂",
            "Being dramatic for no reason 🎭",
            "Stealing everyone's attention 👀"
        ],
        feedback: [
            "Certified happiness generator! ❤️",
            "Drama queen status: UNLOCKED 😂",
            "Main character energy detected! ✨"
        ]
    },

    {
        question: "What deserves to happen on your birthday? 🎂",
        options: [
            "Unlimited cake 🍰",
            "A million birr 💸",
            "A lifetime of happiness ❤️"
        ],
        feedback: [
            "Cake first, responsibilities later 😂",
            "Financial goals are looking ambitious 😭",
            "That's the sweetest answer. You deserve it! ❤️"
        ]
    }
];


// 3. GET QUIZ ELEMENTS
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

let currentQuestion = 0;
let answered = false;
let completed = false;


// 4. DISPLAY QUESTION
function showQuestion() {
    const question = questions[currentQuestion];

    answered = false;

    quizProgress.textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    quizQuestion.textContent = question.question;

    quizFeedback.textContent = "";

    quizNext.hidden = true;
    quizNext.textContent = "Next Question →";

    quizOptions.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "quiz-option";
        button.type = "button";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        quizOptions.appendChild(button);
    });
}


// 5. HANDLE ANSWERS
function selectAnswer(index) {
    if (answered || completed) return;

    answered = true;

    const question = questions[currentQuestion];

    quizFeedback.textContent = question.feedback[index];

    const options = quizOptions.querySelectorAll(".quiz-option");

    options.forEach((button, buttonIndex) => {
        button.disabled = true;

        if (buttonIndex === index) {
            button.style.background = "#ffe0ed";
            button.style.borderColor = "#d94f8b";
        }
    });

    quizNext.hidden = false;

    if (currentQuestion === questions.length - 1) {
        quizNext.textContent = "Reveal My Result 🎉";
    }
}


// 6. NEXT QUESTION AND FINAL RESULT
quizNext.addEventListener("click", () => {
    if (completed) {
        restartQuiz();
        return;
    }

    if (!answered) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showFinalResult();
    }
});


// 7. FINAL RESULT
function showFinalResult() {
    completed = true;

    quizProgress.textContent = "TEST COMPLETED ✅";

    quizQuestion.textContent =
        "100% BIRTHDAY LEGEND! 👑";

    quizOptions.innerHTML = `
        <p>
            Congratulations, Beselote! 😂🎀
        </p>
        <p>
            Your official birthday status:
            TOO SPECIAL TO REPLACE! ❤️
        </p>
    `;

    quizFeedback.textContent =
        "You passed with unlimited birthday energy! 🎉";

    quizNext.hidden = false;
    quizNext.textContent = "Play Again 🔄";
}


// 8. RESTART QUIZ
function restartQuiz() {
    currentQuestion = 0;
    answered = false;
    completed = false;

    showQuestion();
}


// 9. START QUIZ
showQuestion();


// =========================================
// END OF BIRTHDAY QUIZ
// =========================================

// =========================================
// BIRTHDAY CAKE INTERACTION
// =========================================

const blowButton = document.querySelector("#blow-candles");
const cakeScene = document.querySelector(".cake-scene");
const cakeMessage = document.querySelector("#cake-message");

blowButton.addEventListener("click", () => {

    // Stop repeated clicks
    if (cakeScene.classList.contains("blown")) return;

    // Blow out all candles
    cakeScene.classList.add("blown");

    // Update button
    blowButton.textContent = "WISH GRANTED! 🎉";
    blowButton.disabled = true;

    // Birthday message
    cakeMessage.innerHTML = `
        🎉 HAPPY BIRTHDAY, BESELOTE! 🎉
        <br><br>
        May your wishes come true,
        your happiness never end,
        and your cake never run out! 😂❤️
        <br><br>
        YOU DESERVE THE BEST! 👑
    `;

});

// =========================================
// END OF CAKE INTERACTION
// =========================================

// =========================================
// CONFETTI & FLOATING HEARTS
// =========================================

function launchBirthdayCelebration() {

    // Respect reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    // Confetti colors
    const colors = [
        "#f17eac",
        "#9675dc",
        "#ffd166",
        "#ff8fab",
        "#cdb4ff",
        "#ffffff"
    ];

    // Create confetti
    for (let i = 0; i < 45; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti-piece";

        confetti.style.setProperty(
            "--start-x",
            `${Math.random() * 100}vw`
        );

        confetti.style.setProperty(
            "--confetti-color",
            colors[Math.floor(Math.random() * colors.length)]
        );

        confetti.style.setProperty(
            "--fall-time",
            `${2.5 + Math.random() * 2}s`
        );

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }

    // Create floating hearts
    const hearts = ["💗", "💖", "💕", "💜", "❤️", "✨"];

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.setProperty(
            "--heart-x",
            `${Math.random() * 100}vw`
        );

        heart.style.setProperty(
            "--heart-size",
            `${16 + Math.random() * 20}px`
        );

        heart.style.setProperty(
            "--heart-time",
            `${4 + Math.random() * 2}s`
        );

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6500);
    }
}

// Trigger celebration when candles are blown
blowButton.addEventListener(
    "click",
    launchBirthdayCelebration,
    { once: true }
);

// =========================================
// END OF CELEBRATION
// =========================================

// =========================================
// FINAL BIRTHDAY SURPRISE
// =========================================

const finalButton = document.querySelector("#final-surprise-btn");
const finalMessage = document.querySelector("#final-message");

finalButton.addEventListener("click", () => {

    // Reveal the secret message
    finalMessage.hidden = false;

    // Update the button
    finalButton.textContent = "SURPRISE UNLOCKED! ❤️";

    // Prevent repeated clicks
    finalButton.disabled = true;

    // Add celebration effects
    launchBirthdayCelebration();

    // Scroll to the revealed message
    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

// =========================================
// END OF FINAL SURPRISE
// =========================================
