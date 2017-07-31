function Card(value, suite) {
    this.value = value;
    this.suite = suite;
    this.name = suite + '' + value;

}



function getValue() {


    for (var i = 0; i < this.cards.length; i++) {

        switch (cards[i].value) {

            case "2":
                cards[i].value = 2;
                break;
            case "3":
                cards[i].value = 3;
                break;
            case "4":
                cards[i].value = 4;
                break;
            case "5":
                cards[i].value = 5;
                break;
            case "6":
                cards[i].value = 6;
                break;
            case "7":
                cards[i].value = 7;
                break;
            case "8":
                cards[i].value = 8;
                break;
            case "9":
                cards[i].value = 9;
                break;
            case "10":
                cards[i].value = 10;
                break;
            case "J":
                cards[i].value = 11;
                break;
            case "Q":
                cards[i].value = 12;
                break;
            case "K":
                cards[i].value = 13;
                break;
            case "A":
                cards[i].value = 14;
                break;

        }

        var cardValue = cards[i].value;
        console.log(cardValue);
    }

}
// getValue();
