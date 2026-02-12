import type { CustomTooltipProps } from '@/types';
import { Select } from '@mantine/core';
import { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
export type UtmPoint = {
  date: string; // e.g. "Oct 11"
  // dynamic keys per UTM source: "google", "facebook", ... all numbers
  [utmSource: string]: string | number;
};
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const formatShort = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
};
const UTM_SOURCES = [
  'google',
  'facebook',
  'newsletter',
  'linkedin',
  'twitter',
  'reddit',
  'direct',
];

// base daily volumes by source (to shape realistic lines)
const BASE = {
  google: 580,
  facebook: 210,
  newsletter: 120,
  linkedin: 95,
  twitter: 80,
  reddit: 60,
  direct: 180,
} as Record<string, number>;

function generateUtmData(
  days = 30,
  seed = 7,
  metric: 'sessions' | 'pageViews' | 'conversions' = 'sessions',
) {
  const rand = mulberry32(seed);
  const fmt = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const arr: UtmPoint[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const row: UtmPoint = { date: fmt.format(d) };

    UTM_SOURCES.forEach(s => {
      // wiggle around base: weekdays higher than weekends
      const weekday = d.getDay(); // 0 Sun ... 6 Sat
      const weekendFactor = weekday === 0 || weekday === 6 ? 0.8 : 1.0;
      const burst = i === 5 ? 1.6 : i === 4 ? 1.3 : 1.0; // one mini-campaign burst
      let v = BASE[s] * weekendFactor * (0.7 + rand() * 0.6) * burst;

      // adjust per metric
      if (metric === 'pageViews') v *= 1.5 + (s === 'google' ? 0.2 : 0);
      if (metric === 'conversions') v *= 0.08 + (s === 'newsletter' ? 0.05 : 0);

      row[s] = Math.round(v);
    });

    arr.push(row);
  }
  return arr;
}

// palette for lines
const COLORS: Record<string, string> = {
  google: '#60a5fa', // blue-400
  facebook: '#3b82f6', // blue-500
  newsletter: '#a78bfa', // violet-400
  linkedin: '#22c55e', // green-500
  twitter: '#38bdf8', // sky-400
  reddit: '#fb7185', // rose-400
  direct: '#f59e0b', // amber-500
};

// ================= Component =================
const ranges = [
  { key: '14d', label: '14 Days', days: 14 },
  { key: '30d', label: '30 Days', days: 30 },
];
export default function UtmCampaignDashboard() {
  const [range, setRange] = useState('30d');
  const [metric, setMetric] = useState<
    'sessions' | 'pageViews' | 'conversions'
  >('sessions');
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  const data = useMemo(() => {
    const d = ranges.find(r => r.key === range)?.days ?? 30;
    return generateUtmData(d, 7, metric);
  }, [range, metric]);

  // const rangeText = useMemo(() => {
  //   if (!data.length) return '';
  //   const start = data[0].date;
  //   const end = data[data.length - 1].date;
  //   return `${start} – ${end}`;
  // }, [data]);

  const titleMap = {
    sessions: 'Sessions',
    pageViews: 'Page Views',
    conversions: 'Conversions',
  } as const;
  return (
    <div className="dark:bg-dark-charcoal shadow bg-white rounded-lg h-full">
      <div className="flex items-start justify-between p-3">
        <div className="space-y-0.5">
          <div className="font-semibold dark:text-neutral-200">
            UTM Campaign Analytics
          </div>
          <span className="text-sm dark:text-neutral-400 font-medium">
            Sunset Drive through Naha, Okinawa / 8K 60fps HDR / Relaxing Lofi
            Beats
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Select
            size="sm"
            defaultValue={'sessions'}
            variant="unstyled"
            onChange={_value => setMetric(_value)}
            w={130}
            className="dark:bg-dark-charcoal-gray font-semibold rounded-lg pl-2"
            classNames={{
              dropdown: 'dark:bg-dark-charcoal dark:border-neutral-800',
              option:
                'dark:text-neutral-200 hover:dark:bg-dark-charcoal-gray rounded-lg',
              input: 'dark:text-neutral-200',
            }}
            data={[
              {
                value: 'sessions',
                label: 'Sessions',
              },
              {
                value: 'pageViews',
                label: 'Page Views',
              },
              {
                value: 'conversions',
                label: 'Conversions',
              },
            ]}
          />
          <Select
            size="sm"
            variant="unstyled"
            w={130}
            defaultChecked
            defaultValue={'14d'}
            onChange={_value => setRange(_value as string)}
            className="dark:bg-dark-charcoal-gray font-semibold rounded-lg pl-2"
            classNames={{
              dropdown: 'dark:bg-dark-charcoal dark:border-neutral-800',
              option:
                'dark:text-neutral-200 hover:dark:bg-dark-charcoal-gray rounded-lg',
              input: 'dark:text-neutral-200',
            }}
            data={ranges.map(it => {
              return {
                value: it.key,
                label: it.label,
              };
            })}
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid stroke="#27272a" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#27272a' }}
          />
          <YAxis
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
            tickFormatter={v => formatShort(v)}
            width={56}
            tickLine={false}
            axisLine={{ stroke: '#27272a' }}
          />
          <Tooltip
            content={<CustomTooltip metric={titleMap[metric]} />}
            cursor={{ stroke: '#71717a', strokeDasharray: '4 4' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{
              color: '#d4d4d8',
              fontSize: 12,
              paddingBottom: 8,
            }}
            onClick={({ dataKey }) => {
              if (!dataKey) return;
              setHidden(h => ({
                ...h,
                [dataKey.toString()]: !h[dataKey.toString()],
              }));
            }}
          />
          {UTM_SOURCES.map(s => (
            <Line
              key={s}
              type="monotone"
              dataKey={s}
              name={s}
              stroke={COLORS[s]}
              strokeWidth={2}
              activeDot={{ r: 4 }}
              dot={false}
              hide={!!hidden[s]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div className="p-6 border-t border-t-neutral-800">
        <div className="grid grid-cols-6">
          <div className="flex items-center text-sm">
            <span className="font-medium text-red-500">
              Google: <b className="dark:text-neutral-300">94.511</b>
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-blue-500">
              Facebook: <b className="dark:text-neutral-300">94.511</b>
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-orange-500">
              X/Twitter: <b className="dark:text-neutral-300">94.511</b>
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-pink-500">
              Reddit: <b className="dark:text-neutral-300">94.511</b>
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-orange-500">
              Linkedin: <b className="dark:text-neutral-300">94.511</b>
            </span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-orange-500">
              Newsletter: <b className="dark:text-neutral-300">94.511</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
function CustomTooltip({ active, payload, label, metric }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 shadow-xl">
        <div className="text-xs text-zinc-400">{label}</div>
        <div className="mt-1 space-y-1 text-sm">
          {payload.map((p: any) => (
            <div key={p.dataKey} className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: p.stroke }}
              />
              <span className="capitalize">{p.name}</span>
              <strong className="ml-1">{formatShort(p.value)}</strong>
            </div>
          ))}
        </div>
        <div className="mt-1 text-[10px] text-zinc-500">Metric: {metric}</div>
      </div>
    );
  }
  return null;
}
