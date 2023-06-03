
var mainEl = document.getElementById('main');
var questionEl = document.getElementById('question-el');
var qFormEl= document.getElementById('question-form');
var timeEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var highScoreEl = document.getElementById('high-score')
var finishQuizEl = document.getElementById('finish-quiz')
var tryAgainBtn = document.getElementById('try-again')
var userInfo = document.getElementById('user-id')
var submitBtn = document.getElementById('user-id-sub')
var returnBtn = document.getElementById('return')
var score = 0;
var penalty = 5;
var questionInd = 0;
var secondsLeft = 0;

var questionArr = [
    {
        question: '1# JavaScript is a ________ language?',
        answers: ['Data', 'Love', 'Binary', 'simple'],
        correctA: 'Data',
    },
    {
        question: '2# How do you log data to the page?',
        answers: ['console.log', 'write', 'paste', 'put'],
        correctA: 'console.log',

    },
    {
        question: '3# Which is a Primitive Data Type?',
        answers: ['Boolean', 'Byte', 'Quibit', 'Dongle'],
        correctA: 'Boolean',
    },
    
    {
        question: '4# What is the purpose of JavaScript?',
        answers: ['To give dynamic change to a website', 'Provides the base', 'Acts as a style', 'A type of Grater'],
        correctA: 'To give dynamic change to a website',
    },
    {
        question: '5# What can you store in an Array?',
        answers: ['Numbers', 'Data', 'Strings', 'All of the Above'],
        correctA: 'All of the Above',
    },
   
];

 shuffle(questionArr);

 init();

 startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    shuffle(questionArr);
    timeEl.textContent = 'Time Left: ' + '50';
    mainEl.setAttribute('class', 'hidden');
    questionEl.setAttribute('class', 'mn-box-settings')
    timerRem(4);
 
 });

questionEl.addEventListener('click', function (event) {
    event.preventDefault();
    var selectedA = event;
    if (selectedA != null) {
        validate(questionInd);
    }
});

userInfo.addEventListener('submit', function (event) {
    event.preventDefault(); 
    if (userInfo.value !== "") {
        adjScore();
        userInfo.value = "";
    } else {
        userInfo.textContent = "Please Write A 3 Letter Initial";
    }
});



submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    if (userInfo.value !== "") {
        adjScore();
        userInfo.value = "";
    } else {
        userInfo.textContent = "Please Write A 3 Letter Initial";
    }
});





function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    },1000)
}

setTime();

function startBtn()

questionEl.addEventListener('click', startBtn () {
    
    
})






var createUl = document.createElement('ul');
createUl.setAttribute('id', 'answersUl')



function generateQuestion() {
    questionEl.innerHTML= '';
    ulCreate.innerHTML= '';
    var displayQuestion = document.createElement('h2')
    var currentQ = questionArr[questionInd]
        displayQuestion.innerHTML = currentQ.question;
        questionEl.appendChild(displayQuestion);

   currentQ.answers.forEach(function (newItem) {
        var listItem = document.createElement('li');
        listItem.textContext += "<button>" + newItem + "</button>";
        questionEl.appendChild(ulCreate);
        createUl.apphendChild(listItem);
        listItem.addEventListener("click", (validate));
    });
}

function validate () {
    var selectedA = event.target.textContent;
    questionEl.appendChild(nDiv);
    nDIv.appendChild(check)
    if (selectedA.textContent == questionArr[questionInd].correctA) {
        check.textContext = "Correct!";
        score++;
        timeRem = timeRem - penalty;
    if (selectedA.textContent == questionArr[questionInd].correctA) {
            var createDiv = document.createElement('div')
            createDiv.setAttribute('id', "createDiv");
     } else {
            timeRem = timeRem - penalty;
            createDiv.textContext = 'Wrong!';
     }
        generateQuestion++;
    }


function () {
        $('questionEl').hide();
        $('finishQuizEl').show()
    }
    var finishDiv = document.querySelector('#quizfinish')
    if (questionInd >= questionArr.length) {
        finish();
        createDiv.textContent = 'Congratulations!' + ';
    } else {
        generateQuestion(questionInd);
    }
    questionDiv.appendChild(createDiv);
}

function finish() {
    questionsDiv.hide = '';
    currentTime.hide = '';

    var createH1 = document.createElement('h1');
    createH1.setAttribute('id', 'createH1');
    createH1.textContent = "Finished!";

    questionsDiv.appendchild(createH1);

    if (timeLeft >= 0) {
        var remainingT = timeLeft;
        var createP = document.createElement('p');


        clearInterval(holdInterval);
        createP.textContext = "Score: " + remainingT;

        questionsDiv.appendChild(createP);
    }


    retryBtn.addEventListener('click', function () {
        localStorage.retryBtn();
        location.reload();
    });
}


var handleFormSubmit = function (event) {
    var initialsInput = initialsInput.val();
    var scoreInput = scoreInput.val();

    if (initalInput === nul)


    var initials = createInput.value;

         if (initials === null) {
             textContent.display.message;
         }   else {
             var finalScore = {
                 initails: initials,
                 score: remainingT,
             };

             console.log(finalScore);
             var highScores = local.Storage.getItem("highScores");
             if (highScores = null) {
                 highScores = [];

             } else { highScores = JSON.parse("highScores");
             }


             highScores.push(finalScore);
             var nScore = JSON.stringify(highScoreEL);
             localStorage.setItem("highScoresEl",nscore);

             return highScores

        }
};
