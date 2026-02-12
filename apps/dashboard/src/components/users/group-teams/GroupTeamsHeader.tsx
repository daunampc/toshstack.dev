import { Button } from '@mantine/core';
import { FaPlus } from 'react-icons/fa6';
import { LuSettings2 } from 'react-icons/lu';

const GroupTeamsHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between rounded-lg">
      <div className="text-lg font-semibold dark:text-neutral-200 text-dark-slate">
        Group Teams: 249
      </div>
      <div className="space-x-1.5">
        <Button variant="light" color="blue" size="xs">
          <LuSettings2 />
        </Button>
        <Button
          variant="gradient"
          color="indigo"
          leftSection={<FaPlus />}
          size="xs"
        >
          Add New Group
        </Button>
      </div>
    </div>
  );
};
export default GroupTeamsHeader;
