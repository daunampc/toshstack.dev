import { Button, Input, Popover, Select } from '@mantine/core';
import { FiSearch } from 'react-icons/fi';
import { SlSettings } from 'react-icons/sl';
import { VscGithubAction, VscGroupByRefType } from 'react-icons/vsc';

export default function AuthorsPostHeader() {
  return (
    <div className="w-full dark:bg-dark-charcoal rounded-md">
      <div className="flex items-center justify-between p-2.5">
        <div>
          <Input
            w={350}
            radius={'xl'}
            leftSection={<FiSearch />}
            placeholder="Enter your search author - @author"
            classNames={{
              input:
                'dark:bg-dark-charcoal dark:border-neutral-600 font-medium dark:text-neutral-200',
            }}
          />
        </div>
        <div className="flex items-center gap-1">
          <Popover radius={'lg'} position="bottom-end">
            <Popover.Target>
              <Button leftSection={<SlSettings />} variant="gradient" size="xs">
                Settings
              </Button>
            </Popover.Target>
            <Popover.Dropdown
              w={250}
              className={
                'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium'
              }
            >
              <div>124</div>
            </Popover.Dropdown>
          </Popover>
          <Button
            leftSection={<VscGithubAction />}
            size="xs"
            color="pink"
            className="font-medium"
          >
            Bulk Edit
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-1 justify-between border-t border-neutral-700 p-2.5">
        <div className="flex items-center gap-3">
          <Select
            w={170}
            size="sm"
            placeholder="Type account"
            leftSection={<VscGroupByRefType />}
            data={['Premium', 'Free']}
            classNames={{
              dropdown: 'dark:bg-dark-charcoal dark:border-neutral-700',
              option:
                'dark:text-neutral-200 font-medium dark:hover:bg-dark-charcoal-gray',
              input:
                'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
            }}
          />
          <Select
            size="sm"
            w={170}
            placeholder="Type post"
            leftSection={<VscGroupByRefType />}
            data={['Ads', 'Up top']}
            classNames={{
              dropdown: 'dark:bg-dark-charcoal dark:border-neutral-700',
              option:
                'dark:text-neutral-200 font-medium dark:hover:bg-dark-charcoal-gray',
              input:
                'dark:bg-dark-charcoal dark:border-neutral-600 dark:text-neutral-200 font-medium',
            }}
          />
        </div>
      </div>
    </div>
  );
}
