// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
};

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultipler(fareValue) {
//   return function (value) {
//     return fareValue * value;
//   };
// };

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};