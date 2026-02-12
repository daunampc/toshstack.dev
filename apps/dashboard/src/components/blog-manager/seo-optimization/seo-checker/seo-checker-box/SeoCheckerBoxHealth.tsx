import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { PieChart, Pie, Label } from 'recharts';
import { GoDotFill } from 'react-icons/go';

const data = [{ name: 'Group A', value: 400, fill: '#00CC66' }];

// #endregion
const MyPie = () => (
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    outerRadius="80%"
    stroke="none"
    innerRadius="60%"
    isAnimationActive
  />
);

const HealthScoreGauge = () => {
  return (
    <PieChart
      responsive
      style={{
        maxHeight: '200px',
        aspectRatio: 1,
        margin: '0 auto',
      }}
    >
      <MyPie />
      <Label
        className="text-3xl font-semibold"
        fill="#ffff"
        position="center"
        dy={-10} // dịch lên trên
      >
        87
      </Label>

      {/* Label phía dưới */}
      <Label
        className="text-sm font-semibold"
        position="center"
        fill="#00CC66"
        dy={15} // dịch xuống dưới
      >
        Strong
      </Label>
    </PieChart>
  );
};

export default function SeoCheckerBoxHealth() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-lg space-y-3">
      <div className="dark:text-neutral-200 text-sm font-bold">
        HEALTH SCORE
      </div>
      <HealthScoreGauge />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between dark:text-neutral-200 font-medium">
          <div className="flex items-center text-sm">
            <GoDotFill className="dark:text-red-500" />
            <span>Your website</span>
          </div>
          <div className="flex items-center text-sm dark:text-neutral-200 font-medium gap-1">
            <span className="font-medium">84</span>
            <BiSolidUpArrow size={14} className="text-green-500" />
          </div>
        </div>

        <div className="flex items-center justify-between dark:text-neutral-200 font-medium">
          <div className="flex items-center text-sm">
            <GoDotFill className="text-green-500" />
            <span>Recommended</span>
          </div>
          <div className="flex items-center text-sm dark:text-neutral-200 font-medium gap-1">
            <span className="font-medium">84</span>
            <BiSolidDownArrow size={14} className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
