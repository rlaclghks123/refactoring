// 1. 예외 핸들러를 만든다.
// 2. Error 클래스를 상속받아 커스텀 에러 클래스를 만든다.
// 3. 예외 발생할곳에 throw로 에러를 던진다.

class OrderProcessingError extends Error {
  code;
  constructor(errorCode: number) {
    super(`주문 처리 오류 : ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return 'OrderProcessingError';
  }
}
export class ShippingRules {
  data;

  constructor(data: number) {
    this.data = data;
  }
}

interface CountryData {
  shippingRules: Record<string, number>;
}

interface ErrorList {
  order: { country: string };
  errorCode: number;
}

const countryData: CountryData = {
  shippingRules: {
    US: 10,
    CA: 7,
  },
};

const errorList: ErrorList[] = [];

const localShippingRules = (country: string) => {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
};

function calculateShippingCosts(order: { country: string }) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(order.country);
  // 관련 없는 코드
  return shippingRules;
}

const execute = (order: { country: string }) => {
  const state = calculateShippingCosts(order);
  if (typeof state === 'number') errorList.push({ order, errorCode: state });
};

execute({ country: 'US' });
execute({ country: 'CA' });
execute({ country: 'KO' });

console.log(errorList);

const orderData = {
  country: 'US',
};

try {
  calculateShippingCosts(orderData);
} catch (error) {
  if (error instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: error.code });
  } else {
    throw error;
  }
}
