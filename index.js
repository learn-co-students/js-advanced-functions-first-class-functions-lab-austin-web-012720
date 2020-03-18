// Code your solution in this file!


function returnFirstTwoDrivers(drivers) {
  const inner = function () {
    return [drivers[0], drivers[1]];
  }
  return inner()
}

function returnLastTwoDrivers(drivers) {
  const inner = function() {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
  }
  return inner();
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const double = createFareMultiplier(2);

function fareDoubler(amount) {
  return double(amount);
}

const triple = createFareMultiplier(3);

function fareTripler(amount) {
  return triple(amount);
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
