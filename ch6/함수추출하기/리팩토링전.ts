interface Orders {
  name: string;
  amount: number;
}

export interface Invoice {
  customer: string;
  orders: Orders[];
  dueDate?: Date;
}

const printOwing = (invoice: Invoice) => {
  // printBanner();
  // console.log('*******************');
  // console.log('***** 고객채무 *****');
  // console.log('*******************');

  // 문장 슬라이드 및 calulateOutstanding() 추출
  // let outstanding = 0;
  // for (const o of invoice.orders) {
  //   outstanding += o.amount;
  // }

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // printDetail(invoice,outstanding);
  // console.log(`고객명: ${invoice.customer}`);
  // console.log(`채무액: ${outstanding}`);
  // console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
};

printOwing({
  customer: '재남',
  orders: [
    { name: '사채', amount: 100 },
    { name: '대출', amount: 1000 },
  ],
});
