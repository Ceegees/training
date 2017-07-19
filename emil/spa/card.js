function Card(values, suites) {
    this.values = values;
    this.suites = suites;
    this.name = suites + '' + values;
    document.write(this.name + "\t");
}
