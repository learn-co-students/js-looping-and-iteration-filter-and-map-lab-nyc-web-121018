// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  let arr = []
  drivers.filter(function (driver) {
    if (driver.revenue > rev){
      arr.push(driver)
    }
  });
  return arr
}

function driverNamesWithRevenueOver(drivers, rev) {
  let dName = []
  let d = driversWithRevenueOver(drivers, rev)
  d.filter(function (driver) {
    dName.push(driver.name)
  })
  return dName
}

function exactMatch(drivers, d) {
  let matches = []
  drivers.filter(function (driver) {
    for (const key in d){
      if (driver[key] === d[key]) {
        matches.push(driver)
      }
    }
  })
  return matches;
}

function exactMatchToList(drivers, d) {
  let matches = exactMatch(drivers, d)
  return matches.map(function (drivers) {
    return drivers.name;
  });
}
