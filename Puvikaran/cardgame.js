function Table() {
    this.playingCards = [];
    this.deck = [];
    this.Players = [];

    //this.cardsInHand = cardsInHand();

    function Deck() {
        this.newDeck = makeDeck();
        this.shuffleDeck = this.deck; // Shuffle(deck);
        this.addCard = addCard();
        this.removeCard = removeCard();
        //this.cardCount = deckCardCount;

        //console.log("deck function");

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
                    // console.log("card: " + newcard.name);
                    deck.push(newcard);

                }
            }
            // console.log("CURRENT DECK: ", deck);
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
        // var playersCount = Players.length;
        // var count = 0;
        //
        // while(this.deck.length) {
        //   Players[count].hand.push(this.deck.pop());
        //   count++;
        //
        //   if(count == playersCount) {
        //     count = 0;
        //   }
        // }




        var cardMod = this.deck.length % Players.length;
        var distCount = ((this.deck.length - cardMod) / Players.length);

        for (var i = 0; i < distCount; i++) {
            for (var j = 0; j < Players.length; j++) {
                var takenCard = takeCard();
                Players[j].hand.push(takenCard);
                // Players[j].hand.push(deck.pop());
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
        var values = 0;
        var totalValues = 0;

        for (var p = 0, j = Players.length; p < j; p++) {
            for (var i = 0, k = Players[p].hand.length; i < k; i++) {


                switch (Players[p].hand[i].values) {
                    case "2":
                        totalValues = values + 2;

                        break;
                    case "3":
                        totalValues = values + 3;

                        break;
                    case "4":
                        totalValues = values + 4;

                        break;
                    case "5":
                        totalValues = values + 5;

                        break;
                    case "6":
                        totalValues = values + 6;

                        break;
                    case "7":
                        totalValues = values + 7;

                        break;
                    case "8":
                        totalValues = values + 8;

                        break;
                    case "9":
                        totalValues = values + 9;

                        break;
                    case "10":
                        totalValues = values + 10;

                        break;
                    case "J":
                        totalValues = values + 11;

                        break;
                    case "Q":
                        totalValues = values + 12;

                        break;
                    case "K":
                        totalValues = values + 13;

                        break;
                    case "A":
                        totalValues = values + 14;

                        break;

                    default:
                        totalValues = 0;
                        break;
                }

                // values = values + totalValues;
                console.log(totalValues);
            }

        }

    }
    getCardValue();


}
Table();
