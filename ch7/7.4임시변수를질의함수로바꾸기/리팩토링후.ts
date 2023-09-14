class Order {
  _quantity;
  _item;

  constructor(quantity: number, item: { price: number }) {
    this._quantity = quantity;
    this._item = item;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}
const order = new Order(10, { price: 1000 });
console.log(order.price);

export {};
