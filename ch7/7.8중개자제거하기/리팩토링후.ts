class Person2 {
  _name;
  _department;
  constructor(name: string, department: Department2) {
    this._name = name;
    this._department = department;
  }
  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }
}

class Department2 {
  _manager;
  constructor(manager: string) {
    this._manager = manager;
  }
  get manager() {
    return this._manager;
  }
}

const jn2 = new Person2('재남', new Department2('로이'));
console.log(jn2.department.manager);
