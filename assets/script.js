var questionStr = [ 
    {
    question:'JavaScript is a ________ language?',
    answers:['Data','Love','Binary','simple'],
    correctA:'Data',
    },
    {
   question: 'How do you log data to the page?',
   answers: ['console.log','write','paste','put'],
   correctA: 'console.log',

    },
    {
    question: 'Which is a Primitive Data Type?',
    answers: ['Boolean','Byte','Quibit','Dongle'],
    correctA: 'Boolean',
    },
    {
    question: 'Can store an object as a string?',
    answers: ['Yes','No'],
    correctA: 'Yes',
    },
    {
    question: 'What is the purpose of JavaScript?',
    answers: ['To give dynamic change to a website','Provides the base', 'Acts as a style','A type of Grater'],
    correctA: 'To give dynamic change to a website',
    },
    {
    question: 'What can you store in an Array?',
    answers: ['Numbers','Data','Strings','All of the Above'],
    correctA: 'All of the Above',
    },   
];


var score = 0;
var questions = 0;
var currentTime = document.querySelector('#currentTime');
var timer = document.querySelector('#questionsDiv');
var wrapper = document.querySelector('#wrapper');



var timeLeft = 100;
var holdInterval = 0;
var penaltyC = 5;
var penaltyW = 15;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContext = "Time: " + timeLeft;
        

        if (timeLeft <= 0) {
            clearInterval(holdInterval);
            finish();
            currentTime.textcontext = "You have Run out of Time!"
        }
        }, 1000);
        } 
        generateQuestions(questions);
    })



function generateQuestions(questions) {
    questionsDiv.container = '';
    ulCreate.container = '';
    for(var i = 0; i < questionsStr.length; i++) {
        var userQ = questionStr[questions].question;
        var userA = questionStr[questions].answers;
        questionsDiv.textContext = userQ;
    }
    userA.forEach(function (newItem) {
        listItem.textContext = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.apphendChild(listItem);
        listItem.addEventListener("click", validate)
    });
}

function validate(event) {
    var selectedA = event.target;
    if (selectedA.matches('li')) {
        var createDiv = document.createElement('div')
        createDiv.setAttribute('id',"createDiv");
        if (selectedA.textContent == questionStr[questions].correctA) {
            createDiv.textContext = "Correct!";
            timeLeft = timeLeft - penaltyC;
    }   else {
            timeLeft = timeLeft - penaltyW;
            createDiv.textContext = 'Wrong!';

    }
}
    
questions++;

var finishDiv = document.querySelector('#quizfinish')

if (questions >= questionStr.length) {
    finish();
    createDiv.textContent = "Congratulations!" + "";
} else {
    generateQuestions(questions);
}
questionDiv.appendChild(createDiv);
}

function finish() {
    questionsDiv.hide = '';
    currentTime.hide = '';

    var createH1 = document.createElement('h1');
    createH1.setAttribute('id','createH1');
    createH1.textContent = "Finished!";

    questionsDiv.appendchild(createH1);

    if (timeLeft >= 0) {
        var remainingT = timeLeft;
        var createP = document.createElement('p');
        clearInterval(holdInterval);
        createP.textContext = "Score: " + remainingT;

        questionsDiv.appendChild(createP);
    }

var highScores = document.querySelector('#highScores')
var back = document.querySelector('#return')
var wipe = document.querySelector('#wipe')

    wipe.addEventListener('click', function () {
        localStorage.wipe();
        location.reload();
    });
    var 


var submitBtn = document.querySelector('#submit')

    submitBtn.addEventListener('click',function () {
    var initials = createInput.value;

    if (initials === null) {
        alert('No Value Entered');
    }   else {
        var finalScore = {
            initails: initials,
            score: remainingT,
        };
        console.log(finalScore);
        var highScores = local.Storage.getItem("highScores");
        if (highScores = null) {
            highScores = [];
        } else {
            highScores = JSON.parse("highScores");
        }
        highScores.push(finalScore);
        var nScore = JSON.stringify(highScores);
        localStorage.setItem("highScores",nscore);
        window.location.replace("highScoreDiv");
    }
});
}