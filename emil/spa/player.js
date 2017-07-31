function Player(name, id) {
  this.id = id;
  this.name = name;
  this.hand = [];
  this.totalValues = 0;
}

function distributeCard(shuffled) {
  var deck = shuffled;
  console.log("entered distribution");
  var cardMod = deck.length % this.Players.length;
  var distCount = ((deck.length - cardMod) / this.Players.length);

  for (var i = 0; i < distCount; i++) {
    for (var j = 0; j < Players.length; j++) {
      var takenCard = takeCard();
      Players[j].hand.push(takenCard);
    }
  }
  console.log(Players);

  function takeCard() {
    var randCard = Math.floor(Math.random() * deck.length);
    var takenCard = deck[randCard];
    deck.splice(randCard, 1);

    return takenCard;
  }
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
    Players.sort(function(a, b) {

      return a.totalValues - b.totalValues;
    });
    console.log(Players);
  }
}
