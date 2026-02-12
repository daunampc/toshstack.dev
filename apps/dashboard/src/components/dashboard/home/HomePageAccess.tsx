import { Button, Popover } from '@mantine/core';
import { FaEllipsis } from 'react-icons/fa6';
import { DonutChart } from '@mantine/charts';

const data = [
  { name: 'Mobile', value: 1200, color: 'cyan.6' },
  { name: 'Desktop', value: 980, color: 'yellow.6' },
  { name: 'Laptop', value: 1150, color: 'teal.6' },
  { name: 'Tablet', value: 815, color: 'violet.6' },
];

export default function HomePageAccess() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg overflow-hidden">
      <div className="flex items-center p-2.5 justify-between">
        <div className="dark:text-neutral-200 font-semibold">
          Leads By Source
        </div>
        <Popover>
          <Popover.Target>
            <Button size="compact-xs" variant="light" color="blue">
              <FaEllipsis />
            </Button>
          </Popover.Target>
        </Popover>
      </div>
      <div className="border-t dark:border-neutral-700 border-neutral-300">
        <div className="mx-auto flex justify-center p-4">
          <DonutChart
            data={data}
            size={200}
            className="[&>div>div>div>svg>text]:dark:!fill-neutral-200 font-semibold"
            strokeWidth={0}
            thickness={25}
            tooltipDataSource="segment"
            chartLabel="Total access page"
            withTooltip
            withLabelsLine
            withLabels
            tooltipAnimationDuration={500}
          />
        </div>
      </div>
      <div className="border-dashed border-t dark:border-gray-600 border-neutral-400 grid grid-cols-4">
        <div className="p-3 flex border-dashed border-r dark:border-gray-600 border-neutral-400 flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            <span className="dark:text-neutral-400 text-sm font-medium">
              Mobile
            </span>
          </div>
          <div className="font-bold text-lg text-center dark:text-neutral-200 text-gray-800">
            1,624
          </div>
        </div>
        <div className="p-3 border-dashed border-r dark:border-gray-600 border-neutral-400 flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="dark:text-neutral-400 text-dark-slate text-sm font-medium">
              Desktop
            </span>
          </div>
          <div className="font-bold text-lg text-center dark:text-neutral-200 text-gray-800">
            1,624
          </div>
        </div>
        <div className="p-3 border-dashed border-r dark:border-gray-600 border-neutral-400 flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <span className="dark:text-neutral-400 text-dark-slate text-sm font-medium">
              Laptop
            </span>
          </div>
          <div className="font-bold text-lg text-center dark:text-neutral-200 text-gray-800">
            1,624
          </div>
        </div>
        <div className="p-3 flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="dark:text-neutral-400 text-dark-slate text-sm font-medium">
              Tablet
            </span>
          </div>
          <div className="font-bold text-lg text-center dark:text-neutral-200 text-gray-800">
            1,624
          </div>
        </div>
      </div>
    </div>
  );
}
