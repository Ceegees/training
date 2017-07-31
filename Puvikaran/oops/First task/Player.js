function Player(id, name) {

    this.id = id;
    this.name = name;
    this.hand = [];


    this.addCard = function(card) {
        this.hand.push(card);
    };

    this.removeCard = function() {

        if (this.hand.length > 0)
            return this.hand.pop();
        else
            return 0;
    };

    this.handValue = function() {

        var total = 0;
        var cardValue = 0;
        for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i] == 0)
                cardValue = 0;
            else{
                cardValue = this.hand[i].getValue();
              }
            total = total + parseInt(cardValue);
        }
        return total;
    };

}
