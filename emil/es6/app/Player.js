import Card from './Card.js';


class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.hand = [];
    this.handValues = 0;
  }


  addCard(card) {
    this.hand.push(card);
  }


  removeCard() {
    if (this.hand.length > 0)
      return this.hand.pop(card);
    else
      return 0;
  }


  handValue() {
    let total = 0;
    for (let i = 0; i < this.hand.length; i++) {
      total += parseInt(this.hand[i].getValue());
    }
    return total;
  }
}


export default Player;
