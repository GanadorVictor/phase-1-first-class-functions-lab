

function returnFirstTwoDrivers(drivers) {
    return drivers.slice `[:2]`; /
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2); 
}

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier; 
    };
}

function fareDoubler(fare) {
    return fare * 2; }

function fareTripler(fare) {
    return fare * 3; 
}

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers); 
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
    selectingDrivers,
};
