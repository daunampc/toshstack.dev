import { AiFillProduct } from 'react-icons/ai';
import { FaKey, FaLink } from 'react-icons/fa6';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { TbBrandBlogger } from 'react-icons/tb';

export default function RecentTransactions() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="flex items-center justify-between p-3 relative">
        <div className="absolute w-1 h-5 top-3 left-1 rounded bg-gradient-to-b dark:from-[#845adf]/50 dark:to-[#23b8e5]/50"></div>
        <div className="font-semibold dark:text-neutral-200">
          Recent Transactions
        </div>
      </div>
      <ul className="p-3 border-t dark:border-t-neutral-700 border-neutral-300 space-y-3">
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MdOutlineShoppingBag
              className="bg-purple-600 p-1 rounded-lg text-white"
              size={30}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold dark:text-white text-sm">
                Web Pay
              </span>
              <span className="text-xs dark:text-neutral-500 font-medium">
                Money
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <span className="font-semibold text-sm text-red-600">-$256.99</span>
            <span className="text-xs dark:text-neutral-500 font-medium">
              Mar 12,2022
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TbBrandBlogger
              className="bg-cyan-600 p-1 rounded-lg text-white"
              size={30}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold dark:text-white text-sm">
                Blog
              </span>
              <span className="text-xs dark:text-neutral-500 font-medium">
                Card
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <span className="font-semibold text-sm text-red-600">-$256.99</span>
            <span className="text-xs dark:text-neutral-500 font-medium">
              Mar 12,2022
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AiFillProduct
              className="bg-yellow-600 p-1 rounded-lg text-white"
              size={30}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold dark:text-white text-sm">
                Source
              </span>
              <span className="text-xs dark:text-neutral-500 font-medium">
                Money
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <span className="font-semibold text-sm text-red-600">-$256.99</span>
            <span className="text-xs dark:text-neutral-500 font-medium">
              Mar 12,2022
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaKey
              className="bg-pink-600 p-1 rounded-lg text-white"
              size={30}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold dark:text-white text-sm">
                Key API
              </span>
              <span className="text-xs dark:text-neutral-500 font-medium">
                Money
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <span className="font-semibold text-sm text-red-600">-$256.99</span>
            <span className="text-xs dark:text-neutral-500 font-medium">
              Mar 12,2022
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaLink
              className="bg-amber-600 p-1 rounded-lg text-white"
              size={30}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold dark:text-white text-sm">
                Link URL
              </span>
              <span className="text-xs dark:text-neutral-500 font-medium">
                Money
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <span className="font-semibold text-sm text-red-600">-$256.99</span>
            <span className="text-xs dark:text-neutral-500 font-medium">
              Mar 12,2022
            </span>
          </div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MdOutlineShoppingBag
              className="bg-purple-600 p-1 rounded-lg text-white"
              size={30}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold dark:text-white text-sm">
                Web Pay
              </span>
              <span className="text-xs dark:text-neutral-500 font-medium">
                Money
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <span className="font-semibold text-sm text-red-600">-$256.99</span>
            <span className="text-xs dark:text-neutral-500 font-medium">
              Mar 12,2022
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
