function Table() {
    this.Players = [];
    this.noplayers = Players.length;

    if (noplayers < 6) {
        document.write("<b>New Deck</b> <br/> <br/>");
        addPlayer();
        Deck();

    } else {
        // console.log("Enter max 6 Player");
        document.write("Enter max 6 Player");
    }


    document.write("<br/> <br/> <b>Shuffled Deck</b> <br/> <br/>");
    for (var i = 0; i < deck.length; i++) {
        document.write(deck[i].name + "\t");
    }

    for (var i = 0; i < Players.length; i++) {
        //console.log(Players[i].name+'\n');
        document.write("<br/><br/><b>" + Players[i].name + "</b><br/>");
        for (var j = 0; j < Players[i].hand.length; j++) {
            document.write(Players[i].hand[j].name + "\t");
            // console.log(Players[i].hand[j].name);
        }

    }

    function Card(values, suites) {
        this.value = values;
        this.suites = suites;
        this.name = suites + '' + values;

        //console.log(this.name + '\t');
        document.write(this.name + "\t");
    }

    function Deck() {

        this.deck = [];
        this.newDeck = makeDeck();
        this.shuffleDeck = Shuffle();
        this.distCard = distributeCard();
        /*this.addCard = deckAddCard;
          this.removeCard = deckRemoveCard;
        	this.cardCount = deckCardCount;
        */
        //console.log("deck function");

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

    function Shuffle(deck) {

        var index, temp, shuffleIndex;

        for (index = this.deck.length - 1; index > 0; index--) {

            shuffleIndex = Math.floor(Math.random() * (index + 1));
            temp = this.deck[index];
            this.deck[index] = this.deck[shuffleIndex];
            this.deck[shuffleIndex] = temp;
        }
        return this;
    }


    function distributeCard() {
        var distCount = (deck.length / Players.length);
        // var c = 0;
        // for (var i = 0; i < distCount; i++) {
        //     for (var p = 0; p < Players.length; p++) {
        //         Players[p].hand.push(deck[c]);
        //         c++;
        //     }
        // }

        //console.log(Players[0].name,Players[0].hand[0].name);
        console.log(Players);
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


    function Player(name, id) {
        this.id = id;
        this.name = name;
        this.hand = [];
    }

    function addPlayer() {

        var playerName = ['Samuel', 'Puvi', 'Emil', 'Dhananjay'];

        for (var i = 0; i < playerName.length; i++) {
            //var name = document.getElementsById('t_'+i).value;
            var newPlayer = new Player(playerName[i], i);
            Players.push(newPlayer);

        }
    }

}
Table();
