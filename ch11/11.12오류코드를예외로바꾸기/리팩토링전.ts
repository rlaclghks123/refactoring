class ShippingRules {
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
  else return -23;
};

const calculateShippingCosts = (order: { country: string }) => {
  // 관련 없는 코드
  const shippingRules = localShippingRules(order.country);
  if (typeof shippingRules === 'number' && shippingRules < 0) return shippingRules;
  // 관련 없는 코드
  return shippingRules;
};

const execute = (order: { country: string }) => {
  const state = calculateShippingCosts(order);
  if (typeof state === 'number') errorList.push({ order, errorCode: state });
};

execute({ country: 'US' });
execute({ country: 'CA' });
execute({ country: 'KO' });

console.log(errorList);
