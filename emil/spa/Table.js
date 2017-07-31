function Table() {
  this.Players = [];

  function addPlayer() {

    //var playerName = ['v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < playerName.length; i++) {
      var newPlayer = new Player(playerName[i], i);
      Players.push(newPlayer);

    }
    // console.log(Players);
  }
  addPlayer();
  var noplayers = this.Players.length;
  if (noplayers < 6) {

    var d = new Deck();
    d.makeDeck();
    var shuffled = d.shuffleDeck(this.deck);
    // var p = new Player();
    distributeCard(shuffled);

  } else {
    console.log("Enter max 6 Player");
  }
}
