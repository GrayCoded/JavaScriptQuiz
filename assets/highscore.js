var tableEl = $('#highscoreTable');

function addHighscores(highscores) {
  tableEl.empty();

  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];
    var initials = highscore.userInitials;
    var score = highscore.userScore;

    var row = $('<tr></tr>');

    var initialsCell = $('<td></td>').text(initials);
    var scoreCell = $('<td></td>').text(score);

    row.append(initialsCell, scoreCell);

    tableEl.append(row);
  }


  var userInitials = localStorage.getItem('userInitials');
  var userScore = localStorage.getItem('userScore');


  var userRow = $('<tr></tr>');
  var userInitialsCell = $('<td></td>').text(userInitials);
  var userScoreCell = $('<td></td>').text(userScore);
  userRow.append(userInitialsCell, userScoreCell);
  tableEl.append(userRow);
}

addHighscores();