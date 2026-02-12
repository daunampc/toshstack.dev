import { Avatar, Popover } from '@mantine/core';
import ayakaJPG from '@/assets/images/ayaka.jpg';
import { CgProfile } from 'react-icons/cg';
import {
  MdOutlineBalance,
  MdOutlineHelp,
  MdOutlineInbox,
  MdOutlineLogout,
  MdOutlineSettings,
} from 'react-icons/md';

export default function HeaderAccount() {
  return (
    <Popover
      width={200}
      offset={{ mainAxis: 17 }}
      classNames={{
        dropdown: 'p-0 dark:bg-dark-charcoal dark:border-neutral-600',
      }}
    >
      <Popover.Target>
        <div className="flex gap-2 cursor-pointer">
          <Avatar src={ayakaJPG} size={30} className="shrink-0" />
          <div className="grow flex flex-col gap-0.5">
            <div className="font-semibold dark:text-neutral-100 text-sm">
              Toshstack.dev
            </div>
            <span className="text-xs dark:text-red-400 font-medium">
              Administrator
            </span>
          </div>
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <ul>
          <li className="px-3 py-2.5 flex items-center dark:text-neutral-300 justify-between border-b dark:border-b-neutral-600 hover:dark:bg-purple-800/10 hover:dark:text-purple-400">
            <div className="flex items-center gap-2  text-sm font-medium">
              <CgProfile size={20} />
              <span>Profile</span>
            </div>
          </li>

          <li className="px-3 py-2.5 flex items-center justify-between dark:text-neutral-300 hover:dark:bg-purple-800/10 hover:dark:text-purple-400">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MdOutlineInbox size={20} />
              <span>Inbox</span>
            </div>
          </li>
          <li className="px-3 py-2.5 flex items-center justify-between dark:text-neutral-300 hover:dark:bg-purple-800/10 hover:dark:text-purple-400">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MdOutlineBalance size={20} />
              <span>
                Balance: <b className="dark:text-green-500">14.991$</b>
              </span>
            </div>
          </li>
          <li className="px-3 py-2.5 flex items-center justify-between dark:text-neutral-300 hover:dark:bg-purple-800/10 hover:dark:text-purple-400">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MdOutlineSettings size={20} />
              <span>Setting</span>
            </div>
          </li>
          <li className="px-3 py-2.5 flex items-center justify-between dark:text-neutral-300 hover:dark:bg-purple-800/10 hover:dark:text-purple-400">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MdOutlineHelp size={20} />
              <span>Help</span>
            </div>
          </li>
          <li className="px-3 py-2.5 flex items-center justify-between dark:text-neutral-300 hover:dark:bg-purple-800/10 hover:dark:text-purple-400">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MdOutlineLogout size={20} />
              <span>Log Out</span>
            </div>
          </li>
        </ul>
      </Popover.Dropdown>
    </Popover>
  );
}
