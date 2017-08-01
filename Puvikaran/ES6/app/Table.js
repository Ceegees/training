import playerName from './index.js';
import Player from './Player.js';
import Deck from './Deck.js';

const deck = new Deck();
const player = new Player();


class Table {
    constructor() {
        this.players = [];
    }

    joinPlayer() {

        console.log(`playerName from UI ${playerName}`);
        for (let i = 0; i < playerName.length; i++) {
            let joiningPlayer = new Player(i, playerName[i]);
            this.players.push(joiningPlayer);
        }

        console.log("Players", this.players);

        this.startGame();

    }

    leavePlayer(index, name) {
        let leavingPlayer = name;
        this.players.splice(index, 1);
        console.log(`Player ${leavingPlayer} left the game`);
    }

    startGame() {
        let maxPlayers = 6;
        let playersCount = this.players.length;

        if (playersCount <= maxPlayers) {

            console.log("Game Started");
            deck.shuffle();
            console.log("Cards Shuffled");

            let that = this;
            let t = 0;
            let timer = setInterval(() => {
                that.distributeCard();
                t++;
                if (t === 52) {
                    clearInterval(timer);
                }
            }, 2000);


        } else {
            document.getElementById("displayPlayers").innerHTML = `<h3 class="text-danger text-center">Sorry! only ${maxPlayers} Players are allowed</h3>`;
            console.log(`Sorry! only ${maxPlayers} are allowed`);
        }

    }

    distributeCard() {

        let cardsCount = deck.cards.length;
        let playersCount = this.players.length;

        let card = deck.removeCard();
        this.players[cardsCount % playersCount].addCard(card);

        console.log("Cards Distributing...");
        console.log("Handsvalue of Players");
        for (let i = 0; i < playersCount; i++) {
            this.players[i].handValues = this.players[i].handValue();
            console.log(`Player ${this.players[i].name} handvalues ${this.players[i].handValues}`);

            // if (total == 0) {
            //     var name = this.players[i].name;
            //     var index = this.players.indexOf(i);
            //     return this.leavePlayer(index, name);
            // }
        }

        console.log("Players sorted in the ascending order of total card values");
        let sortedPlayers = _.sortBy(this.players, 'handValues');
        sortedPlayers.reverse();

        return displayPlayers(sortedPlayers);
    }

}

export default Table;
