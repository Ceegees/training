function Table() {
    this.playingCards = [];
    this.deck = [];
    this.Players = [];

    function Deck() {
        this.newDeck = makeDeck();
        this.shuffleDeck = this.deck; // Shuffle(deck);
        this.addCard = addCard();
        this.removeCard = removeCard();

        function Card(values, suites) {
            this.values = values;
            this.suites = suites;
            this.name = suites + '' + values;

            // console.log(this.name + '\t');
            document.write(this.name + "\t");
        }

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

        function addCard(deck) {
            this.playingCards.push(deck);
        }

        function removeCard() {
            if (this.playingCards.length > 0)
                return this.playingCards.shift();
            else
                return null;
        }

    }
    Deck();

    function Player(name, id) {
        this.id = id;
        this.name = name;
        this.hand = [];
        this.totalValues = 0;
    }
    addPlayer();

    function addPlayer() {

        var playerName = ['Samuel', 'Nithin', 'Emil', 'Dhananjay', 'Godly'];

        for (var i = 0; i < playerName.length; i++) {
            var newPlayer = new Player(playerName[i], i);
            Players.push(newPlayer);

        }
        console.log(Players);
    }
    var noplayers = Players.length;
    if (noplayers < 6) {

        distributeCard(deck);

    } else {
        console.log("Enter max 6 Player");
    }

    function distributeCard() {

        var cardMod = this.deck.length % Players.length;
        var distCount = ((this.deck.length - cardMod) / Players.length);

        for (var i = 0; i < distCount; i++) {
            for (var j = 0; j < Players.length; j++) {
                var takenCard = takeCard();
                Players[j].hand.push(takenCard);
            }
        }
    }

    function takeCard() {
        var randCard = Math.floor(Math.random() * deck.length);
        var takenCard = deck[randCard];
        deck.splice(randCard, 1);

        return takenCard;
    }


    function getCardValue() {

        var playersCount = Players.length;
        var sortedPlayers = undefined;

        for (var p = 0; p < playersCount; p++) {
            for (var i = 0; i < Players[p].hand.length; i++) {

                switch (Players[p].hand[i].values) {

                    case "2":
                        Players[p].hand[i].values = 2;

                        break;
                    case "3":
                        Players[p].hand[i].values = 3;

                        break;
                    case "4":
                        Players[p].hand[i].values = 4;

                        break;
                    case "5":
                        Players[p].hand[i].values = 5;

                        break;
                    case "6":
                        Players[p].hand[i].values = 6;

                        break;
                    case "7":
                        Players[p].hand[i].values = 7;

                        break;
                    case "8":
                        Players[p].hand[i].values = 8;

                        break;
                    case "9":
                        Players[p].hand[i].values = 9;

                        break;
                    case "10":
                        Players[p].hand[i].values = 10;

                        break;
                    case "J":
                        Players[p].hand[i].values = 11;

                        break;
                    case "Q":
                        Players[p].hand[i].values = 12;

                        break;
                    case "K":
                        Players[p].hand[i].values = 13;

                        break;
                    case "A":
                        Players[p].hand[i].values = 14;

                        break;

                }

                Players[p].totalValues += Players[p].hand[i].values;

            }
            console.log(Players[p]);
        }
        Players.sort(function(a, b) {

            return a.totalValues - b.totalValues;
        });
        console.log(Players);

    }
    getCardValue();

}
Table();
