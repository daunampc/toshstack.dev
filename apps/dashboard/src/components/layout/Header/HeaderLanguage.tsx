import vnFlag from '@/assets/images/vn-flag.png';
import usFlag from '@/assets/images/us_flag.jpg';
import { Image, Popover } from '@mantine/core';
export default function HeaderLanguage() {
  return (
    <Popover
      offset={{ mainAxis: 25 }}
      width={160}
      withinPortal={false}
      classNames={{
        dropdown: 'dark:bg-dark-charcoal dark:border-gray-600 p-0',
      }}
    >
      <Popover.Target>
        <div className="flex items-center gap-2">
          <Image
            src={vnFlag}
            width={60}
            height={60}
            w={'auto'}
            h={14}
            className="rounded-xs"
          />
          <span className="text-sm font-semibold dark:text-white">VN</span>
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <div className="flex items-center gap-2 p-2.5 hover:bg-neutral-800">
          <Image
            src={vnFlag}
            width={60}
            height={60}
            w={'auto'}
            h={14}
            className="rounded-xs"
          />
          <span className="text-sm font-semibold dark:text-white">
            Vietnamese
          </span>
        </div>
        <div className="flex items-center gap-2 p-2.5 hover:bg-neutral-800">
          <Image
            src={usFlag}
            width={60}
            height={60}
            w={'auto'}
            h={14}
            className="rounded-xs"
          />
          <span className="text-sm font-semibold dark:text-white">English</span>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
