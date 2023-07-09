import createStatementData from './createStatementData.js';

const usd = (aNumber) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
};

export const statement = (invoice, plays) => {
  return renderPlainText(createStatementData(invoice, plays));
};

export const htmlStatement = (invoice, plays) => {
  return renderHtml(createStatementData(invoice, plays));
};

const renderHtml = (data) => {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;

  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
};

const renderPlainText = (data) => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
};
