// src/components/WorkflowChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@/hooks/useTheme';

// Generate 30 days data
const generateData = () => {
  // const statuses = [
  //   'ACTIVE',
  //   'WAITING',
  //   'WAITING_CHILDREN',
  //   'PRIORITIZED',
  //   'COMPLETED',
  //   'FAILED',
  //   'DELAYED',
  //   'PAUSED',
  // ];
  return Array.from({ length: 30 }, (_, i) => ({
    day: `${i + 1}`,
    ACTIVE: Math.floor(Math.random() * 100) + 90,
    WAITING: Math.floor(Math.random() * 80) + 80,
    WAITING_CHILDREN: Math.floor(Math.random() * 60) + 60,
    PRIORITIZED: Math.floor(Math.random() * 50) + 209,
    COMPLETED: Math.floor(Math.random() * 150) + 50,
    FAILED: Math.floor(Math.random() * 40) + 60,
    DELAYED: Math.floor(Math.random() * 30) + 33,
    PAUSED: Math.floor(Math.random() * 20) + 22,
  }));
};

const data = generateData();

const statusColors = {
  ACTIVE: '#3B82F6', // blue-500
  WAITING: '#FBBF24', // amber-400
  WAITING_CHILDREN: '#F97316', // orange-500
  PRIORITIZED: '#A855F7', // purple-500
  COMPLETED: '#10B981', // emerald-500
  FAILED: '#EF4444', // red-500
  DELAYED: '#8B5CF6', // violet-500
  PAUSED: '#6B7280', // gray-500
};

export default function WorkflowChart() {
  const isDark = useTheme();

  const theme = {
    dark: {
      bg: 'bg-gray-950',
      text: 'text-gray-100',
      grid: '#374151',
      axis: '#9CA3AF',
      tooltipBg: '#1F2937',
      tooltipBorder: '#374151',
      cursor_fill: '#24272A',
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      grid: '#E5E7EB',
      axis: '#6B7280',
      tooltipBg: '#FFFFFF',
      tooltipBorder: '#D1D5DB',
      cursor_fill: '#F1F5F9',
    },
  };

  const currentTheme = isDark.theme === 'dark' ? theme.dark : theme.light;

  return (
    <div
      className={`w-full dark:bg-dark-charcoal bg-white shadow p-6 rounded-lg`}
    >
      <div className="text-center dark:text-neutral-100 text-dark-slate font-semibold">
        Data processing statistics
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barSize={8}>
          <CartesianGrid strokeDasharray="1 2" stroke={currentTheme.grid} />
          <XAxis
            dataKey="day"
            stroke={currentTheme.axis}
            strokeDasharray="0 0.5"
            tick={{ fill: currentTheme.axis, fontSize: 12 }}
          />
          <YAxis
            stroke={currentTheme.axis}
            strokeDasharray="0 0.5"
            tick={{ fill: currentTheme.axis, fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: currentTheme.cursor_fill }}
            contentStyle={{
              backgroundColor: currentTheme.tooltipBg,
              border: `1px solid ${currentTheme.tooltipBorder}`,
              borderRadius: '8px',
              fontSize: 14,
              fontWeight: 600,
              color: isDark ? '#F3F4F6' : '#111827',
            }}
          />

          <Bar dataKey="ACTIVE" stackId="a" fill={statusColors.ACTIVE} />
          <Bar dataKey="WAITING" stackId="a" fill={statusColors.WAITING} />
          <Bar
            dataKey="WAITING_CHILDREN"
            stackId="a"
            fill={statusColors.WAITING_CHILDREN}
          />
          <Bar
            dataKey="PRIORITIZED"
            stackId="a"
            fill={statusColors.PRIORITIZED}
          />
          <Bar dataKey="COMPLETED" stackId="a" fill={statusColors.COMPLETED} />
          <Bar dataKey="FAILED" stackId="a" fill={statusColors.FAILED} />
          <Bar dataKey="DELAYED" stackId="a" fill={statusColors.DELAYED} />
          <Bar
            dataKey="PAUSED"
            fillOpacity={1}
            stackId="a"
            fill={statusColors.PAUSED}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Status Legend */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {Object.entries(statusColors).map(([status, color]) => (
          <div key={status} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className={`text-sm font-medium ${currentTheme.text}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
