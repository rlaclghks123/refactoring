// 1. 명령을 생성하는 코드와 실행 메서드를 호출하는 코드를 함수로 추출한다.
// 2. 보조 메서드를 인라인한다.
// 3. 생성자에 전달되는 모든 데이터를 주 메서드로 옮긴다.

export function charge(customer: Customer, usage: number, provider: Provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}

type Customer = typeof customer;
type Provider = typeof provider;

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = charge(customer, usage, provider);
console.log(monthCharge);
