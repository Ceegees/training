function Table() {
  
  var card = [];
  var Players = [];

  var d = new Deck();
  d.makeDeck();
  d.Shuffle();

  var addP = new addPlayer();

  function startGame(){

  	if ( noOfP <= 6) {
          addPlayer();
  	}
  	else {
        console.log("Sorry!! we can have maximum of 6 players on table");
    }
  }

}
Table();