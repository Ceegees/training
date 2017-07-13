function Card(values, suites) {
    this.values = values;
    this.suites = suites;
    this.name = suites + '' + values;

    // console.log(this.name + '\t');
    document.write(this.name + "\t");
}
