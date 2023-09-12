interface TestProp {
  name: string;
  discountRate: number;
}

class Customer {
  _name;
  _discountRate;
  _contract;

  constructor(name: string, discountRate: number, contract: CustomerContract) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = contract;
  }

  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    this._discountRate += 0.03;
    // do other stuff
  }
  applyDiscount(amount: any) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  _startDate;

  constructor(startDate: Date) {
    this._startDate = startDate;
  }
}

const customer1 = new Customer('재남', 0.1, new CustomerContract(new Date()));
customer1.becomePreferred();
console.log(customer1.discountRate);
