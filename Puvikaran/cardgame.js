function Table() {
    //this.cards = [];
    this.deck = [];
    this.Players = [];

    //this.cardsInHand = cardsInHand();

    function Deck() {
        this.newDeck = makeDeck();
        this.shuffleDeck = Shuffle(deck);
        this.addCard = addCard();
        this.removeCard = removeCard();
        //this.cardCount = cardCount;

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
            this.deck.push(deck);
        }

        function removeCard() {
            if (this.deck.length > 0)
                return this.deck.shift();
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

        var playerName = ['Samuel', 'Nithin', 'Emil', 'Dhananjay','Godly'];

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
        var cardMod = deck.length % Players.length;
        var distCount = ((deck.length - cardMod) / Players.length);

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


}
Table();
