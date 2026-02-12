import {
  Button,
  Checkbox,
  Collapse,
  Input,
  ScrollArea,
  Table,
} from '@mantine/core';
import clsx from 'clsx';
import { useState } from 'react';
import { FaSort } from 'react-icons/fa6';
import { FiSearch, FiSettings } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function SystemLogsMain() {
  const [sideBar, setSideBar] = useState({
    security: true,
    source: true,
    hostname: true,
  });
  const handleActionSidebar = (name: 'security' | 'source' | 'hostname') => {
    setSideBar({ ...sideBar, [name]: !sideBar[name] });
  };
  return (
    <div className="w-full">
      <div className="flex flex-row h-[calc(100vh-250px)] gap-3 overflow-hidden">
        <div className="basis-1/6 dark:bg-dark-charcoal rounded-md">
          <Input
            leftSection={<FiSearch />}
            classNames={{ input: 'dark:bg-dark-charcoal-gray' }}
            placeholder="Search"
          />
          <div className="flex flex-col gap-3 mt-2">
            <div className="">
              <Button
                onClick={() => handleActionSidebar('security')}
                size="xs"
                justify="start"
                variant="light"
                className="w-full"
                leftSection={<MdKeyboardArrowDown />}
              >
                Security
              </Button>
              <Collapse in={sideBar.security}>
                <div className="flex flex-col gap-3 px-2 py-3">
                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-green-700"></div>
                          Success
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-orange-700"></div>
                          Info
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-yellow-600"></div>
                          Warning
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="">
              <Button
                onClick={() => handleActionSidebar('source')}
                size="xs"
                justify="start"
                variant="light"
                className="w-full"
                leftSection={<MdKeyboardArrowDown />}
              >
                Source
              </Button>
              <Collapse in={sideBar.source}>
                <div className="flex flex-col gap-3 px-2 py-2">
                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-green-700"></div>
                          Success
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-orange-700"></div>
                          Info
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-yellow-600"></div>
                          Warning
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="">
              <Button
                onClick={() => handleActionSidebar('hostname')}
                size="xs"
                justify="start"
                variant="light"
                className="w-full"
                leftSection={<MdKeyboardArrowDown />}
              >
                Hostname
              </Button>
              <Collapse in={sideBar.hostname}>
                <div className="flex flex-col gap-3 px-2 py-2">
                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-green-700"></div>
                          Success
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-orange-700"></div>
                          Info
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Checkbox
                      size="sm"
                      label={
                        <div className="relative">
                          <div className="w-1.5 rounded-full h-full absolute top-0 -left-2 bg-yellow-600"></div>
                          Warning
                        </div>
                      }
                      classNames={{
                        label: 'font-medium',
                      }}
                    />
                    <div className="font-medium text-sm dark:text-neutral-200">
                      13.5M
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="grow dark:bg-dark-charcoal rounded-md">
          <div className="p-3 flex items-center justify-end">
            <Button leftSection={<FiSettings />} size="xs" variant="light">
              Options
            </Button>
          </div>
          <ScrollArea h={'100%'} className="">
            <Table
              highlightOnHover
              classNames={{ thead: 'dark:bg-dark-charcoal-gray' }}
            >
              <Table.Thead className="sticky top-0">
                <Table.Tr>
                  <Table.Th w={200}>
                    <div className="flex items-center gap-1">
                      <FaSort />
                      <span>Date</span>
                    </div>
                  </Table.Th>
                  <Table.Th w={170}>
                    <div className="flex items-center gap-1">
                      <FaSort />
                      <span>Source</span>
                    </div>
                  </Table.Th>
                  <Table.Th w={170}>
                    <div className="flex items-center gap-1">
                      <FaSort />
                      <span>Host</span>
                    </div>
                  </Table.Th>
                  <Table.Th>Message</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody className="max-h-24 overflow-y-auto">
                {Array(35)
                  .fill('_')
                  .map((_, idx) => {
                    return (
                      <Table.Tr key={idx}>
                        <Table.Th>
                          <div className="relative px-3">
                            <div
                              className={clsx(
                                idx % 2
                                  ? 'bg-green-700'
                                  : idx % 3
                                    ? 'bg-cyan-700'
                                    : 'bg-orange-700',
                                'w-2 h-full absolute top-0 -left-0 rounded-full',
                              )}
                            />
                            <span>Mar 05 04:59:00</span>
                          </div>
                        </Table.Th>
                        <Table.Th>AI Automation</Table.Th>
                        <Table.Th>192.168.1.1</Table.Th>
                        <Table.Th>
                          <p className="line-clamp-1">
                            Supabase is the Postgres development platform. Start
                            your project with a Postgres database,
                            Authentication, instant APIs, Edge Functions,
                            Realtime subscriptions, Storage, and Vector
                            embeddings.
                          </p>
                        </Table.Th>
                      </Table.Tr>
                    );
                  })}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
