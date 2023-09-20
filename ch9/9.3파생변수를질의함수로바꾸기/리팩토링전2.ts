import { Adjustment } from './리팩토링전';

class ProductionPlan {
  #production = 0;
  #adjustments: Adjustment[] = [];

  constructor(production: number) {
    this.#production = production;
  }

  get production() {
    return this.#production;
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this.#adjustments.push(anAdjustment);
    this.#production += anAdjustment.amount;
  }
}

const products = new ProductionPlan(0);
products.applyAdjustment({ name: '사과', amount: 10 });
products.applyAdjustment({ name: '바나나', amount: 20 });

console.log(products.production);
