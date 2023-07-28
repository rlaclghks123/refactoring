const findPerson = (people) => {
  const candidate = ['Don', 'John', 'Kent'];
  return people.find((person) => candidate.includes(person)) || '';
};
console.log(findPerson(['Roy', 'Jay', 'Don', 'Kay', 'John', 'Peter', 'Kent', 'Clark']));
