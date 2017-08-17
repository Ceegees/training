function Table() {
  this.players = [];
  this.joinPlayers = function() {
    // var playersName = ['U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < playerName.length; i++) {
      var p = new Player(playerName[i], i);
      this.players.push(p);
    }
    return this.players;
  };
  var d = new Deck();
  var p = new Player();
  this.leavePlayers = function() {
    var name = this.players.splice(index, 1);
    console.log("The player" + name + "left the game");
  };
  this.startgame = function() {
    var maxplayer = 6;
    var minplayer = 3;
    nplayer = this.players.length;
    if (nplayer <= minplayer || nplayer >= maxplayer) {
      console.log("Game started");
      var make = d.makeDeck();
      var shuffle = d.shuffleDeck();
      var t = 0;
      ptr=this;
      var timer = setInterval(function() {
        ptr.distributeCard();
        t++;
        if (t == 52)
          clearInterval(timer);
      }, 2000);
    } else {
      console.log("Insufficient Number of players");
    }
  };
  this.distributeCard = function() {
    cardscount = d.cards.length;
    nplayers = this.players.length;
    var card = d.removeCard();
    this.players[cardscount % nplayers].addCard(card);
    for (var i = 0; i < nplayers; i++) {
      this.players[i].handValues = this.players[i].handValues();
    }
    console.log("Player" + this.players[i].name + "have" + this.players[i].handValues + "handvalues");
  };
}
