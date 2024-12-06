const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0,2)
}
console.log(returnFirstTwoDrivers(['Antonia','Nuru','Amari','Mo']))   

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
console.log(returnLastTwoDrivers(['Antonia','Nuru','Amari','Mo']))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(10))

const fareTripler = createFareMultiplier(3)
console.log(fareTripler(10))

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers); 
  }
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 