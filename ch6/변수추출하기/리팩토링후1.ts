import { Order } from './리팩토링전1';

const price = ({ quantity, itemPrice }: Order) => {
  const 기본가격 = quantity * itemPrice;
  const 수량확인 = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const 배송비 = Math.min(quantity * itemPrice * 0.1, 100);

  return 기본가격 - 수량확인 + 배송비;
};

const orderA = {
  itemPrice: 600,
  quantity: 3,
};

const orderB = {
  itemPrice: 8000,
  quantity: 2,
};

console.log(price(orderA));
console.log(price(orderB));
