interface Person {
  name: string;
  salary: number;
}

const tenPercentRaise = (person: any) => {
  person.salary *= 1.1;
};

const fivePercentRaise = (person: any) => {
  person.salary *= 1.05;
};

const raise = (person: any, factor: number) => {
  person.salary = person.salary.multiply(1 + factor);
};

export {};
