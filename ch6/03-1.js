const price = (order) => {
  const 기본가격 = order.quantity * order.itemPrice;
  const 수량확인 = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const 배송비 = Math.min(order.quantity * order.itemPrice * 0.1, 100);

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
