// 의존성 주입으로 수정해봄

class Customer {
  _name: string;
  _contract: CustomerContract;

  constructor(name: string, contract: CustomerContract) {
    this._name = name;
    this._contract = contract;
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  becomePreferred() {
    this._contract.discountRate += 0.03;
    // do other stuff
  }

  applyDiscount(amount: any) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

export class CustomerContract {
  _startDate: Date;
  _discountRate: number;

  constructor(startDate: Date, discountRate: number) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(arg: number) {
    this._discountRate = arg;
  }
}

const customer1Contract = new CustomerContract(new Date(), 0.1);
const customer1 = new Customer('재남', customer1Contract);
customer1.becomePreferred();
console.log(customer1.discountRate);
//
