import { Button, Input } from '@mantine/core';
import { IoSearch } from 'react-icons/io5';

export default function AllCategoriesHeader() {
  return (
    <div className="w-full flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-2">
        <Input
          w={350}
          leftSection={<IoSearch />}
          placeholder="Search category"
          classNames={{
            input:
              'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
          }}
        />
        <Button variant="gradient" size="xs">
          Add new category
        </Button>
      </div>
    </div>
  );
}
