class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    const argYear = new Date(year, 0);
    console.log(argYear.year);
  }
}
