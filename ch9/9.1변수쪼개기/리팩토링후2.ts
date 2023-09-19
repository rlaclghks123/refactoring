// 매개변수와 return 변수의 이름이 같다 .
// 매개변수값을 새로운 변수(result)에 담아준다.

export const discount = (inputValue: number, quantity: number) => {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result--;
  return result;
};

console.log(discount(40, 90));
console.log(discount(70, 90));
console.log(discount(70, 110));
