//1 . 중첩함수를 최상위로 옮긴다. => 추적거리를 다른 정보와는 독립적으로 계산하기 위해
// 1-1. 중첩함수인 calculateDistance()를 최상위로 복사한다. (이름은 대충 짓는다.)
// 1-2 distance, points가 없기 때문에 동작하지 않는다.
// 1-2-1 distance 함수를 전역으로 빼준다.(따로 의존하지 않기 때문)
// 1-2-2 points를 props로 넘겨준다.

// 2. calulateDistance를 사용하던 자리에 top_calculateDistance로 옮기고, 제대로된 이름으로 바꿔준다. (totalDistance)

//3. 변수이름과 함수이름이 같으므로 인라인 해준다.

const calculateDistance = (points: number[]) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
};

const distance = (p1: number, p2: number) => Math.abs(p1 - p2);

const trackSummary = (points: number[]) => {
  const calculateTime = () => 10000;

  const totalTime = calculateTime();
  const pace = totalTime / 60 / calculateDistance(points);

  return {
    time: totalTime,
    distance: calculateDistance(points),
    pace,
  };
};

console.log(trackSummary([30, 250, 150, 550, 660]));
