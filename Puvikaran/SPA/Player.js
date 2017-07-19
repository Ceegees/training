function Player(name, id) {

    this.id = id;
    this.name = name;
    this.hand = [];
    this.handValues = 0;

}


function addCard(card) {
    hand.push(card);
}

function removeCard(card) {
    if (hand.length > 0)
        return hand.pop();
    else
        return null;
}

// var T = new Table();
// var Players = T.playersList();
// console.log("players from Table ---->"+ Players);

function distributeCard(shuffledCards) {

    var cards = shuffledCards;
    console.log("Cards Distributed");
    // console.log("Remaining Cards---> ", cards);

    var cardMod = cards.length % this.Players.length;
    var distCount = ((cards.length - cardMod) / this.Players.length);

    for (var i = 0; i < distCount; i++) {
        for (var j = 0; j < Players.length; j++) {
            var takenCard = takeCard();
            Players[j].hand.push(takenCard);
        }
    }


    function takeCard() {
        var randCard = Math.floor(Math.random() * cards.length);
        var takenCard = cards[randCard];
        cards.splice(randCard, 1);

        return takenCard;
    }
    handValue();
}

function handValue() {
    var playersCount = Players.length;

    for (var p = 0; p < playersCount; p++) {
        for (var i = 0; i < Players[p].hand.length; i++) {

            switch (Players[p].hand[i].value) {

                case "2":
                    Players[p].hand[i].value = 2;
                    break;
                case "3":
                    Players[p].hand[i].value = 3;
                    break;
                case "4":
                    Players[p].hand[i].value = 4;
                    break;
                case "5":
                    Players[p].hand[i].value = 5;
                    break;
                case "6":
                    Players[p].hand[i].value = 6;
                    break;
                case "7":
                    Players[p].hand[i].value = 7;
                    break;
                case "8":
                    Players[p].hand[i].value = 8;
                    break;
                case "9":
                    Players[p].hand[i].value = 9;
                    break;
                case "10":
                    Players[p].hand[i].value = 10;
                    break;
                case "J":
                    Players[p].hand[i].value = 11;
                    break;
                case "Q":
                    Players[p].hand[i].value = 12;
                    break;
                case "K":
                    Players[p].hand[i].value = 13;
                    break;
                case "A":
                    Players[p].hand[i].value = 14;
                    break;

            }

            Players[p].handValues += Players[p].hand[i].value;

        }
        console.log(Players[p]);
    }

    sortedPlayers();
}

function sortedPlayers() {
    Players.sort(function(a, b) {

        return a.handValues - b.handValues;
    });

    console.log("Players Sorted based on Hand Values");

    _.each(Players, function(player) {
        console.log(player);
    });
    Players.reverse();

    var compiled = _.template($("#player-template").html(), Players);
    $('#displayPlayers').append(compiled);



    _.each(Players, function(player) {
        player.handValues = 0;
        // console.log(player.name + " => " + player.handValues);
        _.each(player.hand, function(handCard) {
            handCard = 0;
            // console.log(handCard.name);
        });
    });
    // setInterval(Function("Table();"), 12000);
    setTimeout(function() {
        countDown();
    }, 12000);

    function countDown() {
        document.getElementById("displayPlayers").innerHTML = "";
        Table();

    }

}
