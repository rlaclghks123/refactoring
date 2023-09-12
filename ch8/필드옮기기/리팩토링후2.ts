import assert from 'assert';

export class Account {
  _number;
  _type;

  constructor(number: number, type: AccountType, interestRate: number) {
    this._number = number;
    this._type = type;
    assert(this._type.interestRate === interestRate);
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

export class AccountType {
  _name;
  _interestRate;
  constructor(nameString: string, interestRate: number) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
const minus = new AccountType('마통', 0.39);
const acc = new Account(100000, minus, 0.399);
console.log(acc.interestRate);
