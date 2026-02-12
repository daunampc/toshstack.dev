import { Button } from '@mantine/core';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
type IssueBreakdown = {
  label: string;
  errors: number;
  warnings: number;
  delta: {
    errors: number;
    warnings: number;
  };
};

// --- Data matching the screenshot numbers ---
const issueData: IssueBreakdown = {
  label: 'Issues',
  errors: 3251,
  warnings: 3248,
  delta: {
    errors: 1929,
    warnings: 4246,
  },
};

const stackedRow = [issueData];

// --- Colors chosen to closely match the screenshot ---
const COLORS = {
  errors: '#FCA312', // tailwind red-500
  warnings: '#018845', // tailwind amber-500
  notices: '#2563EB', // tailwind blue-600
  deltaUp: '#018845', // tailwind green-600
  frame: '#E5E7EB', // tailwind gray-200 (borders)
};

// Minimal tooltip (hidden by default but kept for a11y/testing)
const HiddenTooltip = (props: any) => {
  if (!props?.active) return null;
  return (
    <div className="rounded-md dark:bg-dark-charcoal bg-white/95 px-2 py-1 text-sm shadow border dark:border-neutral-700 border-gray-200">
      {props?.payload?.map((p: any) => (
        <div
          key={p.dataKey}
          className="flex items-center gap-2 dark:text-neutral-200 font-medium"
        >
          <span
            className="inline-block h-2 w-2 rounded-sm"
            style={{ background: p.fill }}
          />
          <span>
            {p.name}: {p.value?.toLocaleString?.()}
          </span>
        </div>
      ))}
    </div>
  );
};
const SpacedBar = ({ width, height, x, y, fill }: any) => {
  const gap = 4; // small space between bars
  return (
    <rect
      x={x + gap / 2}
      y={y}
      width={width - gap}
      height={height}
      fill={fill}
      rx={3}
      ry={3}
    />
  );
};
export default function SeoCheckerPageRatio() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-lg space-y-3">
      <div className="dark:text-neutral-200 text-sm font-bold">
        PAGE HEALTH RATIO
      </div>
      <div className="space-y-1">
        <div className="font-bold text-2xl text-blue-400">19,443</div>
        <span className="dark:text-neutral-300 text-sm font-medium">
          Issues
        </span>
      </div>
      <ResponsiveContainer width="100%" height={30}>
        <BarChart
          data={stackedRow}
          layout="vertical"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          barSize={30}
          barGap={10}
        >
          <XAxis
            type="number"
            hide
            domain={[
              0,
              issueData.errors + issueData.warnings + issueData.notices,
            ]}
          />
          <YAxis type="category" dataKey="label" hide />
          <Tooltip
            content={<HiddenTooltip />}
            cursor={{ fill: 'rgba(0,0,0,0.04)' }}
          />
          <Bar
            dataKey="errors"
            name="Errors"
            shape={<SpacedBar />}
            stackId="a"
            fill={COLORS.errors}
            radius={[4, 0, 0, 4]}
          />
          <Bar
            dataKey="warnings"
            name="Warnings"
            shape={<SpacedBar />}
            stackId="a"
            fill={COLORS.warnings}
          />
          <Bar
            dataKey="notices"
            name="Notices"
            shape={<SpacedBar />}
            stackId="a"
            fill={COLORS.notices}
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <GrStatusGoodSmall className="text-green-500" size={12} />
            <span className="dark:text-neutral-200 font-medium">Healthy</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="text-blue-400">129</span>
            <IoMdArrowDropdown className="text-red-500" />
            <span className="text-green-500">1,951</span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <GrStatusGoodSmall className="text-red-500" size={12} />
            <span className="dark:text-neutral-200 font-medium">
              Have errors and warnings
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="text-blue-400">129</span>
            <IoMdArrowDropdown className="text-red-500" />
            <span className="text-green-500">1,951</span>
          </div>
        </li>
      </ul>
      <Button size="compact-xs" color="blue">
        View all issues
      </Button>
    </div>
  );
}
