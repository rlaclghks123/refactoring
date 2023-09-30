const usd = (aNumber: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);

const withinBand = (usage: number, bottom: number, top: number) => {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
};

const baseCharge0 = (usage: number) => {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
};

export {};
