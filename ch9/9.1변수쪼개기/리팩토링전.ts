export type ScenarioType = typeof scenario;

const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

const distanceTravelled = (scenario: ScenarioType, time: number) => {
  let result;
  //  acc에 대입 1번 : 초기가속도 저장
  let acc = scenario.primaryForce / scenario.mass; // (가속도 a = 힘(F) / 질량(m) )
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime ** 2; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    let primaryVelocity = acc * scenario.delay;

    //  acc에 대입 2번 : 두 번째 힘까지 반영된 후의 가속도 저장
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime ** 2;
  }
  return result;
};

console.log(distanceTravelled(scenario, 100));

export {};
