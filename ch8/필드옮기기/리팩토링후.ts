class Customer {
  _name: string;
  _discountRate: number;
  _contract: CustomerContract;

  constructor(name: string, discountRate: number) {
    this._name = name;
    this._contract = new CustomerContract(new Date(), discountRate);
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  _setDiscountRate(aNumber: number) {
    this._contract.discountRate = aNumber;
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

const customer1 = new Customer('재남', 0.1);
customer1.becomePreferred();
console.log(customer1.discountRate);
