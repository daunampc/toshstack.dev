import { Button, Input } from '@mantine/core';
import { FaBell } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { LuTags } from 'react-icons/lu';
import { VscSaveAll } from 'react-icons/vsc';

export default function SystemLogsHeader() {
  return (
    <div className="dark:bg-dark-charcoal p-2 rounded-lg">
      <div className="flex items-center justify-between">
        <Input
          w={450}
          radius={'xl'}
          leftSection={<FiSearch />}
          placeholder="Enter your search history by ID or Tag"
          classNames={{ input: 'dark:bg-dark-charcoal-gray' }}
        />
        <div className="flex items-center gap-1">
          <Button
            size="xs"
            leftSection={<VscSaveAll />}
            variant="light"
            color="green"
          >
            Save
          </Button>
          <Button
            size="xs"
            leftSection={<LuTags />}
            variant="light"
            color="grape"
          >
            Manager
          </Button>
          <Button
            size="xs"
            leftSection={<FaBell />}
            variant="light"
            color="grape"
          >
            New Alert
          </Button>
        </div>
      </div>
    </div>
  );
}
