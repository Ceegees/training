import playerName from './index.js';
import Player from './Player.js';
import Deck from './Deck.js';


class Table {
  constructor() {
    this.players = [];
    this.d = new Deck();
    this.p = new Player();
  }


  joinPlayers() {
    console.log(`The players from UI ${playerName}`);
    for (let i = 0; i < playerName.length; i++) {
      let name = new Player(playerName[i], i);
      this.players.push(name);
    }
    this.startGame();
  }

  startGame() {
    let pcount = this.players.length;

    if (pcount < 3 || pcount > 6)
      console.log("Insufficient number of players");


    else {
      console.log("The game started on here");
      this.d.shuffle();
      console.log("The cards get shuffled");
      let ptr = this;
      let t = 0;
      let timer = setInterval(() => {
        t++;
        ptr.distributeCard();
        while (t == 52)
          clearInterval(timer);
      }, 1000);
    }
  }


  distributeCard() {
    let pcount = this.players.length;
    let ccount = this.d.cards.length;
    let card = this.d.removeCard();
    this.players[ccount % pcount].addCard(card);
    for (let i = 0; i < pcount; i++) {
      this.players[i].handValues = this.players[i].handValue();
      console.log(`Player ${this.players[i].name} handvalues ${this.players[i].handValues}`);
    }
    console.log("The players list going to display");
    let sortPlayers = _.sortBy(this.players, 'handValues');
    sortPlayers.reverse();
    return displayPlayers(sortPlayers);
  }
}

export default Table;
