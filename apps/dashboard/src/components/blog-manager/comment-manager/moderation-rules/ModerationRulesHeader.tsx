import { Button } from '@mantine/core';
import { FaAutoprefixer, FaPlus } from 'react-icons/fa6';

export default function ModerationRulesHeader() {
  return (
    <div className="w-full  dark:bg-dark-charcoal px-3 py-2 rounded-lg flex items-center justify-between">
      <div className="font-medium dark:text-neutral-200 text-dark-slate ">
        Rules Actions
      </div>
      <div className="flex items-center gap-2">
        <Button
          leftSection={<FaPlus />}
          size="xs"
          variant="filled"
          color="grape"
        >
          Add new rule
        </Button>
        <Button
          leftSection={<FaAutoprefixer />}
          size="xs"
          variant="light"
          color="green"
        >
          Actions
        </Button>
      </div>
    </div>
  );
}
