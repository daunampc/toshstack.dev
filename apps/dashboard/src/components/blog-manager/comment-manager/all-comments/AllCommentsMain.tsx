import { DiDatabase } from 'react-icons/di';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Checkbox,
  Pagination,
  Popover,
  Table,
  Textarea,
} from '@mantine/core';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineMenuOpen, MdOutlineRemove } from 'react-icons/md';
import { useState } from 'react';

export default function AllCommentsMain() {
  const [activeComment, setActiveComment] = useState<number[]>([]);

  const handleActiveComment = (comment_id: number) => {
    setActiveComment([...activeComment, comment_id]);
  };
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <Table
        stickyHeader
        stickyHeaderOffset={60}
        layout="fixed"
        withColumnBorders
        withRowBorders
        highlightOnHover
        classNames={{
          th: 'dark:text-neutral-200 dark:border-neutral-700 dark:bg-dark-charcoal',
          td: 'dark:text-neutral-300 font-medium  dark:border-neutral-700',
          tr: 'dark:border-neutral-700 hover:bg-dark-charcoal-gray transition-all duration-200',
        }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={30}>
              <Checkbox
                classNames={{
                  input: 'dark:bg-dark-charcoal-gray dark:border-neutral-700',
                }}
              />
            </Table.Th>
            <Table.Th w={150}>Comment ID</Table.Th>
            <Table.Th w={300}>Content</Table.Th>
            <Table.Th w={100}>Authors</Table.Th>
            <Table.Th w={70}>Reply</Table.Th>
            <Table.Th w={80}>Reports</Table.Th>
            <Table.Th w={150}>Status</Table.Th>
            <Table.Th w={60}>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array(20)
            .fill('_')
            .map((_, idx) => {
              return (
                <Table.Tr key={idx}>
                  <Table.Td>
                    <Checkbox
                      onClick={() => handleActiveComment(idx)}
                      classNames={{
                        input:
                          'dark:bg-dark-charcoal-gray dark:border-neutral-700',
                      }}
                    />
                  </Table.Td>
                  <Table.Td>3837e8a3-7855-1581</Table.Td>
                  <Table.Td>
                    <p className="line-clamp-2 text-[13px]">
                      Copyright Disclaimer Under Section 107 of the Copyright
                      Act 1976, allowance is made for "fair use" for purposes
                      such as criticism, comment, news reporting
                    </p>
                  </Table.Td>
                  <Table.Td>
                    <AvatarGroup>
                      <Avatar
                        className="dark:bg-dark-charcoal dark:border-neutral-700 border"
                        size={'sm'}
                      />
                      <Avatar
                        className="dark:bg-dark-charcoal dark:border-neutral-700 border"
                        size={'sm'}
                      />
                      <Avatar
                        className="dark:bg-dark-charcoal dark:border-neutral-700 border"
                        size={'sm'}
                      />
                      <Avatar
                        className="dark:bg-dark-charcoal dark:border-neutral-700 border"
                        size={'sm'}
                      >
                        +19
                      </Avatar>
                    </AvatarGroup>
                  </Table.Td>
                  <Table.Td>
                    <Badge variant="light" size="lg" radius={'md'}>
                      96
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      rightSection={<IoMdArrowDropdown size={16} />}
                      variant="light"
                      size="lg"
                      color="orange"
                      radius={'md'}
                    >
                      964
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      size="lg"
                      className="capitalize"
                      radius={'sm'}
                      variant="light"
                      color="red"
                    >
                      Block by Bot
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Popover position="bottom-end">
                      <Popover.Target>
                        <Button size="compact-sm" variant="light" color="green">
                          <MdOutlineMenuOpen size={16} />
                        </Button>
                      </Popover.Target>
                      <Popover.Dropdown
                        w={400}
                        className="dark:bg-dark-charcoal dark:border-neutral-700 p-0"
                      >
                        <div>
                          <div className="dark:text-neutral-200 font-medium text-sm p-2">
                            Comment detail
                          </div>
                          <ul className="border-t border-neutral-700 p-2 flex flex-col gap-3">
                            <li className="text-sm font-medium dark:text-purple-600 flex items-center gap-1">
                              <div className=" font-bold">
                                <DiDatabase size={20} />
                              </div>
                              <Badge
                                radius={'sm'}
                                variant="light"
                                color="green"
                                className=""
                              >
                                db71ce99-630f-4734-89f9-1a3a285c8793
                              </Badge>
                            </li>
                            <li className="text-sm font-medium dark:text-neutral-200 flex flex-col gap-1">
                              <div className=" font-bold">Content</div>
                              <Textarea
                                value={125412583026}
                                rows={4}
                                classNames={{
                                  input:
                                    'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200',
                                }}
                              />
                            </li>
                          </ul>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                    <Button size="compact-sm" variant="light" color="red">
                      <MdOutlineRemove size={16} />
                    </Button>
                  </Table.Td>
                </Table.Tr>
              );
            })}
        </Table.Tbody>
        <Table.Caption className="p-2">
          <div className="w-full flex justify-end">
            <Pagination
              total={25}
              size="sm"
              classNames={{
                control:
                  'dark:bg-dark-charcoal dark:border-neutral-700 font-medium dark:text-neutral-200 dark:active:bg-dark-charcoal-gray dark:focus:bg-dark-charcoal-gray',
              }}
            />
          </div>
        </Table.Caption>
      </Table>
    </div>
  );
}
