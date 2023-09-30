import { Instrument } from './리팩토링전2';

// 보호구문을 추가하지만 조건을 역으로 바꿈

const adjustCapital = (anInstrument: Instrument) => {
  if (anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0) {
    return 0;
  }
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
};
