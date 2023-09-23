import dayjs from 'dayjs';

const plan = {
  summerStart: dayjs('2021-07-01'),
  summerEnd: dayjs('2021-08-31'),
  summerRate: 1000,
  regularRate: 1100,
  regularServiceCharge: 100,
};

const getCharge = (quantity: number, aDate: dayjs.Dayjs) => {
  return summer(aDate) ? summerCharge(quantity) : regularCharge(quantity);
};

const summer = (aDate: dayjs.Dayjs) => {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
};

const summerCharge = (quantity: number) => {
  return quantity * plan.summerRate;
};

const regularCharge = (quantity: number) => {
  return quantity * plan.regularRate + plan.regularServiceCharge;
};

console.log(getCharge(10, dayjs('2021-06-29')));
console.log(getCharge(10, dayjs('2021-08-15')));
