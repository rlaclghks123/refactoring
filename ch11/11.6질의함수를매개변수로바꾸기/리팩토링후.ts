// 전역객체인 thermostat에 의존하는 부분을 리팩토링한다.

const thermostat = {
  selectedTemperature: 25,
  currentTemperature: 27,
};

export class HeatingPlan {
  #max = 0;
  #min = 0;

  targetTemperature(selectedTemperature: number) {
    if (selectedTemperature > this.#max) return this.#max;
    else if (selectedTemperature < this.#min) return this.#min;
    else return selectedTemperature;
  }
}

const temperatureController = () => {
  const setToHeat = () => {};
  const setToCool = () => {};
  const setOff = () => {};

  const heatingPlan = new HeatingPlan();
  if (heatingPlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature)
    setToHeat();
  else if (
    heatingPlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature
  )
    setToCool();
  else setOff();
};
