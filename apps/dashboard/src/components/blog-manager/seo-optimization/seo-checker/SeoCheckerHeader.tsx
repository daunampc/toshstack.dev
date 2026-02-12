import { Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { FaEllipsis } from 'react-icons/fa6';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { IoReload } from 'react-icons/io5';
import { PiExport } from 'react-icons/pi';
import { TbArrowBarBoth } from 'react-icons/tb';

export default function SeoCheckerHeader() {
  return (
    <div className="w-full dark:bg-dark-charcoal rounded-lg p-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm dark:text-neutral-200">
            Last update <b>March 1, 2025</b>
          </div>
          <div className="space-y-0.5 space-x-2.5">
            <span className="text-sm dark:text-violet-400 font-medium">
              Scheduled update <b>Recheck manually</b>
            </span>
            <span className="text-sm dark:text-orange-400 font-medium">
              Pages crawled <b>1000/1000</b>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button leftSection={<IoReload />} size="xs">
            Restart Audit
          </Button>
          <Button
            variant="filled"
            color="grape"
            leftSection={<FiSettings />}
            size="xs"
          >
            Setting
          </Button>
          <Button color="violet" leftSection={<PiExport />} size="xs">
            Export
          </Button>
          <Button color="green" size="xs">
            <FaEllipsis />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center gap-1 border-t border-neutral-700 mt-2 pt-2">
        <div className="flex items-center gap-2">
          <DateTimePicker
            placeholder="Nov"
            label="Current Report"
            leftSection={<HiOutlineCalendarDateRange />}
            w={250}
            classNames={{
              label: 'dark:text-neutral-200',
              input:
                'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
            }}
          />
          <TbArrowBarBoth
            size={20}
            className="relative top-3 dark:text-neutral-400"
          />
          <DateTimePicker
            leftSection={<HiOutlineCalendarDateRange />}
            placeholder="Nov"
            label="Compare To"
            w={250}
            classNames={{
              label: 'dark:text-neutral-200',
              input:
                'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 font-medium',
            }}
          />
        </div>
      </div>
    </div>
  );
}
