import Province from './province.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';

const sampleProvinceData = () => ({
  name: 'Asia',
  producers: [
    { name: 'Byzzantium', cost: 10, production: 9 },
    { name: 'Attalia', cost: 12, production: 10 },
    { name: 'Sinope', cost: 10, production: 6 },
  ],
  demand: 30,
  price: 20,
});

describe('province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it('shortfall', () => {
    expect(asia.shortfall).equal(5);
  });
  it('profit', () => {
    expect(asia.profit).equal(230);
  });

  it('change production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });

  it('nagative demand', () => {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });

  it('empty string demand', () => {
    asia.demand = '';
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe('string for producers', () => {
  if (
    ('',
    () => {
      const data = {
        name: 'String producers',
        producers: '',
        demand: 30,
        price: 20,
      };
      const prov = new Province(data);
      expect(prov.shortfall).eqls(0);
    })
  );
});
