export type Employee = typeof employee1;

export const employee1 = {
  seniority: 1,
  monthsDisabled: 10,
  isPartTime: false,
};

export const employee2 = {
  seniority: 5,
  monthsDisabled: 15,
  isPartTime: false,
};

export const employee3 = {
  seniority: 1,
  monthsDisabled: 5,
  isPartTime: true,
};

export const employee4 = {
  seniority: 5,
  monthsDisabled: 10,
  isPartTime: false,
};

const disabilityAmount = (anEmployee: Employee) => {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  // 장애 수당 계산
  return 10;
};

console.log(disabilityAmount(employee1));
console.log(disabilityAmount(employee2));
console.log(disabilityAmount(employee3));
console.log(disabilityAmount(employee4));

export {};
