function Deck() {
  this.cards = [];
  this.makeDeck = function() {

    var values = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A");
    var suites = new Array("C", "D", "H", "S");
    for (var i = 0; i < suites.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.cards[i * values.length + j] = new Card(values[j], suites[i]);
      }
    }
    return this.cards;
  };

  this.shuffleDeck = function() {
    var n = 10,
      temp;
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < this.cards.length; j++) {
        var k = Math.floor(Math.random() * this.cards.length);
        temp = this.cards[k];
        this.cards[k] = this.cards[j];
        this.cards[j] = temp;
      }
    }
    return this.cards;
  };
  this.addCard = function(card) {
    this.cards.push(card);
  };
  this.removeCard = function() {
    if (this.cards.length > 0)
      return this.cards.pop();
    else {
      return 0;
    }
  };
}
