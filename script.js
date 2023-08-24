const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is HTML?",
        answers: [
            { text: "High tech machine language", correct: false},
            { text: "Hydrogen transformation", correct: false},
            { text: "Hiper traffic message", correct: false},
            { text: "Hypertext markup language", correct: true},
        ]
    },
    {
        question: "What does this abbreviation stands for FSJD?",
        answers: [
            { text: "Full Stack Java Developer", correct: true},
            { text: "Fatima Schooling Jazz Drums", correct: false},
            { text: "Fantastic Java Developer", correct: false},
            { text: "Fabulous Science In Java", correct: false},
        ]
    },
    {
        question: "What is CSS in full?",
        answers: [
            { text: "Cascading Style Sheet", correct: true},
            { text: "Cover Style Surfs", correct: false},
            { text: "Casting System Sheet", correct: false},
            { text: "Samba System Style", correct: false},
        ]
    },
    {
        question: "Give features of abstract class?",
        answers: [
            { text: "An abstract class cannot be instantiated,contain abstact methods and accessors", correct: true},
            { text: "An abstract class can contain dynamic objects", correct: false},
            { text: "An abstract class is possible to modify it with the sealed modifier", correct: false},
            { text: "This class may not contain accesors and modifiers", correct: false},
        ]
    },
    {
        question: "Who invented AngularJS?",
        answers: [
            { text: "Misko Hevery", correct: true},
            { text: "Elon Musk", correct: false},
            { text: "Charles Darwin", correct: false},
            { text: "Dr Thabo Bester", correct: false},
        ]
    },
    {
        question: "Which year was AngularJS invented?",
        answers: [
            { text: "1989", correct: false},
            { text: "1996", correct: false},
            { text: "2009", correct: true},
            { text: "2011", correct: false},
        ]
    },
    {
        question: "What this symbol is called {} in Java?",
        answers: [
            { text: "Strings", correct: false},
            { text: "Paramhesis bracket", correct: false},
            { text: "Arrays", correct: false},
            { text: "Curly braces", correct: true},
        ]
    },
    {
        question: "Which statement is true about abstract class?",
        answers: [
            { text: "An abstract class cannot be instantiated", correct: true},
            { text: "An abstract class may not contain abstract methods and accessor", correct: false},
            { text: "An abstract class it is possible to modify", correct: false},
            { text: "An abstract class modifiers are possible to play with", correct: false},
        ]
    },
    {
        question: "What is Tomcat server?",
        answers: [
            { text: "It is basement for python programming", correct: false},
            { text: "A server thats servers as box holder for files and projects", correct: false},
            { text: "It is an open source java servlet container", correct: true},
            { text: "An empty container hosting cats", correct: false},
        ]
    },

    
];

    

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo += ". " +currentQuestion.question
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz()