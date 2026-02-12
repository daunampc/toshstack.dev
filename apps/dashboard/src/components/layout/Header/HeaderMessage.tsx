import { TbMessage } from 'react-icons/tb';
import { Button, Indicator } from '@mantine/core';

export default function HeaderMessage() {
  return (
    <div>
      <Indicator
        position="top-end"
        offset={4}
        processing
        size={10}
        className="font-medium"
        color="red"
        radius={'lg'}
      >
        <Button variant="transparent" size="compact-sm">
          <TbMessage size={20} className="dark:text-gray-400" />
        </Button>
      </Indicator>
    </div>
  );
}
