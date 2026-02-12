import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { TiArrowRight } from 'react-icons/ti';
import { Link } from 'react-router';
import { RxDotFilled } from 'react-icons/rx';
import { FaCoins } from 'react-icons/fa6';
import { Sparkline } from '@mantine/charts';

export default function HomePageYourBalance() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="border-b dark:border-neutral-600 border-neutral-300 p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <MdOutlineAccountBalanceWallet
            size={25}
            className="dark:text-neutral-400"
          />
          <div className="dark:text-neutral-300 font-semibold text-sm">
            Your Balance
          </div>
        </div>
        <Link to={'/'}>
          <TiArrowRight size={30} className="dark:text-neutral-200" />
        </Link>
      </div>
      <div className="p-2.5">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="text-2xl text-green-500 font-bold">$246,914.1</div>
            <RxDotFilled size={20} className="dark:text-neutral-300" />
            <div className="flex items-center gap-1">
              <FaCoins size={15} className="text-yellow-500" />
              <div className="text-2xl text-yellow-500 font-bold">249</div>
            </div>
          </div>
          <span className="text-xs dark:text-gray-400 font-medium">
            The total amount of money from all sources that has been added up
            and is currently here.
          </span>
          <Sparkline
            w={'100%'}
            h={100}
            data={[10, 20, 40, 20, 40, 10, 50, 100, 20, 55, 69]}
            curveType="bump"
            color="orange"
            fillOpacity={0.62}
            strokeWidth={2.4}
          />
          <div className="flex items-center">
            <Link
              className="px-2 py-1 text-sm font-medium dark:text-pink-500 rounded-md"
              to={'/'}
            >
              View more
            </Link>
            <Link
              className="p-2 text-sm font-medium dark:text-cyan-500"
              to={'/'}
            >
              History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
