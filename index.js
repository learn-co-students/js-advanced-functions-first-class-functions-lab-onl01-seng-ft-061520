const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  const len = drivers.length;
  return drivers.slice(len - 2, len);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
  return (fare) => {
    return fare * num;
  };
};

const fareDoubler = (fare) => {
  const doubleFare = createFareMultiplier(2);
  return doubleFare(fare);
};

const fareTripler = (fare) => {
  const tripleFare = createFareMultiplier(3);
  return tripleFare(fare);
};

const selectDifferentDrivers = (drivers, selectDrivers) => {
  return selectDrivers(drivers);
};
