function Player(name, id) {
  this.name = name;
  this.id = id;
  this.hand = [];
  this.handValues=0;
  this.handValue = function() {
    var totalvalue = 0;
    for (var i = 0; i < this.hand.length; i++) {
      var value = this.hand[i].getValue();
      totalvalue += parseInt(value);
    }
    return totalvalue;
  };
  this.addCard = function(card) {
    this.hand.push(card);
  };
  this.removeCard = function() {
    if (this.hand.length > 0)
      return this.hand.pop();
  };
}
