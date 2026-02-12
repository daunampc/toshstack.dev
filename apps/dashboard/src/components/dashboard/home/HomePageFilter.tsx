import { Button, Popover } from '@mantine/core';
import { VscSettings } from 'react-icons/vsc';

export default function HomePageFilter() {
  return (
    <Popover
      classNames={{
        dropdown: 'dark:bg-dark-charcoal dark:border-neutral-700 p-0',
      }}
    >
      <Popover.Target>
        <Button
          variant="light"
          radius={'sm'}
          className="dark:text-white dark:bg-neutral-700/50"
          rightSection={<VscSettings />}
        >
          Filter
        </Button>
      </Popover.Target>
      <Popover.Dropdown w={150}>
        <ul className="">
          <li className="p-2 dark:text-gray-100 font-medium text-sm hover:dark:bg-neutral-800 border-b dark:border-b-neutral-700">
            1 Days
          </li>
          <li className="p-2 dark:text-gray-100 font-medium text-sm hover:dark:bg-neutral-800 border-b dark:border-b-neutral-700">
            7 Days
          </li>
          <li className="p-2 dark:text-gray-100 font-medium text-sm hover:dark:bg-neutral-800 border-b dark:border-b-neutral-700">
            14 Days
          </li>
          <li className="p-2 dark:text-gray-100 font-medium text-sm hover:dark:bg-neutral-800 border-b dark:border-b-neutral-700">
            30 Days
          </li>
          <li className="p-2 dark:text-gray-100 font-medium text-sm hover:dark:bg-neutral-800 border-b dark:border-b-neutral-700">
            Custom
          </li>
        </ul>
      </Popover.Dropdown>
    </Popover>
  );
}
