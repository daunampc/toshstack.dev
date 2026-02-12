import { Button } from '@mantine/core';
import { IoIosMore } from 'react-icons/io';
import { Link } from 'react-router';

export default function HomePageActitivy() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="flex items-center justify-between p-3 relative">
        <div className="absolute w-1 h-5 top-3 left-1 rounded bg-gradient-to-b dark:from-[#845adf]/50 dark:to-[#23b8e5]/50"></div>
        <div className="font-semibold dark:text-neutral-200">Activities</div>
        <div>
          <Button variant="light" size="compact-sm">
            <IoIosMore />
          </Button>
        </div>
      </div>
      <div className="border-t dark:border-t-neutral-700 border-neutral-300 px-5 pt-3">
        <ul className="before:h-full before:w-px before:absolute before:border-dashed before:border before:dark:border-neutral-700 before:border-neutral-300  relative space-y-4">
          <li className="ps-4.5 relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-500  left-[-3px] top-0"></div>
            <Link
              to={'/'}
              className="text-xs font-medium dark:text-neutral-200"
            >
              <span className="font-medium dark:text-purple-500">
                @toshstack
              </span>
              <span className="ms-2">New Product reveived.#FX-321</span>
            </Link>
            <div className="font-medium dark:text-neutral-500 text-xs">
              12 mins ago.
            </div>
          </li>

          <li className="ps-4.5 relative space-y-1">
            <div className="absolute w-2 h-2 rounded-full bg-red-500  left-[-3px] top-0"></div>
            <Link
              to={'/'}
              className="text-xs font-medium dark:text-neutral-200"
            >
              <span className="font-medium dark:text-purple-500">
                @toshstack
              </span>
              <span className="ms-2">shared a file.</span>
            </Link>
            <div className="font-medium dark:text-neutral-500 text-xs">
              12 mins ago.
            </div>
            <div className="flex items-center gap-2 border-dashed border dark:border-neutral-700 p-1.5 rounded-md">
              <div className="text-xs text-[10px] font-semibold px-1.5 py-1 rounded-md bg-purple-500 text-white">
                PDF
              </div>
              <div className="text-xs font-medium dark:text-neutral-400">
                How fix data json error format
              </div>
            </div>
          </li>
          <li className="ps-4.5 relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-500  left-[-3px] top-0"></div>
            <Link
              to={'/'}
              className="text-xs font-medium dark:text-neutral-200"
            >
              <span className="font-medium dark:text-purple-500">
                @toshstack
              </span>
              <span className="ms-2">New Product reveived.#FX-321</span>
            </Link>
            <div className="font-medium dark:text-neutral-500 text-xs">
              12 mins ago.
            </div>
          </li>

          <li className="ps-4.5 relative space-y-1">
            <div className="absolute w-2 h-2 rounded-full bg-red-500  left-[-3px] top-0"></div>
            <Link
              to={'/'}
              className="text-xs font-medium dark:text-neutral-200"
            >
              <span className="font-medium dark:text-purple-500">
                @toshstack
              </span>
              <span className="ms-2">shared a file.</span>
            </Link>
            <div className="font-medium dark:text-neutral-500 text-xs">
              12 mins ago.
            </div>
            <div className="flex items-center gap-2 border-dashed border dark:border-neutral-700 p-1.5 rounded-md">
              <div className="text-xs text-[10px] font-semibold px-1.5 py-1 rounded-md bg-purple-500 text-white">
                PDF
              </div>
              <div className="text-xs font-medium dark:text-neutral-400">
                How fix data json error format
              </div>
            </div>
          </li>
          <li className="ps-4.5 relative">
            <div className="absolute w-2 h-2 rounded-full bg-red-500  left-[-3px] top-0"></div>
            <Link
              to={'/'}
              className="text-xs font-medium dark:text-neutral-200"
            >
              <span className="font-medium dark:text-purple-500">
                @toshstack
              </span>
              <span className="ms-2">New Product reveived.#FX-321</span>
            </Link>
            <div className="font-medium dark:text-neutral-500 text-xs">
              12 mins ago.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
