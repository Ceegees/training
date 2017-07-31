function Card(value, suite) {
    this.value = value;
    this.suite = suite;
    this.name = suite + '' + value;

    this.getValue = function() {

        switch (value) {
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
                return value;

        }

    };

}
