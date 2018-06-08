// Code your solution in this file
// findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, name) {
  // debugger;
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
};


// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver[0] === name[0])
}

//
// matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, name) {
return drivers.filter(driver => driver.name === name)
}
