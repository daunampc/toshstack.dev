import { CardStat } from '@/components/ui/card';

import { BiSolidUserAccount } from 'react-icons/bi';
import { GoWorkflow } from 'react-icons/go';

import { FaMoneyBillWave } from 'react-icons/fa6';
import { IoDocumentsOutline } from 'react-icons/io5';
import { TiMessages } from 'react-icons/ti';
import { MdOutlineReport } from 'react-icons/md';

export default function HomePageStats() {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 flex-grow">
        <CardStat
          status={{ type: 'down', count: 13 }}
          icon={
            <div className="rounded-full bg-red-400/20 p-2">
              {<BiSolidUserAccount size={20} className="text-red-400" />}
            </div>
          }
          is_analytic={false}
          description="Total account manager"
          count={'5,160k'}
          type="normal"
          label="Total website"
        />
        <CardStat
          status={{ type: 'up', count: 61 }}
          icon={
            <div className="rounded-full bg-green-400/20 p-2">
              {<FaMoneyBillWave size={20} className="text-green-400" />}
            </div>
          }
          is_analytic={false}
          description="Total website connect dashboard"
          count={'$96,511'}
          type="normal"
          label="Total Revenue"
        />
        <CardStat
          status={{ type: 'up', count: 16.1 }}
          icon={
            <div className="rounded-full bg-amber-400/20 p-2">
              {<IoDocumentsOutline size={20} className="text-amber-400" />}
            </div>
          }
          is_analytic={false}
          description="Total account manager webstie multiple"
          count={'158,160k'}
          type="normal"
          label="Total document"
        />
        <CardStat
          status={{ type: 'up', count: 1.689 }}
          icon={
            <div className="rounded-full bg-cyan-400/20 p-2">
              {<TiMessages size={20} className="text-cyan-400" />}
            </div>
          }
          is_analytic={false}
          description="Total website connect dashboard"
          count={'96,511K'}
          type="normal"
          label="Total Message"
        />
        <CardStat
          status={{ type: 'down', count: 21 }}
          icon={
            <div className="rounded-full bg-pink-400/20 p-2">
              {<GoWorkflow size={20} className="text-pink-400" />}
            </div>
          }
          is_analytic={false}
          description="Total website connect dashboard"
          count={'146'}
          type="normal"
          label="Total Today's work"
        />
        <CardStat
          status={{ type: 'up', count: 21 }}
          icon={
            <div className="rounded-full bg-orange-400/20 p-2">
              {<MdOutlineReport size={20} className="text-orange-400" />}
            </div>
          }
          is_analytic={false}
          description="Total website connect dashboard"
          count={'961.186K'}
          type="normal"
          label="Total Reports"
        />
      </div>
      <div className="h-full col-span-full grid grid-cols-2 gap-3">
        <div className="flex-1 dark:bg-dark-charcoal bg-white shadow rounded-lg h-full">
          <div className="relative px-3.5 py-2">
            <div className="absolute w-1 h-5 top-2.5 left-1.5 rounded bg-gradient-to-b dark:from-[#845adf]/50 dark:to-[#23b8e5]/50"></div>
            <div className="font-semibold dark:text-neutral-200">
              Recent Transactions
            </div>
          </div>
          <div className="px-3.5 py-2 border-t dark:border-t-neutral-700 border-neutral-300 grid grid-cols-6"></div>
        </div>

        <div className="flex-1 dark:bg-dark-charcoal bg-white shadow rounded-lg h-full">
          <div className="relative px-3.5 py-2">
            <div className="absolute w-1 h-5 top-2.5 left-1.5 rounded bg-gradient-to-b dark:from-[#845adf]/50 dark:to-[#23b8e5]/50"></div>
            <div className="font-semibold dark:text-neutral-200">
              Visitors By Countries
            </div>
          </div>
          <div className="px-3.5 py-2 border-t dark:border-t-neutral-700 border-neutral-300">
            124
          </div>
        </div>
      </div>
    </div>
  );
}
