export class ChargeCalculator {
  #customer;
  #usage;
  #provider;

  constructor(customer: Customer, usage: number, provider: Provider) {
    this.#customer = customer;
    this.#usage = usage;
    this.#provider = provider;
  }

  get baseCharge() {
    return this.#customer.baseRate * this.#usage;
  }

  get charge() {
    return this.baseCharge + this.#provider.connectionCharge;
  }
}

type Customer = typeof customer;
type Provider = typeof provider;

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
console.log(monthCharge);
