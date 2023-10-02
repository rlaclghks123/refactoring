import cloneDeep from 'lodash/cloneDeep.js';

export const RECORDS = [
  {
    name: '애크미 보스턴',
    location: 'Malden MA',
    customer: {
      name: '애크미 산업',
      billingPlan: 'plan-451',
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
      },
    },
  },
  {
    name: '물류창고 15',
    location: 'Malden MA',
    customer: '미확인 고객',
  },
];
const registry = { billingPlans: { basic: '' } };
class Site {
  _customer: any;
  get customer() {
    return this._customer;
  }
}
const acquireSiteData = () => new Site();

function enrichSite(inputSite: any) {
  const result = cloneDeep(inputSite);

  const unknownCustomer = {
    isUnknown: true,
    name: '거주자',
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCusomer: any) {
  if (aCusomer === '미확인 고객') return true;
  return aCusomer.isUnknown;
}

const client1 = () => {
  const rawSite = acquireSiteData();
  const site = enrichSite(rawSite);

  const customer = site.customer;
  let customerName = customer.name;
};
const client2 = () => {
  const customer = acquireSiteData().customer;
  const plan = customer.billingPlan;
};
const client3 = () => {
  const customer = acquireSiteData().customer;
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYeart;
};
