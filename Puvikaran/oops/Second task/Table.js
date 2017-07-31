function Table() {
    this.players = [];

    this.joinPlayer = function() {

        for (var i = 0; i < playerName.length; i++) {
            var joiningPlayer = new Player(i, playerName[i]);
            this.players.push(joiningPlayer);
        }
        console.log(this.players);

        this.startGame();

    };

    var deck = new Deck();
    var player = new Player();

    this.leavePlayer = function(index, name) {
        var leavingPlayer = name;
        this.players.splice(index, 1);
        console.log("Player " + leavingPlayer + " left the game ");
    };

    this.startGame = function() {
        console.log("Game Started");
        var maxPlayers = 6;
        var playersCount = this.players.length;


        if (playersCount <= maxPlayers) {

            deck.makeDeck();
            deck.shuffle();
            console.log("Cards Shuffled");

            var that = this;
            var t=0
            var timer = setInterval(function() {
                that.distributeCard();
                t++;
                if (t === 52) {
                  clearInterval(timer);
                }
            }, 2000);

        } else {
            document.getElementById("displayPlayers").innerHTML = '<h3 class="text-danger text-center">Sorry! only ' + maxPlayers + ' Players are allowed</h3>';
            console.log("Sorry! only " + maxPlayers + " are allowed");
        }

    };


    this.distributeCard = function() {

        var cardsCount = deck.cards.length;
        var playersCount = this.players.length;
        var sortedPlayers = [];

        var card = deck.removeCard();
        this.players[cardsCount % playersCount].addCard(card);


        console.log("Cards Distributed");
        console.log("Handsvalue of Players");
        for (var i = 0; i < playersCount; i++) {
            var total = this.players[i].handValue();
            console.log('Player: ' + this.players[i].name + ' Handsvalues: ' + total);

            var s = {
                'Player': this.players[i].name,
                'Handsvalues': total,
                'Handcards': this.players[i].hand
            };
            sortedPlayers.push(s);

            // if (total == 0) {
            //     var name = this.players[i].name;
            //     var index = this.players.indexOf(i);
            //     return this.leavePlayer(index, name);
            // }
        }

        console.log("Players sorted in the ascending order of total card values");
        sortedPlayers.sort(function(a, b) {
            return a.Handsvalues - b.Handsvalues;
        });
        sortedPlayers.reverse();

        return displayPlayers(sortedPlayers);
    };

}
