class Card {
    constructor(value, suite) {
        this.value = value;
        this.suite = suite;
        this.name = `${suite}${value}`;

    }
    getValue() {

        switch (this.value) {
            case 'J':
                return 11;
                break;
            case 'Q':
                return 12;
                break;
            case 'K':
                return 13;
                break;
            case 'A':
                return 14;
                break;
            default:
                return this.value;
        }

    }

}

export default Card;
