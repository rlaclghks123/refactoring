export interface Employee {
  onVacation: number;
  seniority: number;
}

export const func = (anEmployee: Employee) => {
  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) return 1;
  }
  return 0.5;
};
