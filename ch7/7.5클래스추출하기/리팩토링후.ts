class Person {
  _name: string = '';
  _telephoneNumber: TelephoneNumber;

  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeName() {
    return this._telephoneNumber.areaCode;
  }

  set officeName(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber.toString();
  }
}

class TelephoneNumber {
  _areaCode: string = '';
  _number: string = '';

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }

  get telephoneNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}
