import { BillingPlanProp } from './리팩토링전';

export type CustomerProp = ReturnType<typeof createUnkownCustomer>;
const registry = { billingPlans: { basic: '' } };

function isUnknown(arg: any) {
  return arg.isUnknown();
}

function createUnkownCustomer() {
  return {
    isUnkown: true,
    name: '거주자' || '미확인고객',
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };
}
class Site {
  _customer: any;

  get customer() {
    return this._customer === '미확인 고객' ? createUnkownCustomer() : this._customer;
  }
}

class Customer {
  _name: string = '';
  _billingPlan: BillingPlanProp = { basic: '' };
  _paymentHistory: string = '';

  get name() {
    return this._name;
  }
  get billingPlan() {
    return this._billingPlan;
  }
  set billingPlan(arg) {
    this._billingPlan = arg;
  }
  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

const client1 = () => {
  const customer = new Site().customer;
  //...
  let customerName = customer.name;
  if (isUnknown(customer)) customerName = '거주자';
  else customerName = customer.name;
};
const client2 = () => {
  const customer = new Site().customer;
  const plan = isUnknown(customer) ? registry.billingPlans.basic : customer.billingPlan;
};
const client3 = () => {
  const customer = new Site().customer;
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear;
};
