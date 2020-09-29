const returnFirstTwoDrivers = function(array){
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
  return function(fare){
    return num*fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
}
