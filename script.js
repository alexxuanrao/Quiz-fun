var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", Startquiz,{once:true});
let questionIndex;

function Startquiz() {
    mixBut.value = "Submit";
    questionIndex = 0;
    Getnextquestion()

}

function Getnextquestion() {
    console.log (questionIndex)
    const currentquestion = questions[questionIndex]
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = currentquestion.choices.length;

    questionClass.innerText = currentquestion.question;

    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = currentquestion.choices[i];
        var li = document.createElement('li');
        li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);
    }
    mixBut.addEventListener("click", Checkedanswer);
}

function Checkedanswer() {
    questionIndex++
    if (questionIndex < questions.length) {
        Getnextquestion()
    }
    else {
        Endquiz()
    }
}

function Endquiz() {
    mixBut.value = "Play Again?";
    mixBut.addEventListener("click", Startquiz,{once:true});
}

var questions = [
    {
        question: "Hyper Text Markup Language Stand For?",
        choices: ["JavaScript", "JQuery", "CSS", "HTML"],
        correctAnswer: 3,
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "JavaScript"],
        correctAnswer: 2,
    },
    {
        question: "Which is not a JavaScript Framework?",
        choices: ["Python Script", "JQuery", "Django", "NodeJS"],
        correctAnswer: 2,
    },
    {
        question: "Which is used for Connect To Database?",
        choices: ["PHP", "HTML", "JS", "All"],
        correctAnswer: 0,
    },
    {
        question: "Coding boot camp is about..",
        choices: ["Web Design", "JQuery", "APIs", "All"],
        correctAnswer: 3,
    }
];

// var currentQuestion = 0;
// var correctAnswers = 0;
// var quizOver = false;

// window.addEventListener('DOMContentLoaded', function () {
//     displayCurrentQuestion();

//     var quizMessage = document.querySelector('.quizMessage');

//     quizMessage.style.display = 'none';

//     document.querySelector('.startButton').addEventListener('click', function () {

//         if (!quizOver) {
//             var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

//             if (radioBtnsChecked === null) {
//                 quizMessage.innerText = 'Please choose your answer';
//                 quizMessage.style.display = 'block';
//             } else {
//                 console.log(radioBtnsChecked.value);
//                 quizMessage.style.display = 'none';
//                 if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer) {
//                     correctAnswers++;
//                 }

//                 currentQuestion++;

//                 if (currentQuestion < questions.length) {
//                     displayCurrentQuestion();
//                 } else {
//                     displayScore();
//                     document.querySelector('#mixBut').value = 'Play Again?';
//                     quizOver = true;
//                     mixBut.addEventListener("click", function () {
//                         location.reload();
//                     })
//                 }
//             }
//         }
//     });
// });

// function displayCurrentQuestion() {
//     console.log('In display current Questions');

//     var question = questions[currentQuestion].question;
//     var questionClass = document.querySelector('.quizContainer > .question');
//     var choiceList = document.querySelector('.quizContainer > .choiceList');
//     var numChoices = questions[currentQuestion].choices.length;

//     questionClass.innerText = question;

//     choiceList.innerHTML = '';

//     var choice;
//     for (i = 0; i < numChoices; i++) {
//         choice = questions[currentQuestion].choices[i];
//         var li = document.createElement('li');
//         li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
//         choiceList.appendChild(li);

//     }
// }

// function resetQuiz() {
//     currentQuestion = 0;
//     correctAnswers = 0;
//     hideScore();
// }

// function displayScore() {
//     document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
//     document.querySelector('.quizContainer > .result').style.display = 'block';
// }

// function hideScore() {
//     document.querySelector('.result').style.display = 'none';
// }

var timerEl = document.querySelector('.time_left_txt');
var mainEl = document.querySelector('.quizContainer');


function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds left';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' seconds left';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}
countdown();