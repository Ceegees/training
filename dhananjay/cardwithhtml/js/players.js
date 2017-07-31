  function Player(name) {
        this.name = name;
        this.hand = [];

  }

  this.Players = [];
  this.noOfPlayers = Players.length;
    
  function addPlayer() {
    
        var playerName = ['A', 'B','C','D','E'];

        for (var i = 0; i < playerName.length; i++) {
            var newPlayer = new Player(playerName[i], i);
            Players.push(newPlayer);

        }
    
    var noOfP = playerName.length;
    console.log("No of Players on the table is " + noOfP + " And players are");
    console.log(playerName);
    
    
    if(noOfP <= 6){
      console.log("lets distribute the card among the above players");
      //console.log(deck.length);
      
      function cardDistribution(){
        
        var remainingCard = (card.length % noOfP );
        var cardToDist = ((card.length - remainingCard) / noOfP );
        for (var i = 0; i < cardToDist; i++){
          
          for (var j = 0; j < noOfP; j++){
            
            var cardTaken = cardAccepted();
            Players[j].hand.push(cardTaken);
          }
        }
        
        function cardAccepted() {
          
          var randCard = Math.floor(Math.random() * card.length);
          var cardTaken = card[randCard];
          card.splice(cardTaken, 1);
          
          return cardTaken;
        }
          
        console.log(this.Players);



        console.log("lets calculate the handValue  of the each players");
          
        for (var j = 0; j < noOfP; j++){
              
               for (var i = 0; i < cardToDist; i++) {
                
               Players[j].hand[i].value;
                   
                switch (Players[j].hand[i].value) {
                        
                    case "A":
                        Players[j].hand[i].value =  14;

                        break;
                        
                    case 2:
                      Players[j].hand[i].value =  2;
 
                        break;
                    case 3:
                        Players[j].hand[i].value =  3;

                        break;
                    case 4:
                        Players[j].hand[i].value = 4;

                        break;
                    case 5:
                        Players[j].hand[i].value = 5;

                        break;
                    case 6:
                        Players[j].hand[i].value =  6;

                        break;
                    case 7:
                        Players[j].hand[i].value =  7;

                        break;
                    case 8:
                        Players[j].hand[i].value =  8;

                        break;
                    case 9:
                        Players[j].hand[i].value =  9;

                        break;
                    case 10:
                        Players[j].hand[i].value =  10;

                        break;
                    case "J":
                        Players[j].hand[i].value =  11;

                        break;
                    case "Q":
                        Players[j].hand[i].value =  12;

                        break;
                    case "K":
                        Players[j].hand[i].value =  13;

                        break;
                    

                   
                }
               
                   
                  
                }
            
               
               var scoresOfPlayers = [Players[j].hand[0].value, Players[j].hand[1].value, Players[j].hand[2].value,
                                      Players[j].hand[3].value, Players[j].hand[4].value, Players[j].hand[5].value, 
                                      Players[j].hand[6].value, Players[j].hand[7].value, Players[j].hand[8].value, 
                                      Players[j].hand[9].value].reduce(add, 0);
                   
      
               function add(a, b) {
                 
               return a + b;
                   
                 }
               
               // console.log(scoresOfPlayers);
               function handValue(scoresOfPlayers) {
                   
               var scoresOfPlayers = [Players[j].hand[0].value, Players[j].hand[1].value, Players[j].hand[2].value,
                                      Players[j].hand[3].value, Players[j].hand[4].value, Players[j].hand[5].value, 
                                      Players[j].hand[6].value, Players[j].hand[7].value, Players[j].hand[8].value, 
                                      Players[j].hand[9].value];
            
               scoresOfPlayers.sort(function(a, b){return a-b});
            
               console.log(scoresOfPlayers);
               
               var s = 0;
                   for(var i = 0; i < scoresOfPlayers.length; i++) {
                       s = s + scoresOfPlayers[i];
                   }
                   console.log(s)
              
                  
              }
              handValue(scoresOfPlayers);
             }
             
             
      }
      cardDistribution();
      
       
    
    } else {
        console.log("Sorry!! we can have maximum of 6 players on table");
    }
    
  }
addPlayer();
  