class Person {
  _name;
  _department?: Department;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
}

class Department {
  _chargeCode;
  _manager;

  constructor(chargeCode: string, manager: string) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}

const feDev = new Department('FEDEV', '로이');
const jn = new Person('재남');
jn.department = feDev;

console.log(jn.department.manager);

export {};
