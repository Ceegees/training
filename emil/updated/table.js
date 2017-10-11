function Table() {
  this.players = [];
  this.playersName = ['u', 'v', 'w', 'x', 'y', 'z'];
  this.joinPlayers = function() {
    var addPlayer = [];
    for (var i = 0; i < this.playersName.length; i++) {
      addPlayer = new player(this.playersName[i], i);
      this.players.push(addPlayer);
    }
    console.log(this.players);
  };
  this.leavePlayers = function() {
    var removePlayer = [];
    var i = 7;
    var p = Math.floor(Math.random() * i);
    this.playersName.length -= 1;
    removePlayer = new player(this.playersName[p], p);
    this.players.pop(removePlayer);
    console.log(this.players);
  };
  var d = new Deck();
  this.distributeCard = function() {

    if (this.playersName.length < 3 || this.playersName.length > 6)
      console.log("Insufficient Number of Players");
    else {
      console.log("Game Started");
      d.makeDeck();
      var shuffled = d.shuffleDeck();
      for (var i = 0; i < this.playersName.length; i++) {
        for (var j = i; j < shuffled.length; j += this.playersName.length) {
          // var card=d.removeCard();
          this.players[i].hand.push(shuffled[j]);
        }
      }
    }
    for (var i = 0; i < this.players.length; i++) {
      var total = this.players[i].handValue();
      console.log(this.players[i].name + '\t' + total);
    }
  };
}
