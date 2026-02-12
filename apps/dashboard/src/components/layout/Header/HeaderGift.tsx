import { FiGift } from 'react-icons/fi';

import { Button, Popover } from '@mantine/core';

export default function HeaderGift() {
  return (
    <Popover>
      <Popover.Target>
        <Button variant="transparent" size="compact-sm">
          <FiGift size={20} className="dark:text-gray-400" />
        </Button>
      </Popover.Target>
    </Popover>
  );
}
