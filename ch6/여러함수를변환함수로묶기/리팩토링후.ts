import cloneDeep from 'lodash/cloneDeep.js';
import { ReadingProps } from '../여러함수를클래스로묶기/리팩토링전';

interface Oiriginal extends ReadingProps {
  baseCharge?: number;
  taxableCharge?: number;
}

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

const baseRate = (month: number, year: number) => year - 2000 + month;

const calculateBaseCharge = (aReading: ReadingProps) => {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
};

const taxThreshold = (year: number) => (year - 2000) * 0.1;

export function enrichReading(original: Oiriginal) {
  const result = cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}

const client1 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.baseCharge;
};

const client2 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.taxableCharge;
};

const client3 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.baseCharge;
};

[client1, client2, client3].forEach((c) => console.log(c()));
