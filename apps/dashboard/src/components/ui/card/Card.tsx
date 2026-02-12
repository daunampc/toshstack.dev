import { AreaChart } from '@mantine/charts';
import { LuBetweenHorizontalStart, LuDot, LuPackagePlus } from 'react-icons/lu';

import avatarJPG from '@/assets/images/avatar-v1.jpg';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from 'recharts';
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiTimerFlashLine,
} from 'react-icons/ri';
import clsx from 'clsx';
import type {
  CardPostBlogProps,
  CardStatAutomationProps,
  CardStatBlogProps,
  CardStatEmailMKTProps,
  CardStatProps,
  CardStatusBlogProps,
} from './card.types';
import {
  PiRowsPlusTop,
  PiSealCheckBold,
  PiShirtFoldedDuotone,
} from 'react-icons/pi';
import { formatNumber } from '@/utils/formatNumber';
import { FiArrowUpRight } from 'react-icons/fi';
import { TiArrowDown, TiMediaPauseOutline } from 'react-icons/ti';
import { MdReportGmailerrorred } from 'react-icons/md';
import {
  IoIosMore,
  IoMdMore,
  IoMdStopwatch,
  IoMdTrendingDown,
  IoMdTrendingUp,
} from 'react-icons/io';
import type { IconType } from 'react-icons/lib';
import { Avatar, Badge, Button, Image, Popover } from '@mantine/core';
import { useMemo, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { FaRegEye } from 'react-icons/fa6';
import { BiLike } from 'react-icons/bi';

const data = [
  {
    domain: 'toshstack.dev',
    register: '',
  },
];
interface IDataRedis {
  key: string;
  label: string;
  icon: IconType;
  value: number;
  color?: string;
}

const CardStat: React.FC<CardStatProps> = ({
  label,
  status,
  footer,
  icon,
  count,
  description,
  is_analytic = true,
}) => {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow p-3 rounded-lg space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex-shrink">{icon}</div>
          <div className="font-semibold dark:text-neutral-200 text-dark-slate">
            {label}
          </div>
        </div>
        {/* <div className="text-xs dark:text-neutral-200 font-medium dark:bg-gray-700/30 px-3 py-0.5 rounded-lg"> */}
        {/*   View report */}
        {/* </div> */}
      </div>
      <div className="space-y-0.5">
        <div className="flex items-center gap-2">
          <div className="text-xl dark:text-neutral-200 text-dark-slate font-bold flex items-center">
            {count}
          </div>
          {status && (
            <div className="flex items-center">
              {status.type === 'down' ? (
                <RiArrowDownSFill size={20} className={'text-red-500'} />
              ) : (
                <RiArrowUpSFill size={20} className={'text-green-500'} />
              )}
              <span
                className={clsx(
                  status.type === 'up' ? 'text-green-600' : 'text-red-500',
                  'font-medium text-sm',
                )}
              >
                {status.type === 'down' ? '-' : '+'}
                {status.count}%
              </span>
            </div>
          )}
        </div>
        <span className="text-xs font-medium dark:text-gray-400 text-gray-700 line-clamp-1">
          {description}
        </span>
      </div>
      {footer}
      <div>
        {is_analytic && (
          <AreaChart
            h={200}
            data={data}
            dataKey="domain"
            series={[
              { name: 'Apples', color: 'indigo.6' },
              { name: 'Oranges', color: 'blue.6' },
              { name: 'Tomatoes', color: 'teal.6' },
            ]}
            curveType="linear"
          />
        )}
      </div>
    </div>
  );
};

