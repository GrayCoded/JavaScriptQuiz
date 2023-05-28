var usernameL = 3;
var choice = [];

var timerEL = document.querySelector('#timer')
var questionEl = document.querySelector('#question')
var answerEl = document.querySelector('#answer')
var highScoreEl = document.querySelector('#high-score')
var initialsEl = document.querySelector('#Initials')
var titleEl = document.querySelector('#h1')


var questionStr = [ {

    question:'JavaScript is a ________ language?',
    answers:('Data','Love','Binary','simple'),
    correctAnswer:'Data',
},{
   question: 'How do you log data to the page?',
   answers: ('console.log','write','paste','put'),
   correctAnswer: 'console.log',

},{
    question: 'Which is a Primitive Data Type?',
    answers: ('Boolean','Byte','Quibit','Dongle'),
    correctAnswer: 'Boolean',
},{
    question: 'Can store an object as a string?',
    answers: ('Yes','No'),
    correctAnswer: 'Yes',
},{
    question: 'What is the purpose of JavaScript?',
    answers: ('To give dynamic change to a website','Provides the base', 'Acts as a style','A type of Grater'),
    correctAnswer: 'To give dynamic change to a website',
},{
    question: 'What can you store in an Array?',
    answers: ('Numbers','Data','Strings','All of the Above'),
    correctAnswer: 'All of the Above',
}   
]

function generateQuestion() {
    var questionStr =('');
    for(var i =0; i < questionStr) 
    var randomizer = Math.floor(Math.random() * questions.length);
    questionStr = questionStr + choice[randomizer]
    return questionStr;

}



var timeLeft = 100;

function setTime() {
    var timeInterval = setInetravl(function() {
        timeLeft--;
        timeLeft.textContent = 'Time: ' + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            prompt("You have Run out of Time");
        }

    }, 1000);
}


setTime();