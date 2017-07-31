function Deck() {
  this.deck = [];
  this.addCardb = [];
  this.makeDeck = function() {
    var values = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A");
    var suites = new Array("C", "D", "H", "S");
    for (var i = 0; i < suites.length; i++) {
      for (var j = 0; j < values.length; j++) {
        this.deck[i * values.length + j] = new Card(values[j], suites[i]);

      }
    }
    return this.deck;
  };

  this.shuffleDeck = function() {
    var n = 10,
      temp;
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < this.deck.length; j++) {
        var k = Math.floor(Math.random() * this.deck.length);
        temp = this.deck[k];
        this.deck[k] = this.deck[j];
        this.deck[j] = temp;
      }
    }
    return this.deck;
  };
  this.addCard = function() {
    if (this.deck.length > 0) {
      this.addCardb.push(this.deck[this.deck.length - 1]);
      this.deck.pop(this.deck[this.deck.length - 1]);
      console.log(this.addCardb);
      console.log(this.deck);
    } else {
      console.log("Empty deck");
    }
  };
  this.removeCard = function() {
    if (this.addCardb.length > 0) {
      var k=-1;
      this.deck.push(this.addCardb[k++]);
      this.addCardb.pop(this.addCardb[k++]);
      console.log(this.addCardb);
      console.log(this.deck);
    } else {
      console.log("Empty value");
    }
  };
}
