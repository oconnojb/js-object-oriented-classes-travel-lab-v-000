class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    const argDate = new Date(year, 0);
    const argYear = argDate.getFullYear();
    const driverYear = this.startDate.getFullYear();
    return argYear - driverYear;
  }
}
