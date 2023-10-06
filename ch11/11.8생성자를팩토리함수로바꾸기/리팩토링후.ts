// 1. 팩토리함수를 만든다
// 2. 생성자를 호출하는곳을 찾아 팩토리 함수를 사용하도록 수정한다.
// 3. 예시코드에선 문자열 리터럴을 그대로 넘기는데 이것은 악취로 봐야하기 떄문에 새로운 팩토리 함수를 만들어 호출한다.

function createEmployee(name: string, typeCode: string) {
  return new Employee(name, typeCode);
}

function createEngineer(name: string) {
  return new Employee(name, 'E');
}

export class Employee {
  #name;
  #typeCode;
  constructor(name: string, typeCode: string) {
    this.#name = name;
    this.#typeCode = typeCode;
  }
  get name() {
    return this.#name;
  }
  get type() {
    return this.#typeCode;
  }
  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    };
  }
}

const client1 = () => {
  const document = { name: '재남', empType: 'M', leadEngineer: '로이' };
  const candidate = createEmployee(document.name, document.empType);
  const leadEngineer = createEngineer(document.leadEngineer);
  return { candidate: candidate.name, leadEngineer: leadEngineer.name };
};

console.log(client1());
