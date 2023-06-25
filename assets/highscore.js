$(document).ready(function () {
  
  var savedInitials = localStorage.getItem('initials');
  var savedScore = localStorage.getItem('score');

  
  if (savedInitials && savedScore) {
    var newRow = $('<tr>');

    var initialsTd = $('<td>').addClass('user-data').text(savedInitials);
    var scoreTd = $('<td>').addClass('user-score').text(savedScore);

    newRow.append(initialsTd, scoreTd);

    $('#highscoreTable').append(newRow)
  }
});