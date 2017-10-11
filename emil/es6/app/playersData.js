let Players = "";
let displayPlayers = (sortPlayers) => {
  document.getElementById('displayPlayers').innerHTML = "";
  Players = sortPlayers;
  console.log("Players", Players);
  let compiled = _.template($("#player-template").html(), Players);
  $('#displayPlayers').append(compiled);
}
