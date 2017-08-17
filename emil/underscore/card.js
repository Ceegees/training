function Card(suite, value) {
  this.suite = suite;
  this.value = value;
  this.getValue = function() {
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
}
