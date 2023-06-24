
var questionIndex = 0;
var score = 0;
var penalty = 10;
var timeInitial = 50;
var userScores = [];
var answerBtns = [];
var timeEl = $('#countdown');
var questionsEl = $('#question');
var anwersEl = $('.answer');
var startEl = $('.start-page');  
var finishEl = $('.finish'); 
var userInfo = $('#user-input');
var quizEl = $('.quiz');  
var submitBtnEl = $('submit-btn');
var startBtn = $('#start');  


var questionArr = [

    {
        Question: 'What makes a good Performance Vehicle?',
        answer1: 'Speed',
        answer2: 'Handling',
        answer3: 'Braking',
        answer4: 'All of the Above',
        correctA: 'All of the Above',
    },
    {
        Question: 'Which of these is not a hypercar?',
        answer1: 'SSC ULTIMATE AREO',
        answer2: 'HENNESSEY VENOM GT',
        answer3: 'PEEL P50',
        answer4: 'KOENIGSEGG AGERA',
        correctA: 'PEEL P50',

    },
    {
        Question: 'Which brand id not owned by VW?',
        answer1: 'AUDI',
        answer2: 'LAMBORGHINI',
        answer3: 'DELOREAN',
        answer4: 'PROSCHE',
        correctA: 'DELOREAN',
    },

    {
        Question: 'What is the only road that you can legaly drive 321 Kph',
        answer1: 'Auobahn - Germany',
        answer2: 'The Autostrada - Poland',
        answer3: 'Sheikh Zayed Highway - India',
        answer4: 'Grote Road - Edmonton',
        correctA: 'Grote Road - Edmonton',
    },
    {
        Question: 'What makes the Mclaren F1 so valuable?',
        answer1: 'Gold Plated Engine Bay',
        answer2: 'Centered Driving Position',
        answer3: 'World Record Speed',
        answer4: 'Availability',
        correctA: 'Availability',
    },
    {
        Question: 'What supercar does not seat more then 2 people?',
        answer1: 'Rimac - Nevera',
        answer2: 'Koenigsegg - Gemera',
        answer3: 'Ferrari - FF',
        answer4: 'Nissan GT-R G35',
        correctA: 'Rimac - Nevera',
    },
    {
        Question: 'What is the fastest electric vehicle?',
        answer1: 'Tesla - Model S',
        answer2: 'Lotus - Evija',
        answer3: 'Rimac - Nevera',
        answer4: 'Pininfarina - Battista',
        correctA: 'Rimac - Nevera',
    },
    {
        Question: 'How many color options are available for the Porsche Taycan Turbo S?',
        answer1: '5',
        answer2: '10',
        answer3: '2',
        answer4: '14',
        correctA: '14',
    },
    {
        Question: 'Why did Ferruccio Lamborghini decide to make the best gt car?',
        answer1: 'Got into an argument with Enzo Ferrari',
        answer2: 'There was a problem with his Ferrari',
        answer3: 'Enzo told him to stick to building tractors',
        answer4: 'All of the Above',
        correctA: 'All of the Above',
    },
    {
        Question: 'Which is not in the top 3 of the most anticipated brands from china?',
        answer1: 'Changan Automobile',
        answer2: 'GAC Group',
        answer3: 'Geely Group',
        answer4: 'Great Wall Motors',
        correctA: 'GAC Group',
    },
]

function genQuiz() {
    if (questionIndex >= questionArr.length) {
        finishQuiz();
        return;
    }

    var currentQuestion = questionArr[questionIndex];
    questionsEl.text(currentQuestion.Question);

    answerBtns[0].textContent = currentQuestion.answer1;
    answerBtns[1].textContent = currentQuestion.answer2;
    answerBtns[2].textContent = currentQuestion.answer3;
    answerBtns[3].textContent = currentQuestion.answer4;
}

function validate(answer) {
    var currentQuestion = questionArr[questionIndex];
    if (answer === currentQuestion.correctA) {
        score += 10;
    } else {
        timeInitial -= penalty;
        if (timeInitial < 0) {
            timeInitial = 0;
        }
        timeEl.text('TIME: ' + timeInitial)
    }
    questionIndex++;
    genQuiz();
}

function finishQuiz() {
    quizEl.hide();
    finishEl.show();
    userInfo.val('');
    $('.user-score').text(score);
}
  
$('#start').click(function() {
    qFormEl.show();
    mainEl.hide();
    startBtn.hide();
    generateQuestion();

});

$('.quiz').click(function (event) {
    var answer = event.target.value;
    if (answer != null) {
        validate(answer);
    }
});





