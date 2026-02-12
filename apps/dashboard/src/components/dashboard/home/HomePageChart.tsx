import { RevenueChart } from '@/components/ui/chart';
import { Button } from '@mantine/core';
import { IoIosMore } from 'react-icons/io';

export default function HomePageChart() {
  return (
    <div className="dark:bg-dark-charcoal rounded-lg bg-white shadow">
      <div className="flex items-center justify-between p-3 relative">
        <div className="absolute w-1 h-5 top-3 left-1 rounded bg-gradient-to-b dark:from-[#845adf]/50 dark:to-[#23b8e5]/50"></div>
        <div className="font-semibold dark:text-neutral-200">Total Revenue</div>
        <div>
          <Button variant="light" size="compact-sm">
            <IoIosMore />
          </Button>
        </div>
      </div>
      <div className="border-t dark:border-t-neutral-700 border-neutral-300 px-5 pt-3">
        <RevenueChart />
      </div>
    </div>
  );
}
