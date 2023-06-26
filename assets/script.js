$(document).ready(function () {
  var questionIndex = 0;
  var score = 0;
  var penalty = 10;
  var timeInitial = 50;
  var timeEl = $('#countdown');
  var questionsEl = $('#question');
  var answerBtns = $('.answer');
  var startEl = $('.start-page');
  var finishEl = $('.finish');
  var userInfo = $('.user-initials');
  var quizEl = $('.quiz');
  var submitBtnEl = $('#submit');
  var startBtn = $('#start');


  var questionArr = [

    {
      Question: 'What feature makes the best Performance Vehicle?',
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
      Question: 'Which vehicle brand is not owned by VW?',
      answer1: 'AUDI',
      answer2: 'LAMBORGHINI',
      answer3: 'DELOREAN',
      answer4: 'PORSCHE',
      correctA: 'DELOREAN',
    },

    {
      Question: 'What is the only road that you can legally drive 321 KMPH?',
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
      Question: 'What supercar does not seat more than 2 people?',
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
      Question: 'Why did Ferruccio Lamborghini decide to make the best GT car?',
      answer1: 'Got into an argument with Enzo Ferrari',
      answer2: 'There was a problem with his Ferrari',
      answer3: 'Enzo told him to stick to building tractors',
      answer4: 'All of the Above',
      correctA: 'All of the Above',
    },
    {
      Question: 'Which is not in the top 3 of the most anticipated brands from China in 2023?',
      answer1: 'Changan Automobile',
      answer2: 'GAC Group',
      answer3: 'Geely Group',
      answer4: 'Great Wall Motors',
      correctA: 'GAC Group',
    },
  ];

  function genQuiz() {
    if (questionIndex >= questionArr.length) {
      finishQuiz();
      return;
    }

    randomizeArr(questionArr);

    var currentQuestion = questionArr[questionIndex];
    questionsEl.text(currentQuestion.Question);

    for (var i = 0; i < answerBtns.length; i++) {
      answerBtns[i].textContent = currentQuestion['answer' + (i + 1)];
    }
  }

  function randomizeArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
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
      timeEl.text('TIME: ' + timeInitial);
    }

    clearInterval(countdownInterval);
    questionIndex++;
    if (questionIndex < questionArr.length) {
      genQuiz();
      startTimer();
    } else {
      finishQuiz();
    }
  }

  function startTimer() {
    timeEl.text('TIME: ' + timeInitial);

    countdownInterval = setInterval(function () {
      timeInitial--;

      if (timeInitial < 0) {
        finishQuiz();
        clearInterval(countdownInterval);
      } else {
        timeEl.text('TIME: ' + timeInitial);
      }
    }, 1000);
  }

  function finishQuiz() {
    clearInterval(countdownInterval);
    quizEl.hide();
    finishEl.show();
    $('.user-score').text(score);
  }

  submitBtnEl.click(function (event) {
    event.preventDefault();
  
   
    var initials = userInfo.val();
  
   
    var initialsRegex = /^[A-Z]{3}$/;

    if (!initials.match(/^[A-Z]+$/)) {
      
      alert('Initials must be capitalized.');
    } else if (!initialsRegex.test(initials)) {
      
      alert('Initials must be exactly 3 letters.');
    } else {
     
      var score = $('.user-score').text();
  
     
      localStorage.setItem('initials', initials);
      localStorage.setItem('score', score);
  
     
      console.log('Data saved to local storage');
    }
  });
  


  startBtn.click(function () {
    startEl.hide();
    quizEl.show();
    startTimer();
    genQuiz();
  });


  answerBtns.on('click', function () {
    var selectedAnswer = $(this).text();
    validate(selectedAnswer);
  });

});
