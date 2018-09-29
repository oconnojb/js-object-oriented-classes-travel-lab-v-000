class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = new Date(date);
  }
 
  startDate() {
    return this.date;
  }
}
