let Players = "";

let displayPlayers = (sortedPlayers) => {
    document.getElementById('displayPlayers').innerHTML = '';
    Players = sortedPlayers;
    console.log("players data", Players);
    let compiled = _.template($("#player-template").html(), Players);
    $('#displayPlayers').append(compiled);
}
