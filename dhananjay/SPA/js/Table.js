function Table() {

    this.Players = [];
    
    function addPlayer() {
        _.each(playerName, function(name, key) {
            var newPlayer = new Player(name, key);
            Players.push(newPlayer);
        });
    }
    addPlayer();

    function distributeCard(shuffledCards) {

    var cards = shuffledCards;


    var cardMod = cards.length % this.Players.length;
    var noOfCardPerPlayer = ((cards.length - cardMod) / this.Players.length);

    for (var i = 0; i < noOfCardPerPlayer; i++) {
        (function(i) {
            setTimeout(function() {

                for (var j = 0; j < Players.length; j++) {
                    var cardPickFromDeck = removeCardFromDeck();
                    Players[j].hand.push(cardPickFromDeck);
                }
                document.getElementById("displayPlayers").innerHTML = "";
                handValue();

            }, 1000 * i);
        }(i));
    }

    function removeCardFromDeck() {
        var randCard = Math.floor(Math.random() * cards.length);
        var cardPickFromDeck = cards[randCard];
        cards.splice(randCard, 1);

        return cardPickFromDeck;
    }

}

    var playersCount = this.Players.length;
    var maxPlayers = 0;

  
        startGame(8);
        function startGame(maxPlayers) {

        if (playersCount <= maxPlayers) {

            console.log("Game Started");


            var D = new Deck();
            D.makeDeck();
            var shuffledCards = D.shuffle(this.cards);

            console.log("Cards Shuffled");
            distributeCard(shuffledCards);

    
    

        } else {
            document.getElementById('displayPlayers').innerHTML = '<h3>Sorry! only ' + maxPlayers + ' are allowed</h3>';
        }

       }
    
}
