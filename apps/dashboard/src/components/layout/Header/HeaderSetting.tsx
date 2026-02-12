import { IoMdSettings } from 'react-icons/io';
import { Button } from '@mantine/core';

export default function HeaderSetting() {
  return (
    <div>
      <Button size="compact-sm" variant="transparent" color="gray">
        <IoMdSettings size={20} />
      </Button>
    </div>
  );
}
