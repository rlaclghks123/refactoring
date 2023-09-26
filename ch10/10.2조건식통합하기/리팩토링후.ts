import { Employee, employee1, employee2, employee3, employee4 } from './리팩토링전.ts';

const disabilityAmount = (anEmployee: Employee) => {
  if (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime) return 0;
  // 장애 수당 계산
  return 400;
};

console.log(disabilityAmount(employee1));
console.log(disabilityAmount(employee2));
console.log(disabilityAmount(employee3));
console.log(disabilityAmount(employee4));

export {};
