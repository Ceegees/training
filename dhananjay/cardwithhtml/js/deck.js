function Deck(){

      var noOfCards;
      var noOfSuits;

      this.newDeck = makeDeck();
      this.shuffleDeck = Shuffle();
      this.addCard = addCard();
      this.removeCard = removeCard();
      
      
      function makeDeck(){
      var suites = ['Heart',
                  'Diamonds',
                  'Spades',
                  'Clubs'];
          
      var values = ['A', 
                  2, 
                  3, 
                  4, 
                  5, 
                  6, 
                  7, 
                  8, 
                  9, 
                  10, 
                  'J',
                  'Q', 
                  'K'];
       card = [];
    
       for(var i=0; i < suites.length; i++)
         {
            for (var j=0; j < values.length;j++){

            var newcard = new Card(values[j],suites[i]);
              
            card.push(newcard);
             
           }
        }
       return card;      
    
   }
    
   function Shuffle(){
    
      var i, j, temp;

       for (i = this.card.length - 1;  i > 0;  i--){

       j = Math.floor(Math.random() * (i+1));
         
       temp = this.card[i];
       this.card[i] = this.card[j];
       this.card[j] = temp;
     }

      console.log(card);
    }
    
    function addCard(card) {
      card.push(card);
    }

    function removeCard() {
      if (this.card.length > 0) {
        return this.card.shift();
      }
      else {
        return null;
      }
    }
    
  }
 Deck();