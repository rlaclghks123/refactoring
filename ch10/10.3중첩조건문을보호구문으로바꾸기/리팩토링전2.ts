export interface Instrument {
  capital: number;
  interestRate: number;
  duration: number;
  income: number;
  adjustmentFactor: number;
}

const adjustCapital = (anInstrument: Instrument) => {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
};
