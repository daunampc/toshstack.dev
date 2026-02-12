import { Button } from '@mantine/core';
import clsx from 'clsx';

export default function PostSettingHeader() {
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 p-1">
          <div
            className={clsx(
              'px-4 py-1.5 rounded-md dark:bg-dark-charcoal-gray font-medium text-sm',
            )}
          >
            General
          </div>
        </div>
        <div>
          <Button size="xs" variant="gradient">
            Actions
          </Button>
        </div>
      </div>
    </div>
  );
}
