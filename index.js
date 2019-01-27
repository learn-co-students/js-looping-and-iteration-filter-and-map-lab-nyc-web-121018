// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(drive) {
    return drive.revenue > revenue
  });
};

function driverNamesWithRevenueOver(driver, revenue) {
  let drivers = driver.filter(function(drive) {
    return drive.revenue > revenue
  });
  return drivers.map(function(drive) {return drive.name});
};

function exactMatch(array, object) {
  key = Object.keys(object);
  function findAttribute(array) {
      return array[key] === object[key];
  }
  return array.filter(findAttribute)
};

function exactMatchToList(array, object) {
  return exactMatch(array, object)
    .map(function(driver) {
      return driver.name;
    });
};
