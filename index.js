// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    let new_array = [];
    new_array.push(array[0]);
    new_array.push(array[1]);
    return new_array;

};

const returnLastTwoDrivers = (array) => {
    let new_array = [];
    let last = array.pop();
    let secondLast = array.pop()
    new_array.push(secondLast);
    new_array.push(last);
    return new_array;
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = (integer) => {
    return (fare) => {
        return fare * integer;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, fn) => {
    return fn(array);
}