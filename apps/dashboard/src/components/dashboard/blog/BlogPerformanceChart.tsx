import type { BlogKpiPoint, CustomTooltipProps } from '@/types';
import { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

// ------- Helpers -------
const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

const formatShort = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
};

// Simple deterministic PRNG for stable demo numbers
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateLastNDaysData(n: number, seed = 42): BlogKpiPoint[] {
  const rand = mulberry32(seed);
  const fmt = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
  });

  const out: BlogKpiPoint[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);

    // demo ranges
    const posts = Math.round(8 + rand() * 5_154); // 8–26 posts/day
    const flagged = Math.round(2 + rand() * 6_100); // 2–10 flagged/day
    const views = Math.round(2_000 + rand() * 12_000); // 2k–14k views/day
    const clicks = Math.round(200 + rand() * 1_200); // 200–1.4k clicks/day
    const revenue = Math.round(500 + rand() * 2_145); // 50–500 (đơn vị tuỳ chọn)

    out.push({
      date: fmt.format(d),
      postsPublished: posts,
      commentsFlagged: flagged,
      views,
      clicks,
      revenue,
    });
  }
  return out;
}

// ------- Demo Data (30 days) -------
const LAST_30_DAYS_DATA: BlogKpiPoint[] = generateLastNDaysData(30);

// range key type
type RangeKey = '7d' | '14d' | '30d';

const timeRanges: Array<{ key: RangeKey; label: string; days: number }> = [
  { key: '7d', label: '7 Days', days: 7 },
  { key: '14d', label: '14 Days', days: 14 },
  { key: '30d', label: '30 Days', days: 30 },
];

export default function BlogPerformanceChart() {
  const [range, setRange] = useState<RangeKey>('30d');

  const chartData: BlogKpiPoint[] = useMemo(() => {
    const d = timeRanges.find(r => r.key === range)?.days ?? 30;
    return LAST_30_DAYS_DATA.slice(-d);
  }, [range]);

  const totals = useMemo(() => {
    return {
      posts: sum(chartData.map(d => d.postsPublished)),
      flagged: sum(chartData.map(d => d.commentsFlagged)),
      views: sum(chartData.map(d => d.views)),
      clicks: sum(chartData.map(d => d.clicks)),
      revenue: sum(chartData.map(d => d.revenue)),
    };
  }, [chartData]);

  return (
    <div className="w-full rounded-lg dark:bg-dark-charcoal bg-white shadow text-zinc-100 p-6">
      {/* Header */}
      <div className="text-2xl font-bold">Blog Performance</div>
      <div className="flex items-start justify-between gap-4 border-t border-t-neutral-700 py-2 mt-2">
        <div className="space-y-0.5">
          <div className="text-xl dark:text-neutral-200 text-dark-slate font-bold tracking-tight">
            Posts: {totals.posts}
          </div>
          <div className="text-sm text-gray-500 font-medium dark:text-gray-400">
            1 January – 31 December
          </div>
        </div>

        {/* Range selector */}
        <div className="relative">
          <select
            value={range}
            onChange={e => setRange(e.target.value as RangeKey)}
            className="appearance-none rounded-xl dark:bg-zinc-900 text-dark-slate dark:text-neutral-200 bg-white shadow px-3 py-2 pr-8 text-sm focus:outline-none"
            aria-label="Select time range"
          >
            {timeRanges.map(r => (
              <option key={r.key} value={r.key}>
                {r.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500">
            ▾
          </span>
        </div>
      </div>

      {/* Legend summary */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <span className="dark:text-neutral-200 text-dark-slate font-medium">
            Published: {formatShort(totals.posts)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-rose-400" />
          <span className="dark:text-neutral-300 text-dark-slate font-medium">
            Flagged Comments: {formatShort(totals.flagged)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
          <span className="dark:text-neutral-300 text-dark-slate font-medium">
            Revenue: {formatShort(totals.revenue)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
          <span className="dark:text-neutral-300 text-dark-slate font-medium">
            Clicks: {formatShort(totals.clicks)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
          <span className="dark:text-neutral-300 text-dark-slate font-medium">
            Views: {formatShort(totals.views)}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barGap={2} barCategoryGap="15%">
            <XAxis
              dataKey="date"
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#27272a' }}
              interval={chartData.length > 14 ? 2 : 0}
            />
            <YAxis
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              tickFormatter={(v: number) => formatShort(v)}
              width={48}
              tickLine={false}
              axisLine={{ stroke: '#27272a' }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255,255,255,0.03)' }}
            />

            {/* Bars */}
            <Bar
              name="Posts Published"
              dataKey="postsPublished"
              radius={[6, 6, 0, 0]}
              fill="#34d399"
              maxBarSize={22}
            />
            <Bar
              name="Comments Flagged"
              dataKey="commentsFlagged"
              radius={[6, 6, 0, 0]}
              fill="#fb7185"
              maxBarSize={22}
            />
            <Bar
              name="Revenue"
              dataKey="revenue"
              radius={[6, 6, 0, 0]}
              fill="#facc15"
              maxBarSize={22}
            />
            <Bar
              name="Clicks"
              dataKey="clicks"
              radius={[6, 6, 0, 0]}
              fill="#38bdf8"
              maxBarSize={22}
            />
            <Bar
              name="Views"
              dataKey="views"
              radius={[6, 6, 0, 0]}
              fill="#e879f9"
              maxBarSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer helper text */}
      <div className="mt-3 text-xs text-zinc-500">
        Track how your editorial output compares with moderation and engagement
        over time.
      </div>
    </div>
  );
}

/** ------- Custom Tooltip (typed, no `any`) ------- */

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    // Lấy giá trị an toàn theo dataKey
    const byKey = (key: keyof BlogKpiPoint): number => {
      const found = payload.find(p => p.dataKey === key);
      return (typeof found?.value === 'number' ? found.value : 0) as number;
    };

    const published = byKey('postsPublished');
    const flagged = byKey('commentsFlagged');
    const revenue = byKey('revenue');
    const clicks = byKey('clicks');
    const views = byKey('views');

    return (
      <div className="rounded-lg bg-white shadow dark:bg-dark-charcoal-gray px-3 py-2 dark:text-neutral-200 text-dark-slate">
        <div className="text-xs text-zinc-400">{label}</div>
        <div className="mt-1 space-y-1 text-sm">
          <Row
            colorClass="bg-emerald-400"
            label="Published"
            value={published}
          />
          <Row colorClass="bg-rose-400" label="Flagged" value={flagged} />
          <Row colorClass="bg-yellow-400" label="Revenue" value={revenue} />
          <Row colorClass="bg-sky-400" label="Clicks" value={clicks} />
          <Row colorClass="bg-fuchsia-400" label="Views" value={views} />
        </div>
      </div>
    );
  }
  return null;
};

const Row: React.FC<{ colorClass: string; label: string; value: number }> = ({
  colorClass,
  label,
  value,
}) => (
  <div className="flex items-center gap-2">
    <span className={`inline-block h-2 w-2 rounded-full ${colorClass}`} />
    <span className="">
      {label}: <strong>{formatShort(value)}</strong>
    </span>
  </div>
);
