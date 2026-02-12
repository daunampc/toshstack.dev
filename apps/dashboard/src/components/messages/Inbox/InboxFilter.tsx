import { Autocomplete, Button, Select, TextInput } from '@mantine/core';
import { FaPlus } from 'react-icons/fa6';
import { IoSearchSharp } from 'react-icons/io5';
import { DateTimePicker } from '@mantine/dates';

export default function InboxFilter() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="flex items-center justify-between p-3">
        <div className="font-semibold dark:text-neutral-200">Filter</div>
        <div className="flex items-center gap-1.5">
          <Button
            size="compact-sm"
            variant="filled"
            className="dark:bg-dark-charcoal-gray"
          >
            <FaPlus />
          </Button>
          <Button
            size="compact-sm"
            variant="filled"
            className="dark:bg-dark-charcoal-gray"
          >
            <FaPlus />
          </Button>
          <Button
            size="compact-sm"
            variant="filled"
            className="dark:bg-dark-charcoal-gray"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
      <div className="w-full h-px dark:bg-neutral-700"></div>
      <div className="p-3 space-y-3">
        <TextInput
          placeholder="Search your inbox"
          leftSection={<IoSearchSharp />}
          classNames={{
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
          }}
        />
        <div className="grid grid-cols-2 gap-3">
          <Select
            label={'Type'}
            data={['Support', 'Help', 'Report']}
            size="xs"
            classNames={{
              label:
                'font-semibold text-sm dark:text-neutral-200 text-dark-slate',
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
            }}
          />

          <Select
            label={'Priority'}
            data={['Support', 'Help', 'Report']}
            size="xs"
            classNames={{
              label:
                'font-semibold text-sm dark:text-neutral-200 text-dark-slate',
              input:
                'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
            }}
          />
        </div>
        <DateTimePicker
          label="Pick date and time"
          placeholder="Pick date and time"
          size="xs"
          classNames={{
            label:
              'font-semibold text-sm dark:text-neutral-200 text-dark-slate',
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
          }}
        />
        <Autocomplete
          label="Location"
          size="xs"
          data={['Vietname', 'US', 'Singapore']}
          classNames={{
            label:
              'font-semibold text-sm dark:text-neutral-200 text-dark-slate',
            input:
              'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
            dropdown: 'dark:bg-dark-charcoal dark:border-neutral-600',
            option:
              'dark:text-neutral-200 font-semibold text-sm dark:hover:bg-dark-charcoal-gray',
          }}
        />
      </div>
    </div>
  );
}
