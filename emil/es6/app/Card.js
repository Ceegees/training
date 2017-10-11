class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
    this.name = `${suite}${value}`;
  }


  getValue() {
    if (this.value == 'A')
      return 14;
    else if (this.value == 'K')
      return 13;
    else if (this.value == 'Q')
      return 12;
    else if (this.value == 'J')
      return 11;
    else
      return this.value;
  }
}


export default Card;
