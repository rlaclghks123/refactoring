export class Account {
  _number: number;
  _type: AccountType;
  _interestRate: number;

  constructor(number: number, type: AccountType, interestRate: number) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}
export class AccountType {
  _name: string;
  constructor(nameString: string) {
    this._name = nameString;
  }
}
const minus = new AccountType('마통');
const acc = new Account(100000, minus, 0.39);
console.log(acc.interestRate);
