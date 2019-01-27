function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  desiredDrivers = drivers.filter(driver => driver.revenue > revenue)
  return desiredDrivers.map( drivr =>
    drivr = drivr.name
  )
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
