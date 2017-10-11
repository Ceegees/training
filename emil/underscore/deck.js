function Deck() {
  this.cards = [];
  this.makeDeck = function() {
    var suites = ['C', 'D', 'H', 'S'];
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (var i = 0; i < suites.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.cards[i * values.length + j] = new Card(suites[i], values[j])
      }
    }
    return this.cards;
  };
  this.shuffleDeck = function() {
    var i, j, temp;
    for (var i = (this.cards.length - 1); i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards;
  };
  this.removeCard = function() {
    if (this.cards.length > 0)
      return this.cards.pop();
    else {
      return 0;
    }
  };
  this.addCard = function(card) {
    this.cards.push(card);
  };
}
