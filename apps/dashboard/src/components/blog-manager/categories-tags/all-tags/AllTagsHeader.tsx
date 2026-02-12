import { Button, Checkbox, Select } from '@mantine/core';
import { BiImport } from 'react-icons/bi';
import { FaDownload, FaList, FaPlus } from 'react-icons/fa6';
//import { IoSearch } from 'react-icons/io5';
import { MdArrowDropDown, MdKeyboardArrowDown } from 'react-icons/md';

export default function AllTagsHeader() {
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg border dark:border-neutral-700/70 border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center  [&>div]:cursor-pointer [&>div]:transition-all [&>div]:dark:hover:bg-dark-charcoal-gray transition-all">
          <div className="relative font-medium p-2 text-sm dark:text-neutral-200 rounded-sm">
            All Results
            <div className="absolute w-3/4 bottom-0 left-1/2 -translate-x-1/2 h-0.5 dark:bg-blue-500"></div>
          </div>
          <div className="font-medium p-2 text-sm dark:text-neutral-400 rounded-sm">
            Tag Premium
          </div>
          <div className="font-medium p-2 text-sm dark:text-neutral-400 rounded-sm">
            Tag Free
          </div>
        </div>
        <div className="flex items-center gap-2 divide-x dark:divide-neutral-700/50 divide-gray-300 rounded-lg">
          <Select
            rightSection={<MdArrowDropDown />}
            size="sm"
            placeholder="Table Settings"
            variant="unstyled"
            data={['Grid', 'List']}
            w={130}
            classNames={{
              label: 'font-medium dark:text-neutral-200',
              root: 'flex items-center gap-1',
              input: ' font-medium dark:text-neutral-200',
              dropdown:
                'dark:bg-dark-charcoal dark:font-medium dark:text-neutral-200 dark:border-neutral-700 w-[110px]',
              option: 'dark:hover:bg-dark-charcoal-gray',
            }}
          />
          <div>
            <Button
              leftSection={<BiImport size={15} />}
              size="compact-sm"
              variant="transparent"
              className="dark:text-neutral-300"
              classNames={{ inner: 'font-medium' }}
              rightSection={<MdKeyboardArrowDown size={15} />}
            >
              Import
            </Button>
          </div>
          <Select
            rightSection={<MdArrowDropDown />}
            defaultValue={'10'}
            label="Page:"
            size="sm"
            variant="unstyled"
            w={110}
            data={['10', '20', '50', '100', '200', '500']}
            classNames={{
              label: 'font-medium dark:text-neutral-200',
              root: 'flex items-center gap-1',
              input: ' font-medium dark:text-neutral-200',
              dropdown:
                'dark:bg-dark-charcoal dark:font-medium dark:text-neutral-200 dark:border-neutral-700 w-[110px]',
              option: 'dark:hover:bg-dark-charcoal-gray',
            }}
          />
        </div>
      </div>
      <div className="border-t dark:border-neutral-700 border-gray-300 divide-x dark:divide-neutral-700 divide-neutral-300 flex items-center gap-2 px-2">
        <Checkbox
          className="dark:text-neutral-200 font-medium p-2"
          size="sm"
          label="2 Selected"
        />
        <div className="flex items-center gap-2 p-2">
          <Button
            className="dark:text-neutral-300"
            variant="transparent"
            size="compact-xs"
            classNames={{ inner: 'text-sm' }}
            leftSection={<FaPlus size={14} />}
          >
            Save
          </Button>
          <Button
            className="dark:text-neutral-300"
            variant="transparent"
            size="compact-xs"
            classNames={{ inner: 'text-sm' }}
            leftSection={<FaList size={14} />}
          >
            List
          </Button>
          <Button
            className="dark:text-neutral-300"
            variant="transparent"
            size="compact-xs"
            classNames={{ inner: 'text-sm' }}
            leftSection={<FaDownload size={14} />}
          >
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}
