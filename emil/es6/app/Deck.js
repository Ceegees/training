import Card from './Card.js';


class Deck {
  constructor() {
    this.cards = [];
    const suites = ['C', 'D', 'S', 'H'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let that = this;
    suites.forEach(function(suite) {
      values.forEach(function(value) {
        that.addCard(new Card(suite, value));
      });
    });
  }


  shuffle() {
    let index = this.cards.length;
    let temp;
    for (let i = index - 1; i > 0; i--) {
      let shuf = Math.floor(Math.random() * index);
      temp = this.cards[i];
      this.cards[i] = this.cards[shuf];
      this.cards[shuf] = temp;
    }
  } //Cards shuffled


  addCard(card) {
    this.cards.push(card);
  }


  removeCard() {
    if (this.cards.length > 0) {
      let c = this.cards.pop();
      return c;
    } else
      return 0;
  }

}

export default Deck;
