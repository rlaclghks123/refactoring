import { Customer, Result } from './리팩토링전2';

const reportLines = (aCustomer: Customer) => {
  const result: Result[] = [];
  result.push(['name', aCustomer.name]);
  result.push(['location', aCustomer.location]);
  return result;
};

const customerA = { name: 'roy', location: 'seoul' };
const customerB = { name: 'jay', location: 'incheon' };

console.log(reportLines(customerA));
console.log(reportLines(customerB));
