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
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    console.log(eastWest)
    const beginningStreet = this.beginningLocation.vertical;
    const beginningAve = this.beginningLocation.horizontal;
    const endingStreet = this.endingLocation.vertical;
    const endingAve = this.endingLocation.horizontal;
    console.log(endingAve)

    const streetsTravelled = Math.abs(endingStreet - beginningStreet);

    var i;
    for (i = 0; i < 7; i++) {
        if (beginningAve == eastWest[i]) {
          const begAveNum = i;
        }
        if (endingAve == eastWest[i]) {
          const endAveNum = i;
        }
    }

    const aveTravelled = Math.abs(endAveNum - begAveNum);
    console.log("begAveNum: " + begAveNum);
    console.console.log("endAveNum: " + endAveNum);
    return streetsTravelled + aveTravelled;
  }
}
