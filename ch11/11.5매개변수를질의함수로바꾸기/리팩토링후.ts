// discountLevel을 질의함수(get discountLevel)로 만들어서 discountedPrice의 매개변수로 전달하는 부분을 제거

export class Order {
  quantity: number = 0;
  itemPrice: number = 0;

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountedPrice(basePrice: number) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
      default:
        return basePrice;
    }
  }
}
