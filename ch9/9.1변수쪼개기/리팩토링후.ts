// 1. 중복된 변수명 중 첫번째 변수명 수정후 const로 변경
// 2. 중복된 변수명 중 두번째 변수명 수정후 const로 변경

import { ScenarioType } from './리팩토링전';

const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

const distanceTravelled = (scenario: ScenarioType, time: number) => {
  const { primaryForce, secondaryForce, mass, delay } = scenario;
  // 1.
  const primaryAcceleration = primaryForce / mass; // (a = F / m)
  let primaryTime = Math.min(time, delay);
  let result = 0.5 * primaryAcceleration * Math.pow(primaryTime, 2);
  let secondaryTime = time - delay;

  if (secondaryTime > 0) {
    // 2.
    let primaryVelocity = primaryAcceleration * delay;
    const secondaryAcceleration = (primaryForce + secondaryForce) / mass;
    result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime ** 2;
  }
  return result;
};

console.log(distanceTravelled(scenario, 100));
