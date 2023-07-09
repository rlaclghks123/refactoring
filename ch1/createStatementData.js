import ComedyCalculator from './ComedyCalculator.js';
import PerformanceCalculator from './PerformanceCalculator.js';
import TragedyCalculator from './TragedyCalculator.js';

const createStatementData = (invoice, plays) => {
  const playFor = (perf) => plays[perf.playID];

  const enrichPerformance = (aPerformance) => {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = { ...aPerformance };

    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  };

  const totalVolumeCredits = (performances) =>
    performances.reduce((total, p) => total + p.volumeCredits, 0);

  const totalAmount = (performances) => performances.reduce((total, p) => total + p.amount, 0);

  const enrichedPerformances = invoice.performances.map(enrichPerformance);

  return {
    customer: invoice.customer,
    performances: enrichedPerformances,
    totalAmount: totalAmount(enrichedPerformances),
    totalVolumeCredits: totalVolumeCredits(enrichedPerformances),
  };
};

const createPerformanceCalculator = (aPerformance, aPlay) => {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);

    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
  }
  return new PerformanceCalculator(aPerformance, aPlay);
};

export default createStatementData;
