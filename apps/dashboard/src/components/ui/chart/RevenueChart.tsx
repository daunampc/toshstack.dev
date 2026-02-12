import { dataChartHomePage } from '@/data/home-page';
import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const MoneyTooltip: React.FC<any> = ({ active, label, payload }) => {
  if (!active || !payload || payload.length === 0) return null;

  // Lấy TopUp & Sell từ payload
  const byName = Object.fromEntries(
    payload.map((p: any) => [p.name || p.dataKey, p.value]),
  );

  return (
    <div className="rounded-md border border-white/10 bg-[#24272a] px-3 py-2 text-xs text-neutral-100 shadow-xl">
      <div className="mb-1 text-[11px] font-semibold text-neutral-300">
        {label}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: '#5D00D3' }}
          />
          <span>TopUp</span>
          <strong className="ml-1">${byName.TopUp}</strong>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: '#e80054' }}
          />
          <span>Sell</span>
          <strong className="ml-1">${byName.Sell}</strong>
        </div>
      </div>
    </div>
  );
};
const RoundedWeeklyChart: React.FC = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <ResponsiveContainer width="100%" height={360}>
        <ComposedChart data={dataChartHomePage} barGap={6} barCategoryGap="15%">
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            className="font-medium dark:text-neutral-200 text-xs"
            dy={5}
            allowDuplicatedCategory={false}
          />

          {/* Y trái cho Bars (0–4) */}
          <YAxis
            yAxisId="bars"
            axisLine={false}
            tickLine={false}
            className="font-medium dark:text-neutral-200 text-xs"
            tickCount={5}
            dy={5}
            tickFormatter={v => `$${v}`}
          />
          {/* Y phải cho Line (Revenue) */}
          <YAxis
            yAxisId="line"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            domain={[0, 'dataMax + 10']}
          />
          <Tooltip
            content={<MoneyTooltip />} // <-- tooltip tùy biến
            wrapperStyle={{ outline: 'none' }}
          />

          <Legend
            verticalAlign="bottom"
            height={30}
            iconType="circle"
            wrapperStyle={{ color: '#cbd5e1', paddingTop: 8, fontSize: 12 }}
          />

          {/* Bars phải gán yAxisId="bars" */}
          <Bar
            yAxisId="bars"
            dataKey="TopUp"
            name="TopUp"
            fill="#5D00D3"
            radius={[6, 6, 0, 0]}
            opacity={0.95}
          />
          <Bar
            yAxisId="bars"
            dataKey="Sell"
            name="Sell"
            fill="#e80054"
            radius={[6, 6, 0, 0]}
            opacity={0.9}
          />

          {/* Line gán yAxisId="line" */}
          {/* <Line */}
          {/*   yAxisId="line" */}
          {/*   type="monotone" */}
          {/*   dataKey="Revenue" */}
          {/*   name="Revenue" */}
          {/*   stroke="#FFC404" */}
          {/*   strokeWidth={3} */}
          {/*   dot={{ r: 3, fill: '#06B6D4', stroke: '#111827', strokeWidth: 1 }} */}
          {/*   activeDot={{ r: 4 }} */}
          {/* /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoundedWeeklyChart;
