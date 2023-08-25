import { Invoice } from './리팩토링전';

const printBanner = () => {
  console.log('*******************');
  console.log('***** 고객채무 *****');
  console.log('*******************');
};

const printDetail = (invoice: Invoice, outstanding: number) => {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
};

const calulateOutstanding = (invoice: Invoice) => {
  return invoice.orders.reduce((acc, cur) => acc + cur.amount, 0);
};

const printOwing = (invoice: Invoice) => {
  printBanner();

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetail(invoice, calulateOutstanding(invoice));
};

printOwing({
  customer: '재남',
  orders: [
    { name: '사채', amount: 100 },
    { name: '대출', amount: 1000 },
  ],
});
