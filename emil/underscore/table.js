function Table() {
  this.players = [];
  this.joinPlayers = function() {
    for (var i = 0; i < playerName.length; i++) {
      var p = new Player(playerName[i], i);
      this.players.push(p);
    }
    return this.players;
  };
  var d = new Deck();
  var p = new Player();
  this.startgame = function() {
    if (this.players.length < 3 || this.players.length > 6) {
      console.log("Insufficient Number of players");
    } else {
      console.log("Game started");
      d.makeDeck();
      d.shuffleDeck();
      var time = 0;
      ptr = this;
      var timer = setInterval(function() {
        ptr.distributeCard();
        time++;
        while (time == 52)
          clearInterval(timer);
      }, 2000);
    }
  };
  this.distributeCard = function() {
    cardscount = d.cards.length;
    console.log(cardscount);
    nplayers = this.players.length;
    var card = d.removeCard();
    this.players[cardscount % nplayers].addCard(card);
    for (var i = 0; i < nplayers; i++) {
      this.players[i].handValues = this.players[i].handValue();
      console.log("Player:" + this.players[i].name + "\tHandValue:\t" + this.players[i].handValues);
    }
    console.log("Sort the players in Ascending order ");
    var sortPlayers = _.sortBy(this.players, 'handValues');
    sortPlayers.reverse();
    return display(sortPlayers);
  };
}
