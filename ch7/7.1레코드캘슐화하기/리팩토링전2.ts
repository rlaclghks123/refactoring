import { readJSON } from '../../fileController.js';

const customerData = readJSON('ch7/01-2.json');

export const writeData = (customerId: string, year: string, month: string, amount: number) => {
  customerData[customerId].usages[year][month] = amount;
};

export const compareUsage = (customerId: string, laterYear: string, month: string) => {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[String(+laterYear - 1)][month];
  return { laterAmount: later, change: later - earlier };
};

export const getCustomer = () => customerData;
