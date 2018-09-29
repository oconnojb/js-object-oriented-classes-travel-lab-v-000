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

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    console.log(this.beginningLocation.vertical)
  }
}
