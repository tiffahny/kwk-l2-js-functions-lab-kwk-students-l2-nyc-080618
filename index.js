// Code your solution in this file!

function distanceFromHqInBlocks(location){
  var result = Math.abs(location - 42)
  return result
}

function distanceFromHqInFeet(location) {
  var result = distanceFromHqInBlocks(location) * 264
  return result
}

