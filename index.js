const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hyper Machine Language",
            "Hyperlink and text Markup Language",
        ],
        correct: 0,
    },
    {
        question:
            "Which CSS Property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question:
            "What is the JavaScript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question:
            "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },
];

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        "#question, #option_1, #option_2, #option_3, #option_4"
    );
const submitBtn = document.querySelector("#submit");
const resultElm = document.querySelector("#result");
const scoreElm = document.querySelector("#score");
const retryBtn = document.querySelector("#retry");
const questionNumberElm = document.querySelector("#question-number");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = question;
    options.forEach((curOption, index) => {
        document.getElementById(`option_${index + 1}`).innerText = curOption;
    });
    answerElm.forEach((curOption) => {
        curOption.checked = false;
    });
    questionNumberElm.innerText = ` ${currentQuiz + 1}/${quizData.length}`;
};

loadQuiz();

const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    if (selectedOptionIndex !== undefined) {
        if (selectedOptionIndex === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            resultElm.style.display = "block";
            scoreElm.innerText = `Your score is ${score} out of ${quizData.length}`;
            retryBtn.style.display = "block";
        }
    }
});

retryBtn.addEventListener("click", () => {
    currentQuiz = 0;
    score = 0;
    resultElm.style.display = "none";
    retryBtn.style.display = "none";
    loadQuiz();
});

// const quizData = [
//     {
//         question: "What does HTML stand for?",
//         options: [
//             "Hypertext Markup Language",
//             "Hyper Transfer Markup Language",
//             "Hyper Machine Language",
//             "Hyperlink and text Markup Language",
//         ],
//         correct: 0,
//     },
//     {
//         question:
//             "Which CSS Property is used to control the spacing between elements?",
//         options: ["margin", "padding", "spacing", "border-spacing"],
//         correct: 1,
//     },
//     {
//         question:
//             "What is the JavaScript function used to select an HTML element by its id?",
//         options: [
//             "document.query",
//             "getElementById",
//             "selectElement",
//             "findElementById",
//         ],
//         correct: 1,
//     },
//     {
//         question:
//             "In React.js, which hook is used to perform side effects in a function component?",
//         options: ["useEffect", "useState", "useContext", "useReducer"],
//         correct: 0,
//     },
//     {
//         question: "Which HTML tag is used to create an ordered list?",
//         options: ["<ul>", "<li>", "<ol>", "<dl>"],
//         correct: 2,
//     },
// ];

// const answerElm = document.querySelectorAll(".answer");
// const [questionElm, option_1, option_2, option_3, option_4] =
//     document.querySelectorAll(
//         "#question, #option_1, #option_2, #option_3, #option_4"
//     );
// const submitBtn = document.querySelector("#submit");
// const resultElm = document.querySelector("#result");
// const scoreElm = document.querySelector("#score");
// const retryBtn = document.querySelector("#retry");

// let currentQuiz = 0;
// let score = 0;

// const loadQuiz = () => {
//     const { question, options } = quizData[currentQuiz];
//     questionElm.innerText = question;
//     options.forEach((curOption, index) => {
//         document.getElementById(`option_${index + 1}`).innerText = curOption;
//     });
//     answerElm.forEach((curOption) => {
//         curOption.checked = false;
//     });
// };

// loadQuiz();

// // Step 4: Get Selected Answer on Button Click

// const getSelectedOption = () => {
//     let ans_index;
//     answerElm.forEach((curOption, index) => {
//         if (curOption.checked) {
//             ans_index = index;
//         }
//     });
//     return ans_index;
// };

// submitBtn.addEventListener("click", () => {
//     const selectedOptionIndex = getSelectedOption();
//     if (selectedOptionIndex !== undefined) {
//         if (selectedOptionIndex === quizData[currentQuiz].correct) {
//             score++;
//         }
//         currentQuiz++;
//         if (currentQuiz < quizData.length) {
//             loadQuiz();
//         } else {
//             resultElm.style.display = "block";
//             scoreElm.innerText = `Your score is ${score} out of ${quizData.length}`;
//             retryBtn.style.display = "block";
//         }
//     }
// });

// retryBtn.addEventListener("click", () => {
//     currentQuiz = 0;
//     score = 0;
//     resultElm.style.display = "none";
//     retryBtn.style.display = "none";
//     loadQuiz();
// });
