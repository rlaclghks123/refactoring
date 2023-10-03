import assert from 'assert';

export class Customer {
  _discountRate: number = 0;

  applyDiscount(number: number) {
    if (!this._discountRate) return number;
    assert(this._discountRate >= 0);
    return number - this._discountRate * number;
  }

  set discountRate(number: number) {
    assert(number === null || number >= 0);
    this._discountRate = number;
  }
}

const customer = new Customer();
customer.discountRate = -3;

console.log(null * 3);