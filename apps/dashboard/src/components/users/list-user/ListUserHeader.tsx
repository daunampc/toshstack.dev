import { Button, Checkbox, Popover, TextInput } from '@mantine/core';
import { AiOutlineTable } from 'react-icons/ai';
import { FaArrowDownShortWide } from 'react-icons/fa6';
import { GrDocumentCsv } from 'react-icons/gr';
import { IoMdSettings } from 'react-icons/io';
import { IoFilter, IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

export default function ListUserHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-x-3 flex items-center">
        <TextInput
          leftSection={<IoSearchSharp />}
          w={350}
          radius={'md'}
          placeholder="Search"
          size="xs"
          classNames={{
            input:
              'dark:bg-dark-charcoal bg-white shadow dark:border-neutral-600 border-neutral-200 dark:text-neutral-200 text-dark-slate font-medium',
          }}
        />
        <Popover>
          <Popover.Target>
            <Button
              radius={'md'}
              variant="outline"
              size="xs"
              className="dark:text-neutral-200 border-[1.5px] text-dark-slate font-semibold dark:border-neutral-600 border-neutral-300"
              leftSection={<AiOutlineTable />}
              rightSection={<MdKeyboardArrowDown />}
            >
              Table View
            </Button>
          </Popover.Target>
          <Popover.Dropdown
            w={150}
            className="p-1.5 dark:bg-dark-charcoal bg-white shadow border dark:border-neutral-600 rounded-lg space-y-1.5"
          >
            <Button
              rightSection={<TiTick />}
              className="w-full text-start dark:text-neutral-200 text-dark-slate font-medium"
              variant="light"
              color="gray"
              size="xs"
            >
              List Grid
            </Button>
            <Button
              className="w-full text-start dark:text-neutral-200 text-dark-slate font-medium"
              variant="light"
              color="gray"
              size="xs"
            >
              List Column
            </Button>
          </Popover.Dropdown>
        </Popover>
        <Popover>
          <Popover.Target>
            <Button
              variant="outline"
              radius={'md'}
              size="xs"
              className="dark:text-neutral-200 border-[1.5px] text-dark-slate font-semibold dark:border-neutral-600 border-neutral-300"
              leftSection={<IoFilter />}
            >
              Filter
            </Button>
          </Popover.Target>
          <Popover.Dropdown className="p-2 dark:bg-dark-charcoal bg-white shadow rounded-lg dark:border-neutral-600 border-neutral-200 flex flex-col gap-2">
            <Checkbox
              label="Band"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
            <Checkbox
              label="Locked"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
            <Checkbox
              label="Pending"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
            <Checkbox
              label="Account Member"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
            <Checkbox
              label="Account Team"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
          </Popover.Dropdown>
        </Popover>
        <Popover>
          <Popover.Target>
            <Button
              radius={'md'}
              variant="outline"
              size="xs"
              className="dark:text-neutral-200 border-[1.5px] text-dark-slate font-semibold dark:border-neutral-600 border-neutral-300"
              leftSection={<FaArrowDownShortWide />}
            >
              Short
            </Button>
          </Popover.Target>
          <Popover.Dropdown className="p-2 dark:bg-dark-charcoal bg-white shadow rounded-lg dark:border-neutral-600 border-neutral-200 flex flex-col gap-2">
            <Checkbox
              label="A-Z"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
            <Checkbox
              label="Z-A"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
            <Checkbox
              label="Price"
              color="blue"
              variant="filled"
              size="sm"
              className="dark:text-neutral-200 text-dark-slate font-semibold"
            />
          </Popover.Dropdown>
        </Popover>
      </div>
      <Popover>
        <Popover.Target>
          <Button
            radius={'md'}
            variant="outline"
            size="xs"
            className="dark:text-neutral-200 border-[1.5px] text-dark-slate font-semibold dark:border-neutral-600 border-neutral-300"
            leftSection={<IoMdSettings />}
          >
            View Settings
          </Button>
        </Popover.Target>
        <Popover.Dropdown
          w={350}
          className="p-3 dark:bg-dark-charcoal bg-white shadow grid grid-cols-2 dark:border-neutral-600 border-neutral-300 rounded-lg gap-1"
        >
          <Button
            leftSection={<GrDocumentCsv />}
            variant="white"
            size="xs"
            className="dark:bg-dark-charcoal-gray dark:text-neutral-200"
          >
            Export
          </Button>
          <Button
            leftSection={<GrDocumentCsv />}
            variant="white"
            size="xs"
            className="dark:bg-dark-charcoal-gray dark:text-neutral-200"
          >
            Data
          </Button>
          <Button
            leftSection={<GrDocumentCsv />}
            variant="white"
            size="xs"
            className="dark:bg-dark-charcoal-gray dark:text-neutral-200"
          >
            Import
          </Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}
