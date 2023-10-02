type BillingPlanProp = { basic: string };
export const registry = { billingPlans: { basic: '' } };
const UNKNOWN_CUSTOMER = '미확인 고객';

class Site {
  _customer: any;

  get customer() {
    return this._customer === UNKNOWN_CUSTOMER ? new UnknownCustomer() : this._customer;
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

class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return '거주자';
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }

  set billingPlan(arg) {
    //무시
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

const client1 = () => {
  const customer = new Site().customer;
  //...
  let customerName = customer.name;
};

const client2 = () => {
  const customer = new Site().customer;
  const plan = customer.billingPlan;
};

const client3 = () => {
  const customer = new Site().customer;
  customer.billingPlan = 'new Plan';
};

const client4 = () => {
  const customer = new Site().customer;
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear;
};