const CardStatAutomation: React.FC<CardStatAutomationProps> = ({
  label,
  description,
  total,
  date,
  value,
}) => {
  const dataRedis: IDataRedis[] = [
    {
      key: 'active',
      label: 'Active',
      icon: LuBetweenHorizontalStart,
      color: '#3B82F6',
      value: value.active,
    }, // xanh dương
    {
      key: 'waiting',
      label: 'Waiting',
      icon: IoMdStopwatch,
      color: '#F59E0B',
      value: value.waiting,
    }, // vàng
    {
      key: 'waiting-children',
      label: 'Waiting Children',
      icon: PiRowsPlusTop,
      color: '#F59E0B',
      value: value.waiting_children,
    },
    {
      key: 'prioritized',
      label: 'Prioritized',
      icon: LuPackagePlus,
      color: '#D946EF',
      value: value.prioritized,
    }, // tím hồng
    {
      key: 'completed',
      label: 'Completed',
      icon: PiSealCheckBold,
      color: '#10B981',
      value: value.completed,
    }, // xanh lá
    {
      key: 'failed',
      label: 'Failed',
      icon: MdReportGmailerrorred,
      color: '#EF4444',
      value: value.failed,
    }, // đỏ
    {
      key: 'delayed',
      label: 'Delayed',
      icon: RiTimerFlashLine,
      color: '#8B5CF6',
      value: value.delay,
    }, // tím
    {
      key: 'paused',
      label: 'Paused',
      icon: TiMediaPauseOutline,
      color: '#333333',
      value: value.paused,
    }, // xám
  ];

  return (
    <div className="w-full dark:bg-dark-charcoal text-dark-slate bg-white shadow p-2.5 rounded-lg space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="font-semibold dark:text-neutral-100 text-lg">
          {label}
        </div>
        <Button size="xs" color="teal" variant="light" className="font-medium">
          View report
        </Button>
      </div>

      <div className="flex items-center gap-0.5">
        <PiShirtFoldedDuotone size={25} className="text-gray-600 " />
        <div className="font-bold text-2xl text-dark-slate dark:text-neutral-200">
          {formatNumber(total)}
        </div>
        <div
          className={clsx(
            'bg-green-500/10 text-green-700 dark:text-green-600 flex items-center font-semibold text-xs rounded-xl px-1.5 py-0.5',
          )}
        >
          <span>16%</span>
          <FiArrowUpRight size={16} />
        </div>
      </div>
      <span className="text-xs font-medium dark:text-gray-500">
        {description}
      </span>
      <div>
        <ul className="">
          {dataRedis.map(it => {
            const Icon = it.icon;
            return (
              <li
                key={it.key}
                className="flex items-center justify-between px-1 py-2 border-b border-dashed border-gray-200 dark:border-neutral-700"
              >
                <div className="flex items-center gap-1">
                  <Icon size={18} style={{ color: `${it.color}` }} />

                  <span
                    className={clsx(
                      `text-sm font-semibold dark:text-neutral-200`,
                    )}
                  >
                    {it.label}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-bold items-center flex gap-0.5">
                    <span className="font-bold text-sm text-gray-800 dark:text-neutral-300">
                      {it.value}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <TiArrowDown size={18} className="text-red-500" />
                    <span className="font-bold text-sm text-red-500">2.6%</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end mt-2 font-semibold dark:text-blue-400 text-gray-600 text-xs">
          {date}
        </div>
      </div>
    </div>
  );
};

/**
 * CardStatBlog Component
 *
 * 🇬🇧 A reusable card component to display blog statistics with a clean design and responsive layout.
 */

// Dữ liệu mẫu
const data_w = [
  { a: 60, b: 20 },
  { a: 80, b: 50 },
  { a: 25, b: 60 },
  { a: 100, b: 30 },
  { a: 70, b: 90 },
  { a: 50, b: 70 },
  { a: 60, b: 50 },
];
const CardStatBlog: React.FC<CardStatBlogProps> = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="w-full bg-white dark:bg-dark-charcoal rounded-lg shadow p-3 space-y-1">
      <div className="flex items-center justify-between">
        <Icon
          className="bg-blue-500/10 text-blue-500 p-1 rounded-lg"
          size={30}
        />
        <Button size="compact-xs" color="cyan" variant="light">
          <IoIosMore />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-1 flex-1">
          <div className="space-y-0.5">
            <div className="font-medium text-gray-700 dark:text-neutral-200 text-sm">
              {label}
            </div>
            <div className="text-xs font-medium text-gray-400">09/10/2025</div>
          </div>
          <div className="font-bold text-2xl dark:text-neutral-100 text-dark-slate">
            {formatNumber(value)}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={50} className={'flex-1'}>
          <LineChart data={data_w}>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f1f1f',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            {/* Dòng màu hồng */}
            <Line
              type="monotone"
              dataKey="a"
              stroke="#ff006e"
              strokeWidth={2}
              dot={false}
            />
            {/* Dòng màu vàng */}
            <Line
              type="monotone"
              dataKey="b"
              stroke="#ffbe0b"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-gray-800 dark:text-gray-400">
          Last 30 days
        </span>
        <div className="flex items-center text-xs gap-0.5 bg-green-500/20 dark:bg-green-500/10 text-green-700 dark:text-green-500 rounded-lg px-1 py-0.5">
          <FiArrowUpRight
            size={15}
            className="text-green-700 dark:text-green-500"
          />
          <span className="font-medium">16.25%</span>
        </div>
      </div>
    </div>
  );
};
const CardStatusBlog: React.FC<CardStatusBlogProps> = ({
  label,
  icon: Icon,
  value,
  color,
}) => {
  return (
    <div className="w-full dark:bg-dark-charcoal-gray bg-slate-100 shadow rounded-lg">
      <div className="flex items-start gap-2 p-3">
        <div
          className={clsx(
            color === 'green'
              ? 'bg-green-500/10'
              : color === 'red'
                ? 'bg-red-500/10'
                : color === 'blue'
                  ? 'bg-blue-500/10'
                  : color === 'yellow'
                    ? 'bg-yellow-500/10'
                    : color === 'cyan'
                      ? 'bg-cyan-500/10'
                      : color === 'pink'
                        ? 'bg-pink-500/10'
                        : '',
            ' rounded-full p-1.5',
          )}
        >
          <Icon
            size={25}
            className={clsx(
              color === 'green'
                ? 'text-green-500'
                : color === 'red'
                  ? 'text-red-500'
                  : color === 'blue'
                    ? 'text-blue-500'
                    : color === 'yellow'
                      ? 'text-yellow-500'
                      : color === 'cyan'
                        ? 'text-cyan-500'
                        : color === 'pink'
                          ? 'text-pink-500'
                          : '',
              'shrink-0',
            )}
          />
        </div>
        <div className="space-y-0.5 grow">
          <div className="font-medium dark:text-neutral-200">{label}</div>
          <div className="flex items-center gap-1">
            <div className="text-3xl font-bold dark:text-neutral-200">
              {formatNumber(value)}
            </div>
            <Badge variant="light" color="green" className="font-medium">
              +16%
            </Badge>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          color === 'green'
            ? 'bg-green-500'
            : color === 'red'
              ? 'bg-red-500'
              : color === 'blue'
                ? 'bg-blue-500'
                : color === 'yellow'
                  ? 'bg-yellow-500'
                  : color === 'cyan'
                    ? 'bg-cyan-500'
                    : color === 'pink'
                      ? 'bg-pink-500'
                      : '',
          'w-full h-1 rounded-lg',
        )}
      ></div>
    </div>
  );
};

