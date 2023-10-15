// 1. 후보클래스가 불변으로 만든다. => 세터만 제거하면 됨 => 세터를 생성자에서 입력받아 설정
// 2. 동치성 비교 메소드를 만든다.

// 값 객체
export class TelephoneNumber {
  #areaCode;
  #number;

  constructor(areaCode: string, number: string) {
    this.#areaCode = areaCode;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode;
  }

  // set areaCode(arg) {    // 1. 세터 제거
  //   this.#areaCode = arg;
  // }

  get number() {
    return this.#number;
  }

  // set number(arg) {
  //   // 1. 세터 제거
  //   this.#number = arg;
  // }

  // 2. 동치성 비교 메소드
  equal(other: TelephoneNumber) {
    if (!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}

class Person {
  #telephoneNumber;

  constructor() {
    this.#telephoneNumber = new TelephoneNumber('', '');
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this.#telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }
  set officeNumber(arg) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

const p = new Person();
p.officeAreaCode = '312';
p.officeNumber = '555-0142';
console.log(p.officeAreaCode, p.officeNumber);
