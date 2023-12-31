interface Point {
  elevation: number;
}

export const calculateAscent = () => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
};

const calculateTime = () => {
  return 1;
};
const calculateDistance = () => {
  return 1;
};

let points: Point[] = [];

const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();
const pace = totalTime / 60 / totalDistance;
