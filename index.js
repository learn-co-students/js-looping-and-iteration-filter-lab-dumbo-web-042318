// Code your solution in this file
function findMatching(arr, name){
  return arr.filter(function (findName){ //filter by funtion
    return findName.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(arr, name){
  return arr.filter(function(findName){
    return findName.slice(0,name.length).toLowerCase() === name.toLowerCase()
  });
}

function matchName(arr, name){
return arr.filter( function (driver){ //filter by funtion
  return driver.name.toLowerCase() === name.toLowerCase();
});
}
