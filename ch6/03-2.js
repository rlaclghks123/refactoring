class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get 기본가격() {
    return this.quantity * this.itemPrice;
  }

  get 수량확인() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get 배송비() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }

  get price() {
    return this.기본가격 - this.수량확인 + this.배송비;
  }
}

const orderA = new Order({
  itemPrice: 600,
  quantity: 3,
});
const orderB = new Order({
  itemPrice: 8000,
  quantity: 2,
});

console.log(orderA.price);
console.log(orderB.price);
