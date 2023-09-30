export interface Employee {
  isSeperated: boolean;
  isRetired: boolean;
}

// 이 코드의 의도는 모든 조건이 거짓일때만 실행 => 보호구문 사용
// 급여를 계산하기 위해 비정상인 경우(은퇴, 퇴사)인 경우 if로 검사 후  조건이 참이면(비정상이면) 함수에서 탈출
// 불필요한 가변변수는 제거하자

export const payAmount = (employee: Employee) => {
  // 퇴사인 경우 탈출
  if (employee.isSeperated) return { amount: 0, reasonCode: 'SEP' };
  // 은퇴인 경우 탈출
  if (employee.isRetired) return { amount: 0, reasonCode: 'RET' };
  // 급여계산
  return { amount: 100, reasonCode: 'WRK' }; // 재직
};
