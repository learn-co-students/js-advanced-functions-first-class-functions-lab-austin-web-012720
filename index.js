const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);      
};

const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
//the above solution creates an array of arrays
//the solution below creates a nice flat array
//const selectingDrivers = [...returnFirstTwoDrivers, ...returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  return (value) => {
    return integer * value;    
  }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, driversFunction) => {
   return driversFunction(array);
};


