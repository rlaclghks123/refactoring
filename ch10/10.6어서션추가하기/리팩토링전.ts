export class Customer {
  _discountRate: number = 0;

  applyDiscount(number: number) {
    if (!this._discountRate) return number;

    return number - this._discountRate * number;
  }

  set discountRate(number: number) {
    this._discountRate = number;
  }
}
