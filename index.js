// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let firstTwo = drivers.slice(0,2);
  return firstTwo;

}
const returnLastTwoDrivers = function(drivers){
  let lastTwo = drivers.slice(-2)
  return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(int){
  return function(fare){

    return fare*int;
  }

}
const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare){
  return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(drivers,func){
  return func(drivers)

}
