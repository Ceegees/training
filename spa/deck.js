function Deck() {
  this.deck = [];
  // this.makeDeck = makeDeck();
  // this.shuffle = shuffle(deck);
  //this.distribute=distribute(deck);
  this.makeDeck = function() {
    var ranks = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A");
    var suits = new Array("C", "D", "H", "S");
    // this.deck = new Array(52);
    var i, j;
    document.write("Cards Made\n");
    for (i = 0; i < suits.length; i++) {
      for (j = 0; j < ranks.length; j++) {
        this.deck[i * ranks.length + j] = new Card(ranks[j], suits[i]);

      }
    }
    return this.deck;


  };

  this.shuffleDeck= function() {
    var i, n = 10,
      j, temp;
    for (i = 0; i < n; i++) {
      for (j = 0; j < this.deck.length; j++) {
        k = Math.floor(Math.random() * this.deck.length);
        temp = this.deck[j];
        this.deck[j] = this.deck[k];
        this.deck[k] = temp;
      }
    }
    document.write("Cards Shuffled \n");
    //console.log(this.deck);
    return this.deck;
  };
}
