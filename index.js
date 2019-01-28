// Code your solution here:

function driversWithRevenueOver(array, revenue) {
  return array.filter(function (driver) { return driver.revenue > revenue })
}

function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(function(driver) {return driver.name})
}

function exactMatch(array, obj) {
  return array.filter(function (driver) {return obj[Object.keys(obj)] === driver[Object.keys(obj)]})
}

function exactMatchToList(array, obj) {
  return exactMatch(array, obj).map(function (driver) {return driver.name})
}
