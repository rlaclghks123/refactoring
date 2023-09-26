import { Employee } from './리팩토링전2';

const func = (anEmployee: Employee) => {
  if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
  return 0.5;
};
