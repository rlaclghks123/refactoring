interface TestProp{
name:string;
discountRate:number;
}

class Customer {
  _name: string;
  _discountRate: number;
  _contract: CustomerContract;

  constructor(name:string, discountRate:number) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
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
  _startDate: Date;
  constructor(startDate: Date) {
    this._startDate = startDate;
  }
}

const customer1 = new Customer('재남', 0.1);
customer1.becomePreferred();
console.log(customer1.discountRate);
