class Person {
  _name;
  _department;
  constructor(name: string, department: Department) {
    this._name = name;
    this._department = department;
  }
  get name() {
    return this._name;
  }

  // 위임메소드
  get manager() {
    return this._department.manager;
  }
}

// 위임객체
class Department {
  _manager;
  constructor(manager: string) {
    this._manager = manager;
  }
  get manager() {
    return this._manager;
  }
}

const jn = new Person('재남', new Department('로이'));
console.log(jn.manager);

export {};
