function All(){
  this.deck=deck;
  this.players=players;
}
function Card(ranks,suits)
 {
 this.rank=ranks;
 this.suit=suits;
 this.name=this.rank+''+this.suit;
 document.write(this.name +' ');
 }
function Deck()
 {
 this.deck=[];
 this.makeDeck=makeDeck();
 this.shuffle=shuffle(deck);
 //this.distribute=distribute(deck);
function  makeDeck()
 {
 var ranks = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A");
 var suits = new Array("C", "D", "H", "S");
 // t  his.deck = new Array(52);
 var i,j;
 document.write("Cards Made\n");
 for(i=0;i<suits.length;i++){
  for(j=0;j<ranks.length;j++){
   this.deck[i*ranks.length+j] = new Card(ranks[j],suits[i]);

     }
    }
	    //console.log(deck);


 }

function shuffle(deck)
 {
  var i,n=10,j,temp;
  for(i=0;i<n;i++){
  for(j=0;j<this.deck.length;j++){
  k=Math.floor(Math.random()*this.deck.length);
  temp=this.deck[j];
  this.deck[j]=this.deck[k];
  this.deck[k]=temp;
  }
  }
  document.write("Cards Shuffled \n");
    // console.log(deck);
    for(var i = 0; i < this.deck.length; i++) {
      document.write(deck[i].name+' ');
    }
  }
}
Deck();
  function Player(players){
    this.players=players;
    this.hand=[];
    }
addplayer();
  function addplayer()
    {
      var players=[];
      var nplayer,i,j;
      var playerlist=['v','w','x','y','z'];
      nplayer=playerlist.length;
      for(i=0;i<nplayer;i++){
        var newplayer=new Player(playerlist[i]);
        console.log(newplayer.players);
        //console.log(newplayer.this.hand);
      }
      for(i=0;i<nplayer;i++)
         {
          for(j=i;j<this.deck.length;j+=nplayer)
           {
           players.hand[i].push(this.deck[j].name);
           }

         }
    }
All();
