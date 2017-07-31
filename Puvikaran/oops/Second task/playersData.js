var Players = "";
function displayPlayers(sortedPlayers) {
document.getElementById('displayPlayers').innerHTML='';
    Players = sortedPlayers;
    console.log("players data", Players);
    var compiled = _.template($("#player-template").html(), Players);
    $('#displayPlayers').append(compiled);

}
