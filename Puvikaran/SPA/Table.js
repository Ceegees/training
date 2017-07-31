function Table() {

    this.Players = [];

    function addPlayer() {
        _.each(playerName, function(name, key) {
            var newPlayer = new Player(name, key);
            Players.push(newPlayer);
        });
    }
    addPlayer();

    // console.log(this.Players);

    var playersCount = this.Players.length;
    var maxPlayers = 0;


    if (playersCount < 0) {
        console.log("No! Players Available ");
    } else {
        startGame(6);

    }

    function startGame(maxPlayers) {


        if (playersCount <= maxPlayers) {


            console.log("Game Started");

            var D = new Deck();
            D.makeDeck();
            var shuffledCards = D.shuffle(this.cards);

            console.log("Cards Shuffled");
             distributeCard(shuffledCards);


        } else {
            document.getElementById("displayPlayers").innerHTML = '<h3 class="text-danger text-center">Sorry! only ' + maxPlayers + ' Players are allowed</h3>';
            // console.log("Sorry! only " + maxPlayers + " are allowed");
        }



    }


}
