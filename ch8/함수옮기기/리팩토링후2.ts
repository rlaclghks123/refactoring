// 다른 클래스로 함수 옮기기
// 1. overdraftCharge를 AccountType 클래스로 옮기기 위해 AccountType를 만들고 overdraftCharge를 복사한다.
// 1-1 : 옮긴 클래스에 맞게 정리한다. 필드변수인 isPremium, props로 받은 daysOverdrawn에 따라 처리하도록 수정

//2. Account 클래스에서 원래 메서드를 호출하던 부분을 위임 메서드로 수정한다.
//3. 필요한 경우 인라인을 해준다.

class AccountType {
  isPremium = false;

  constructor(isPremium: boolean) {
    this.isPremium = isPremium;
  }

  overdraftCharge(daysOverdrawn: number) {
    // 마통이자
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (daysOverdrawn - 7) * 0.85;
    }
    return daysOverdrawn * 1.75;
  }
}

class Account {
  type: AccountType;

  constructor(public daysOverdrawn: number, { isPremium }: { isPremium: boolean }) {
    this.type = new AccountType(isPremium);
  }
  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}

const loan = new Account(10, { isPremium: true });
const repo = new Account(10, { isPremium: false });

console.log({ name: 'loan', charge: loan.bankCharge, overdraftCharge: loan.overdraftCharge });
console.log({ name: 'repo', charge: repo.bankCharge, overdraftCharge: repo.overdraftCharge });
