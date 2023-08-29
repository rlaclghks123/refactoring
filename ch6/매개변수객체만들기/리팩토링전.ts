export interface Readings {
  temp: number;
  time: string;
}

export interface Station {
  name: string;
  readings: Readings[];
}

export interface ReadingsOutsideRange {
  station: Station;
  min: number;
  max: number;
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};
const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 56,
};

const readingsOutsideRange = (station: Station, min: number, max: number) =>
  station.readings.filter((r) => r.temp < min || r.temp > max);
console.log(
  readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)
);