export type EmailDayPoint = {
  day: string; // Mon..Sun
  sent: number; // emails sent that day
  bg: number; // background bar height (max scale)
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;
const FULL_LABEL: Record<string, string> = {
  Sun: 'Sun',
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
};
function generateEmailWeek(seed = 3) {
  function rand() {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    return ((seed >>> 0) % 1000) / 1000;
  }
  const today = new Date();
  const arr: { day: string; sent: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const day = WEEK_DAYS[d.getDay()];
    // lower traffic on Thu, higher on Sat
    const base = day === 'Sat' ? 900 : day === 'Thu' ? 350 : 600;
    const sent = Math.round(base * (0.5 + rand()));
    arr.push({ day, sent });
  }
  const max = Math.max(...arr.map(r => r.sent), 1);
  return arr.map(r => ({ ...r, bg: max }));
}
function DayTick({ x, y, payload }: any) {
  const isToday =
    new Date().toLocaleDateString('en-US', { weekday: 'short' }) ===
    payload.value;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        dy={16}
        textAnchor="middle"
        fill={isToday ? '#fafafa' : '#a1a1aa'}
        style={{ fontSize: 12, fontWeight: isToday ? 700 : 500 }}
      >
        {FULL_LABEL[payload.value] || payload.value}
      </text>
    </g>
  );
}
const CardStatEmalMKT: React.FC<CardStatEmailMKTProps> = data => {
  const theme = useTheme();
  const [isShowAnalytic, setIsShowAnalytic] = useState<boolean>(false);
  const data_mkt = useMemo<EmailDayPoint[]>(() => {
    const base = data.data_chart ?? generateEmailWeek();
    const max = Math.max(...base.map(b => b.sent), 1);
    return base.map(b => ({ day: b.day, sent: b.sent, bg: max }));
  }, [data.data_chart]);
  const Icon = data.icon;
  // const total = useMemo(
  //   () => data_mkt.reduce((a, b) => a + b.sent, 0),
  //   [data_mkt],
  // );
  return (
    <div className="w-full">
      <div className=" dark:bg-dark-charcoal bg-white shadow p-3 rounded-lg space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="dark:bg-neutral-500/20 bg-gray-100 p-1.5 rounded-lg">
              {Icon && (
                <Icon
                  className="dark:text-neutral-300 text-gray-600"
                  size={25}
                />
              )}
            </div>
            <div className="font-semibold text-lg dark:text-neutral-300 text-dark-slate">
              {data.label}
            </div>
          </div>
          <Popover>
            <Popover.Target>
              <Button size="compact-xs" color="gray" variant="light">
                <IoMdMore size={14} className="dark:text-neutral-300" />
              </Button>
            </Popover.Target>
            <Popover.Dropdown className="dark:bg-dark-charcoal border dark:border-neutral-600 p-2 rounded-lg flex flex-col gap-1.5">
              <Button size="xs" color="blue" variant="light">
                Info
              </Button>
              <Button
                onClick={() => setIsShowAnalytic(true)}
                size="xs"
                color="orange"
                variant="light"
              >
                Show anaylytic
              </Button>
            </Popover.Dropdown>
          </Popover>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold dark:text-neutral-200 text-dark-slate">
            {formatNumber(data.count)}
          </div>
          <div
            className={clsx(
              data.status?.type === 'down'
                ? 'bg-red-500/10'
                : 'bg-green-500/10',
              'flex items-center gap-1 p-1 rounded-lg',
            )}
          >
            {data.status?.type === 'down' ? (
              <IoMdTrendingDown
                size={17}
                className={clsx('text-red-500', 'font-bold text-2xl')}
              />
            ) : (
              <IoMdTrendingUp
                size={17}
                className={clsx('text-green-500', 'font-bold text-2xl')}
              />
            )}
            <div
              className={clsx(
                data.status?.type === 'down'
                  ? 'text-red-500'
                  : 'text-green-500',
                'font-bold text-sm',
              )}
            >
              {data.status?.type === 'down' ? '-' : '+'}
              {data.status?.count}%
            </div>
          </div>
        </div>
        <div className="font-medium dark:text-neutral-400 text-gray-500 text-sm">
          {data.description}
        </div>
        {isShowAnalytic && (
          <Button
            onClick={() => setIsShowAnalytic(false)}
            size="xs"
            color="indigo"
            variant="light"
          >
            Hide
          </Button>
        )}
        <ResponsiveContainer
          width="100%"
          height={isShowAnalytic ? 200 : 0}
          className={'transition-all duration-300'}
        >
          <BarChart data={data_mkt}>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={<DayTick />}
            />
            <YAxis
              hide
              domain={[0, (dataMax: number) => Math.max(dataMax, 1)]}
            />
            <Tooltip
              cursor={{ fill: '#0000' }}
              content={({ active, payload }) => {
                if (!active || !payload || !payload.length) return null;
                const p = payload.find(x => x.dataKey === 'sent') ?? payload[0];
                return (
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 shadow-xl">
                    <div className="text-xs text-zinc-400">
                      {p?.payload?.day}
                    </div>
                    <div className="text-sm">
                      Sent: <strong>{p?.payload?.sent}</strong>
                    </div>
                  </div>
                );
              }}
            />

            {/* Foreground pill (value) */}
            <Bar
              dataKey="sent"
              name="Sent"
              fill="#E80054"
              // className="dark:bg-red-100"

              background={{
                fill: `${theme.theme === 'dark' ? '#1f1f25' : '#F1F5F9'}`,
                radius: 99999,
              }}
              radius={[999, 999, 999, 999]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CardPostBlog: React.FC<CardPostBlogProps> = ({
  title,
  description,
  image,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        props.className,
        'shadow dark:bg-dark-charcoal bg-white rounded-lg p-3 space-y-3',
      )}
    >
      <div className="w-full relative">
        <Image
          src={image}
          h={140}
          radius={'md'}
          className="rounded-lg"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
        <Badge className="absolute right-0 top-0" radius={'sm'}>
          HOT
        </Badge>
      </div>
      <div className="space-x-1">
        <Badge
          className="capitalize"
          variant="filled"
          color="violet"
          radius={'md'}
        >
          Developer
        </Badge>
        <Badge
          className="capitalize"
          variant="filled"
          color="violet"
          radius={'md'}
        >
          Developer
        </Badge>
        <Badge
          className="capitalize"
          variant="filled"
          color="violet"
          radius={'md'}
        >
          Developer
        </Badge>
        <Badge
          className="capitalize"
          variant="filled"
          color="violet"
          radius={'md'}
        >
          Developer
        </Badge>
      </div>
      <div className="">
        <div className="font-semibold dark:text-neutral-200 text-dark-charcoal line-clamp-2">
          {title}
        </div>
        <p className="text-sm dark:text-neutral-400 font-medium">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1 dark:text-neutral-200 text-sm">
          <FaRegEye />
          <span className="font-semibold">149K</span>
        </div>
        <LuDot className="dark:text-neutral-400" />

        <div className="flex items-center gap-1 dark:text-neutral-200 text-sm">
          <BiLike />
          <span className="font-semibold">149K</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Avatar src={avatarJPG} />
        <div className="flex flex-col gap-0.5">
          <div className="text-sm font-semibold dark:text-neutral-200">
            Itou Toshiro
          </div>
          <span className="text-xs font-medium dark:text-neutral-400">
            July 6 2023
          </span>
        </div>
      </div>
    </div>
  );
};
export {
  CardPostBlog,
  CardStat,
  CardStatAutomation,
  CardStatBlog,
  CardStatusBlog,
  CardStatEmalMKT,
};
