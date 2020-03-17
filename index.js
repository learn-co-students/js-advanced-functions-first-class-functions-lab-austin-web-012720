const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(multiplier) {
        return integer * multiplier
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(2)

}

const fareTripler = function(fare) {
    return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(drivers, someFunc) {
    return someFunc(drivers)
}
