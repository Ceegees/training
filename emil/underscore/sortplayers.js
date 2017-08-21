function display(sortPlayers) {
  // document.getElementById('#displayPlayers').innerHTML = '';
  var players = sortPlayers;
  console.log(players);
  var show = _.template($("player-template").html(), players);
  $('#displayPlayers').append(show);
}
