function Deck() {
    this.cards = [];
    this.deck = [];

    this.makeDeck = function() {
        var suite = ['S', 'C', 'H', 'D'];
        var value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (var i = 0; i < suite.length; i++) {
            for (var j = 0; j < value.length; j++) {

                this.cards.push(new Card(value[j], suite[i]));
            }
        }
        // console.log(this.cards);
        return this.cards;
    };

    this.shuffle = function() {

        var index, temp, shuffleIndex;

        for (index = this.cards.length - 1; index > 0; index--) {

            shuffleIndex = Math.floor(Math.random() * (index + 1));
            temp = this.cards[index];
            this.cards[index] = this.cards[shuffleIndex];
            this.cards[shuffleIndex] = temp;
        }
        // console.log(this.cards);
       return this.cards;
    };

    this.addCard = function(card) {
        deck.push(card);
    };

    this.removeCard = function(card) {
        if (deck.length > 0)
            return deck.pop();
        else
            return null;
    };


}
