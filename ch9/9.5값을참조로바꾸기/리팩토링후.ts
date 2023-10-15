import { Data } from './리팩토링전';

class Customer {
  #id;
  constructor(id: string) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }
}

class Order {
  #customer;
  constructor(data: Data) {
    this.#customer = registerCustomer(data.customer);
  }
  get customer() {
    return this.#customer;
  }
}

let _repositoryData: { customer: Map<string, Customer> };

function initialize() {
  _repositoryData = {
    customer: new Map(),
  };
}

function registerCustomer(id: string) {
  if (!_repositoryData.customer.has(id)) {
    _repositoryData.customer.set(id, new Customer(id));
  }
  return findCustomer(id);
}

function findCustomer(id: string) {
  return _repositoryData.customer.get(id);
}

initialize();
const o = new Order({ number: 1, customer: 'a' });
console.log(o.customer?.id);
