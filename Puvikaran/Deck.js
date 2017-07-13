function Deck() {
    this.newDeck = makeDeck();
    this.shuffleDeck =Shuffle(deck);
    // this.addCard = addCard();
    // this.removeCard = removeCard();


    function makeDeck() {
        var suites = ['S', 'C', 'H', 'D'];
        var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        deck = [];
        for (var i = 0; i < suites.length; i++) {
            for (var j = 0; j < values.length; j++) {

                var newcard = new Card(values[j], suites[i]);
                deck.push(newcard);

            }
        }
        return deck;
    }

    function Shuffle() {

        var index, temp, shuffleIndex;

        for (index = this.deck.length - 1; index > 0; index--) {

            shuffleIndex = Math.floor(Math.random() * (index + 1));
            temp = this.deck[index];
            this.deck[index] = this.deck[shuffleIndex];
            this.deck[shuffleIndex] = temp;
        }
        console.log(deck);
        return this;
    }

    function addCard(card) {
        this.playingCards.push(deck);
    }

    function removeCard(card) {
        if (this.playingCards.length > 0)
            return this.playingCards.shift();
        else
            return null;
    }

}
Deck();
