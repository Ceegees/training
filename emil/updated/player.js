function player(name, id) {
  this.name = name;
  this.id = id;
  this.hand = [];
  this.addCard = function(card) {
    this.hand.push(card);
  };
  this.removeCard = function() {
    if (this.hand.length > 0)
      return this.hand.pop();
    else {
      return 0;
    }
  };
  var c = new Card();
  this.handValue = function() {
    var totalValues = 0;
    var cardValue = 0;
    for (var j = 0; j < this.hand.length; j++) {
      cardValue = this.hand[j].getCardValue();
      totalValues += parseInt(cardValue);
    }
    return totalValues;
  };
}
