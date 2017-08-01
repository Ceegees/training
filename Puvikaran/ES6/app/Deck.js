import Card from './Card.js';

class Deck {
    constructor() {
        this.cards = [];

        const suite = ['S', 'C', 'H', 'D'];
        const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let that = this;
        _.each(suite, function(s) {
            _.each(value, function(v) {
                that.addCard(new Card(v, s));
            });
        });
    }

    shuffle() {

        let index = this.cards.length - 1;
        let temp, shuffleIndex;

        while (index > 0) {
            shuffleIndex = Math.floor(Math.random() * (index + 1));
            temp = this.cards[index];
            this.cards[index] = this.cards[shuffleIndex];
            this.cards[shuffleIndex] = temp;
            index--;
        }
    }


    addCard(card) {
        this.cards.push(card);
    }

    removeCard() {
        if (this.cards.length > 0)
            return this.cards.pop();
        else
            return 0;
    }

}

export default Deck;
