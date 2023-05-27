var timerEL = document.querySelector('.timer')


var question = [ {

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

question = getRandomQuestion;

function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];

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

var choice = []

function choice( {
    var answers = selectedAnswer(function() {
        timeLeft--;
        

        if(answer === correctAnswer);
        timeLeft-5;
        prompt("correct");

        else if(answer !== correctAnswer);
        timeLeft-15;
        prompt("wrong");

    })
})