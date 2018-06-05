// Code your solution in this file
function findMatching(drivers, string) {
  const newDrivers = [];

  for (const driver of drivers) {
    if (driver.toUpperCase() === string.toUpperCase()) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
};

function fuzzyMatch(drivers, string) {
  const newDrivers = [];
  let beginning;

  for (const driver of drivers) {
    beginning = driver.slice(0, string.length);
    if (beginning === string) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
};

function matchName(drivers, string) {
  const newDrivers = [];

  for (const driver of drivers) {
    if (driver['name'] === string) {
      newDrivers.push(driver);
    }
  }
  return newDrivers;
};
