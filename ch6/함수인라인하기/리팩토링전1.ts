export interface Driver {
  name: string;
  numberOfLateDeliveries: number;
}

// moreThanFiveLateDeliveries rating으로 인라인하기
// const moreThanFiveLateDeliveries = (aDriver: Driver) => aDriver.numberOfLateDeliveries > 5;
// const rating = (aDriver: Driver) => (moreThanFiveLateDeliveries(aDriver) ? 2 : 1);

const DriverA = { name: 'A', numberOfLateDeliveries: 10 };
const DriverB = { name: 'B', numberOfLateDeliveries: 4 };

console.log(DriverA.name, rating(DriverA));
console.log(DriverB.name, rating(DriverB));
