// Code your solution in this file
function findMatching(drivers, string){
  // * `findMatching`- This function takes an array of `drivers` and a `string` as arguments, and returns the matching list of drivers. The function should be case insensitive.
    newarray =[];
  for (let i=0; i < drivers.length; i++ ){
    if (drivers[i].toLowerCase() === string.toLowerCase()){
      newarray.push(drivers[i]);
    }
  }
  return newarray;
}
// `fuzzyMatch` - This function takes an array of `drivers` and a `string` as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, string){
  myArray = [];
  for(let i = 0; i < drivers.length; i++){
    if (drivers[i].charAt(0) === string.charAt(0)){
      myArray.push(drivers[i]);
    }
  }
  return myArray;
}
// * `matchName` - This function takes an array of `drivers` and a `string` as arguments. In this function, each element of the `drivers` array is a JavaScript object that has a property of `name`. The function should return each element whose `name` property matches the provided `string` argument.

function matchName(drivers, string){
  return drivers.filter(driver => driver.name === string);
}
