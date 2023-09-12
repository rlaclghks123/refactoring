class Account {
  daysOverdrawn;
  type = { isPremium: false };

  constructor(daysOverdrawn: number, type: { isPremium: boolean }) {
    this.daysOverdrawn = daysOverdrawn;
    this.type = type;
  }
  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }
  get overdraftCharge() {
    // 마통이자
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    }
    return this.daysOverdrawn * 1.75;
  }
}

const loan1 = new Account(10, { isPremium: true });
const repo1 = new Account(10, { isPremium: false });

console.log({ name: 'loan', charge: loan1.bankCharge, overdraftCharge: loan1.overdraftCharge });
console.log({ name: 'repo', charge: repo1.bankCharge, overdraftCharge: repo1.overdraftCharge });

export {};
