import { Button, Input, Select } from '@mantine/core';
import {
  FiActivity,
  FiFilter,
  FiLayout,
  FiSearch,
  FiSettings,
} from 'react-icons/fi';

export default function PendingCommentsHeader() {
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-1">
          <Input
            size="sm"
            w={350}
            leftSection={<FiSearch />}
            radius={'xl'}
            placeholder="Search your comment by ID or name"
            classNames={{
              input:
                'dark:bg-dark-charcoal dark:text-neutral-200 font-medium dark:border-neutral-700 border-neutral-400 text-dark-slate',
            }}
          />
          <Select
            size="sm"
            variant="unstyled"
            radius={'xl'}
            leftSection={<FiFilter />}
            data={['ID', 'Tag', 'Type']}
            w={110}
            placeholder="Type"
            classNames={{
              input:
                'dark:font-medium  dark:border-neutral-600 dark:text-neutral-200 border-gray-300 text-dark-slate font-medium',
              dropdown:
                'dark:bg-dark-charcoal dark:border-neutral-700 font-medium dark:text-neutral-200 text-dark-slate',
              option: 'dark:hover:bg-dark-charcoal-gray',
            }}
          />
        </div>
        <div className="flex items-center gap-1">
          <Button leftSection={<FiSettings />} variant="gradient" size="xs">
            Settings
          </Button>
          <Button
            leftSection={<FiSettings />}
            variant="filled"
            color="pink"
            size="xs"
          >
            Bulk Edit
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t dark:border-neutral-600 border-neutral-300 p-2">
        <Select
          size="sm"
          variant="unstyled"
          leftSection={
            <FiLayout className="text-neutral-700  dark:text-neutral-200" />
          }
          data={['Grid', 'List']}
          w={130}
          placeholder="Layout"
          radius={'md'}
          classNames={{
            input:
              'dark:font-medium border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 text-dark-slate placeholder:text-neutral-500 font-medium',
            dropdown:
              'dark:bg-dark-charcoal dark:border-neutral-700 font-medium dark:text-neutral-200 border-neutral-300 text-dark-slate',
            option: 'dark:hover:bg-dark-charcoal-gray',
          }}
        />
        <Select
          size="sm"
          radius={'md'}
          leftSection={<FiFilter />}
          data={['A-Z', 'Z-A']}
          w={170}
          variant="unstyled"
          placeholder="Filter comment"
          classNames={{
            input:
              'dark:font-medium  dark:border-neutral-600 dark:text-neutral-200 text-dark-slate border-neutral-300 placeholder:text-neutral-400 font-medium',
            dropdown:
              'dark:bg-dark-charcoal dark:border-neutral-700 font-medium dark:text-neutral-200 border-neutral-300 text-dark-slate',
            option: 'dark:hover:bg-dark-charcoal-gray',
          }}
        />
        <Button
          radius={'md'}
          className="dark:border-neutral-600 dark:text-neutral-300 text-dark-slate border-gray-300 font-medium"
          leftSection={<FiActivity />}
          variant="transparent"
          size="sm"
        >
          Activity
        </Button>
      </div>
    </div>
  );
}
