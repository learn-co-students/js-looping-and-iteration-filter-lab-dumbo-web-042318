// Code your solution in this file
function findMatching(drivers, name){
  const matchingDrivers = drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  });

  return matchingDrivers;
}

function fuzzyMatch(drivers, letters){
  const matchingDrivers = drivers.filter(function(driver){
      return driver.startsWith(letters);
  });

  return matchingDrivers;
}

function matchName(drivers, name){
  const matchingDrivers = drivers.filter(function(driverObj){
    return driverObj.name === name;
  });

  return matchingDrivers;
}
