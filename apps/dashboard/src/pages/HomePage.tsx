import {
  HomePageAccess,
  HomePageActitivy,
  HomePageChart,
  HomePageFilter,
  HomePageStats,
  HomePageTableTransaction,
  HomePageYourBalance,
  RecentTransactions,
} from '@/components/dashboard/home';
export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-xl font-semibold dark:text-purple-400">
            Dashboard
          </div>
          <div className="text-base font-medium dark:text-neutral-400">
            Hi ToshStack. Welcome back to manager system
          </div>
        </div>
        <div>
          <HomePageFilter />
        </div>
      </div>
      <div className="grid grid-cols-8  gap-3 items-stretch">
        <div className="col-span-full xl:col-span-4">
          <HomePageStats />
        </div>
        <div className="xl:col-span-2 lg:col-span-4 col-span-full">
          <HomePageAccess />
        </div>
        <div className="xl:col-span-2 lg:col-span-4 col-span-full">
          <HomePageYourBalance />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-3">
        <div className="xl:col-span-4 col-span-full dark:bg-dark-charcoal rounded-lg">
          <HomePageChart />
        </div>
        <div className="xl:col-span-4 col-span-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 h-full">
            <RecentTransactions />
            <HomePageActitivy />
          </div>
        </div>
      </div>
      <div>
        <HomePageTableTransaction />
      </div>
    </div>
  );
}
