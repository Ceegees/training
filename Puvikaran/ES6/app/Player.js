import Card from './Card.js';

class Player {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.hand = [];
        this.handValues = 0;
    }

    addCard(card) {
        this.hand.push(card);
    }

    removeCard() {

        if (this.hand.length > 0)
            return this.hand.pop();
        else
            return 0;
    }

    handValue() {
        let total = 0;
        let cardValue = 0;
        for (let i = 0; i < this.hand.length; i++) {
            if (this.hand[i] == 0)
                cardValue = 0;
            else {
                cardValue = this.hand[i].getValue();
            }
            total = total + parseInt(cardValue);
        }
        return total;
    }

}

export default Player;
