class Person {
  _name;
  _department;
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set department(arg) {
    this._department = arg;
  }

  get manager() {
    return this._department.manager;
  }
}

class Department {
  _chargeCode;
  _manager;
  constructor(chargeCode, manager) {
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

// const feDev = new Department('FEDEV', '로이');
// const jn = new Person('재남');
// jn.department = feDev;

// console.log(jn.manager);

// // ------

// // 리팩토링 이전
// javascript;

// class Person {
//   #name;
//   #department;
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name;
//   }
//   get department() {
//     return this.#department;
//   }
//   set department(arg) {
//     this.#department = arg;
//   }
// }

// class Department {
//   #chargeCode;
//   #manager;
//   constructor(chargeCode, manager) {
//     this.#chargeCode = chargeCode;
//     this.#manager = manager;
//   }
//   get chargeCode() {
//     return this.#chargeCode;
//   }
//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }
//   get manager() {
//     return this.#manager;
//   }
//   set manager(arg) {
//     this.#manager = arg;
//   }
// }

// const feDev = new Department('FEDEV', '로이');
// const jn = new Person('재남');
// jn.department = feDev;

// const mh = new Person('민희');
// mh.department = feDev;

// console.log(jn.department.manager); // 로이
// console.log(mh.department.manager); // 로이
// // 이 상황에서 'Department' 클래스의 'manager' 필드를 'head'로 변경하려면 다음과 같이 모든 클라이언트 코드도 변경해야 합니다.

// javascript;
// // Department 클래스 변경
// class Department {
//   // ...
//   get head() {
//     return this.#manager;
//   }
//   set head(arg) {
//     this.#manager = arg;
//   }
// }

// // 모든 클라이언트 코드 변경
// console.log(jn.department.head); // 로이
// console.log(mh.department.head); // 로이

// // javascript
// class Person {
//   #name;
//   #department;
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name;
//   }
//   set department(arg) {
//     this.#department = arg;
//   }
//   get manager() {
//     return this.#department.manager;
//   }
// }

// class Department {
//   #chargeCode;
//   #manager;
//   constructor(chargeCode, manager) {
//     this.#chargeCode = chargeCode;
//     this.#manager = manager;
//   }
//   get chargeCode() {
//     return this.#chargeCode;
//   }
//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }
//   get manager() {
//     return this.#manager;
//   }
//   set manager(arg) {
//     this.#manager = arg;
//   }
// }

// const feDev = new Department('FEDEV', '로이');
// const jn = new Person('재남');
// jn.department = feDev;

// const mh = new Person('민희');
// mh.department = feDev;

// console.log(jn.manager); // 로이
// console.log(mh.manager); // 로이
// // 이 경우 'Department' 클래스의 'manager' 필드를 'head'로 변경해도, 클라이언트 코드는 변경할 필요가 없습니다. 대신 'Person' 클래스 내에서만 변경을 수용하면 됩니다.

// // javascript
// // Department 클래스 변경
// class Department {
//   // ...
//   get head() {
//     return this.#manager;
//   }
//   set head(arg) {
//     this.#manager = arg;
//   }
// }

// // Person 클래스 변경
// class Person {
//   // ...
//   get manager() {
//     return this.#department.head; // 여기만 변경하면 됩니다.
//   }
// }

// // 클라이언트 코드는 그대로 유지
// console.log(jn.manager); // 로이
// console.log(mh.manager); // 로이
// // 이러한 방식은 코드의 중복을 줄이고, 변경에 대한 영향을 최소화하는데 도움이 됩니다.
