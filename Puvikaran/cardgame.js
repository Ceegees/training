function Table() {
    this.Players = [{
        'name': 'Samuel',
        hand: []
    }, {
        'name': 'Puvi',
        hand: []
    }, {
        'name': 'Emil',
        hand: []
    }, {
        'name': 'Dhananjay',
        hand: []
    }];
    this.noplayers = Players.length;

    if (noplayers < 6) {
        addPlayer();

    } else {
        console.log("Enter max 6 Player");
    }

    Deck();

    function Card(values, suites) {
        this.value = values;
        this.suites = suites;
        this.name = suites + '' + values;

        console.log(this.name + '\t');


    }

    function Deck() {

        this.deck = [];
        this.newDeck = makeDeck();
        this.shuffleDeck = Shuffle(deck);
        this.distCard = distributeCard(deck);
        /*this.addCard = deckAddCard;
    this.removeCard = deckRemoveCard;
    this.takeCard = deckTakeCard;
			this.cardCount = deckCardCount;
*/


    }

    function makeDeck() {
        var suites = ['S', 'C', 'H', 'D'];
        var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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
        //  var shuffled = [];

        for (index = this.deck.length - 1; index > 0; index--) {

            shuffleIndex = Math.floor(Math.random() * (index + 1));
            temp = this.deck[index];
            this.deck[index] = this.deck[shuffleIndex];
            this.deck[shuffleIndex] = temp;
        }

        console.log(deck);

        return this;
    }

    function distributeCard() {
        var distCount = (deck.length / Players.length);
        var c = deck.length;
        for (var i = 0; i < distCount; i++) {
            for (var p = 0; p < Players.length; p++) {
                Players[p].hand.push(deck[c]);
                c--;
            }
        }

        console.log(Players);
    }

    function Player(name) {
        //this.id = id;
        this.name = name;
        //console.log(this.name);

    }

    function addPlayer() {
        for (var i = 0; i < Players.length; i++) {

            var newPlayer = new Player(Players[i]);
            //this.Players.push(newPlayer);

        }

        //return Players;

    }

}
Table();
