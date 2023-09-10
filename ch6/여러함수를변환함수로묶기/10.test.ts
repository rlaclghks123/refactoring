import cloneDeep from 'lodash/cloneDeep.js';

import { assert } from 'chai';
import { it } from 'mocha';
import { enrichReading } from './리팩토링후';

it('check reading unchanged', () => {
  const baseReading = {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  };
  const oracle = cloneDeep(baseReading);
  enrichReading(baseReading);
  assert.deepEqual(baseReading, oracle);
});
