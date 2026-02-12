import { ImBlocked } from 'react-icons/im';
import { FaBell, FaRegBell, FaUserCheck } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { Button, Indicator, Popover } from '@mantine/core';
export default function HeaderNotification() {
  return (
    <Popover
      offset={{ mainAxis: 22 }}
      width={350}
      withinPortal={false}
      radius={'md'}
      classNames={{
        dropdown: 'dark:bg-dark-charcoal dark:border-neutral-700 p-0',
      }}
    >
      <Popover.Target>
        <Indicator
          position="top-end"
          offset={4}
          processing
          size={10}
          className="font-medium"
          color="yellow"
          radius={'lg'}
        >
          <Button size="compact-sm" variant="transparent" className="">
            <FaRegBell size={20} className="dark:text-gray-400" />
          </Button>
        </Indicator>
      </Popover.Target>
      <Popover.Dropdown>
        <div className="p-3 flex items-center justify-between border-b dark:border-neutral-700">
          <div className="dark:text-gray-200 font-semibold">Notifications</div>
          <div className="inline-block rounded bg-gray-800 text-xs px-3 py-1">
            <span className="text-sky-500 font-medium">5 Unread</span>
          </div>
        </div>
        <ul>
          <li className="flex p-3 justify-between items-center hover:bg-purple-800/5 border-b dark:border-gray-600">
            <div className="flex gap-2">
              <div className="shrink-0">
                <div className=" rounded-full bg-red-800/30 p-2.5">
                  <ImBlocked size={15} className="text-red-400" />
                </div>
              </div>
              <div className="grow">
                <div className="text-gray-200 font-semibold text-sm">
                  Your Order Has Been Shipped
                </div>
                <span className="font-medium text-gray-500 text-xs">
                  Discount Available On Selected Products
                </span>
              </div>
            </div>
            <Button color="gray" size="compact-sm" variant="transparent">
              <IoCloseSharp size={22} />
            </Button>
          </li>
          <li className="flex p-3 justify-between items-center hover:bg-purple-800/5 border-b dark:border-gray-600">
            <div className="flex gap-2">
              <div className="shrink-0">
                <div className=" rounded-full bg-yellow-800/30 p-2.5">
                  <FaUserCheck size={15} className="text-yellow-400" />
                </div>
              </div>
              <div className="grow">
                <div className="text-gray-200 font-semibold text-sm">
                  Your Order Has Been Shipped
                </div>
                <span className="font-medium text-gray-500 text-xs">
                  Discount Available On Selected Products
                </span>
              </div>
            </div>
            <Button color="gray" size="compact-sm" variant="transparent">
              <IoCloseSharp size={22} />
            </Button>
          </li>
          <li className="flex p-3 justify-between items-center hover:bg-purple-800/5">
            <div className="flex gap-2">
              <div className="shrink-0">
                <div className=" rounded-full bg-purple-800/30 p-2.5">
                  <FaBell size={15} className="text-purple-400" />
                </div>
              </div>
              <div className="grow">
                <div className="text-gray-200 font-semibold text-sm">
                  Your Order Has Been Shipped
                </div>
                <span className="font-medium text-gray-500 text-xs">
                  Discount Available On Selected Products
                </span>
              </div>
            </div>
            <Button color="gray" size="compact-sm" variant="transparent">
              <IoCloseSharp size={22} />
            </Button>
          </li>
        </ul>
      </Popover.Dropdown>
    </Popover>
  );
}
