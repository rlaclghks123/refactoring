import { PeopleInterface } from './리팩토링전';

const PEOPLE = [
  { age: 30, salary: 4000 },
  { age: 40, salary: 7000 },
  { age: 24, salary: 2800 },
  { age: 37, salary: 4600 },
  { age: 27, salary: 3200 },
];

const youngestAge = (people: PeopleInterface[]) => Math.min(...people.map((p) => p.age));

const totalSalary = (people: PeopleInterface[]) => people.reduce((total, p) => total + p.salary, 0);

const printInfos = (people: PeopleInterface[]) => {
  return `최연소: ${youngestAge(people)}, 총급여: ${totalSalary(people)}`;
};

console.log(printInfos(PEOPLE));
