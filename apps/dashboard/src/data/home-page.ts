const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

interface IncomeData {
  day: string;
  TopUp: number;
  Sell: number;
}

// Hàm random helper
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sinh dữ liệu
const dataChartHomePage: IncomeData[] = months.map(month => ({
  day: month,
  TopUp: getRandomInt(5, 5000), // TopUp từ 5 → 100
  Sell: getRandomInt(20, 6000), // Sell từ 20 → 200
}));
export { dataChartHomePage };
