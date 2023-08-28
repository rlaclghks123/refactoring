export interface Customer {
  name: string;
  location: string;
}

export type Result = [string, string];

// 본문 reportLines함수로 인라인
// const gatherCustomerData = (out: Result[], aCustomer: Customer) => {
//   out.push(['name', aCustomer.name]);
//   out.push(['location', aCustomer.location]);
// };
const reportLines = (aCustomer: Customer) => {
  const lines = [];
  // gatherCustomerData(lines, aCustomer);
  return lines;
};

const customerA = { name: 'roy', location: 'seoul' };
const customerB = { name: 'jay', location: 'incheon' };
console.log(reportLines(customerA));
console.log(reportLines(customerB));
