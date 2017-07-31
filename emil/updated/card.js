function Card(value, suite) {
  this.value = value;
  this.suite = suite;
  this.name = suite + '' + value;
   this.getCardValue = function() {
    if (value == 'A')
      return 14;
    else if (value == 'K')
      return 13;
    else if (value == 'Q')
      return 12;
    else if (value == 'J')
      return 11;
    else
      return value;
  };
  //console.log(value);
}
