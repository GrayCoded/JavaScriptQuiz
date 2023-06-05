
var questionInd = 0;
var score = 0;
var penalty = 10;
var timeInt = 50;
var userScores = [];
var adjArray = [];
var qInput = $('#question-input');
var aInput = $('#answer-input');
var mainEl = $('#main');  
var question = $('#question-input'); 
var qFormEl = $('quiz-div'); 
var timeEl = $('#countdown'); 
var startBtn = $('#start-btn'); 
var highScoreEl = $('#highscore-div'); 
var finishEl = $('#quiz-finish'); 
var userInfo = $('#user-input'); 
var submitBtnEl = $('submit-btn'); 
var backBtn = $('#back'); 
var retryBtn = $('#retry');



qFormEl.hide();
highScoreEl.hide();
finishEl.hide();

var questionArr = [

    (Q1 = {
        Question: 'JavaScript is a ________ language?',
        answer1: 'Data',
        answer2: 'Love',
        answer3: 'Binary',
        answer4: 'simple',
        correctA: 'Data',
    }),
    (Q2 = {
        Question: 'How do you log data to the page?',
        answer1: 'console.log',
        answer2: 'write',
        answer3: 'paste',
        answer4: 'put',
        correctA: 'console.log',

    }),
    (Q3 = {
        Question: 'Which is a Primitive Data Type?',
        answer1: 'Boolean',
        answer2: 'Byte',
        answer3: 'Quibit',
        answer4: 'Dongle',
        correctA: 'Boolean',
    }),

    (Q4 = {
        Question: 'What is the purpose of JavaScript?',
        answer1: 'To give dynamic change to a website',
        answer2: 'Provides the base',
        answer3: 'Acts as a style',
        answer4: 'A type of Grater',
        correctA: 'To give dynamic change to a website',
    }),
    (Q5 = {
        Question: 'What can you store in an Array?',
        answer1: 'Numbers',
        answer2: 'Data',
        answer3: 'Strings',
        answer4: 'All of the Above',
        correctA: 'All of the Above',
    }),
]

startQ();


  
$('#start-btn').click(function(event) {
    event.preventDefault();
    qFormEl.show();
    mainEl.hide();
    startBtn.hide();
    generateQuestion();

})

$('#quiz-div').click(function (event) {
    event.preventDefault();
    var answer = event.target.value;
    if (answer != null) {
        validate(answer);
    }
});

$('#user-input').submit(function (event) {
    event.preventDefault();
    if (userInfo.value !== '') {
        adjScore();
        userInfo.value = '';
    } else {
        alert("Please Write A 3 Letter Initial")
    }
});

$('submit-btn').click(function (event) {
    event.preventDefault();
    if (userInfo.value !== '') {
        adjScore();
        userInfo.value = '';
    } else {
        alert("Try again please");
    }
});


$('#back').click(function () {
    highScoreEl.setAttribute('class', 'hide');
    mainEl.setAttribute('class', 'show');
})

$('#retry').click(function () {
    var retryCon = confirm('Retrying the quiz will erase current score, are you sure?');
    if (retryCon) {
        userScores = [];
        localStorage.setItem('HIGHSCORES', '')
        renderHsList();
    }
});


function startQ() {
    var quizData = localStorage.getItem('HIGHSCORES');
    console.log(quizData);

    if (quizData === null || quizData == '') {
        localStorage.setItem('HIGHSCORES', '[]');
        quizData = localStorage.getItem('HIGHSCORES')
        userScores = JSON.parse(quizData);
        console.log(userScores);
    } else {
        userScores = JSON.parse(quizData);
        console.log(userScores);
    }
    for (var i = 0; i < userScores.length; i++) {
        var input = document.createElement('li');
        input.setAttribute('data-index', i);
        input.textContext = Number(dataset.index) + 1 + '.' + userScores[i];
        highScoreEl.children[1].children[0].appendChild(input);
    }
}


function adjScore() {
    var highScoreB = {
        User: userInfo.value.trim(),
        Time: timeInt,
    };
    userScores.push(highScoreB);
    localStorage.setItem('HIGHSCORES', JSON.stringify(userScores));
    console.log(highScoreB);
    console.log(userScores);
    questionInd = 0;
    timeInt = 50;
    score = 0;
    renderHsList();
    finishEl.hide();
    highScoreEl.show();
}

function renderHsList() {
    var quizData = JSON.parse(localStorage.getItem('HIGHSCORES'));

    if (quizData !== null ) {
        localStorage.setItem('HIGHSCORES', '[]');
        quizData = localStorage.getItem('HIGHSCORES');
    } else {
        return;
    }
}


function arrangeArr() {
    console.log(userScores);
    console.log(userScores[0].Time);
    var lastValue;
    for (var x = 0; x < userScores.length; x++) {
        for (var i = 0; i < userScores.length - 1; i++) {
            if (userScores[i].Time < userScores[i + 1].Time) {
                lastValue = userScores[i];
                userScores[i] = userScores[i + 1];
                userScores[i + 1] = lastValue;

            }
        }
    }
}

function setTime() {
    var timerInterval = setInterval(() => {
        if (questionInd === questionArr.length || timeInt === 0) {
            clearInterval(timerInterval);
            generateQuestion(questionInd);
        } else {
            timeInt--;
            timeEl.children[0].textContent = timeInt;
        }
    }, 1000);
}


function validate(answer) {
    disableOpt(true);
    if (answer == questionArr[questionInd].correctA) {
        correctA.target.setAttribute('class', 'selected-btn correct')
        score++;
    } else {
        correctA.target.setAttribute('class', 'selected-btn wrong')
        timeInt -= penalty;
        if (timeInt <= 0) {
            timeInt = 0;
            timeEl.children[0].textContent = timeInt;
            generateQuestion(questionInd);
        }
    }

    setTimeout(function () {
        questionInd++;
        generateQuestion(questionInd);
        disableOpt(false);
    }, 400);
}
function disableOpt(flag) {
    for (var i = 1; i <= 4; i++) {
        qFormEl.children[i].disable = flag;
    }
}

function generateQuestion() {
    if (questionInd < questionArr.length && timeInt !== 0) {
        quizEl.childrern[0].setAttribute('class', 'hide');
        quizEl.children[1].setAttribute('class', '');
        questionEl.textContext =
            qNumber + 1 + '.' + questionArr[qNumber].Question;
        for (var i = 1; i <= 4; i++) {
            switch (i) {
                case 1:
                    qFormEl.children[i].setAttribute('id', 'answer-input');
                    qFormEl.children[i].value = questionArr[qNumber].answer1;
                    break;
                case 2:
                    qFormEl.children[i].setAttribute('id', 'answer-input');
                    qFormEl.children[i].value = questionArr[qNumber].answer2;
                    break;
                case 3:
                    qFormEl.children[i].setAttribute('id', 'answer-input');
                    qFormEl.children[i].value = questionArr[qNumber].answer3;
                    break;
                case 4:
                    qFormEl.children[i].setAttribute('id', 'answer-input');
                    qFormEl.children[i].value = questionArr[qNumber].answer4;
                    break;
            }
        }
    } else {
        quizEl.children[1].setAttribute(('class', 'hide'));
        quizEl.children[0].stAttribute('class', '');
        quizEl.setAttribute('class', 'hide');
        finishEl.setAttribute('class', 'show')
        if (timeInt === 0) {
            finishEl.children[0].children[1].textContext =
                "Good Try! Here is your score" + timeInt;
        } else {
            finishEl.children[0].children[1].textContext =
                "Congratulations! Here is your score" + timeInt;
        }
    }
}
