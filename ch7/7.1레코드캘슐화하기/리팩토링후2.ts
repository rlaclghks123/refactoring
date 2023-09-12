import { readJSON } from '../../fileController.ts';
import cloneDeep from 'lodash/cloneDeep.js';

interface UsageYearData {
  [year: string]: {
    [month: string]: number;
  };
}

interface PersonData {
  name: string;
  customerId: string;
  usages: UsageYearData;
}

export interface Data {
  [id: string]: PersonData;
}

class CustomerData {
  _data: Data;
  constructor(data: Data) {
    this._data = data;
  }

  get rawData() {
    return cloneDeep(this._data);
  }

  usage(customerId: string, year: string, month: string) {
    return cloneDeep(this._data)[customerId].usages[year][month];
  }

  setUsage(customerId: string, year: string, month: string, amount: number) {
    this._data[customerId].usages[year][month] = amount;
  }
}

let customerData = new CustomerData(readJSON('ch7/01-2.json'));

export const getCustomerData = () => customerData;

export const writeData = (customerId: string, year: string, month: string, amount: number) => {
  getCustomerData().setUsage(customerId, year, month, amount);
};

export const compareUsage = (customerId: string, laterYear: string, month: string) => {
  const later = getCustomerData().usage(customerId, laterYear, month);
  const earlier = getCustomerData().usage(customerId, String(+laterYear - 1), month);
  return { laterAmount: later, change: later - earlier };
};
