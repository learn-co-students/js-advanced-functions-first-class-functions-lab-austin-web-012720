/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const returnFirstTwoDrivers = function (ary) {
  return ary.slice(0, 2);
};

const returnLastTwoDrivers = function (ary) {
  return ary.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function (value) {
    return int * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, func) {
  return func(drivers);
};
