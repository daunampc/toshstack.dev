import {
  Avatar,
  Badge,
  Button,
  Image,
  Pagination,
  Popover,
  Table,
} from '@mantine/core';
import AvatarJPG from '@/assets/images/tokyo-bn.jpg';
import VNFlag from '@/assets/images/vn-flag.png';
import clsx from 'clsx';
export default function InboxList() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-4">
      <Table
        classNames={{
          tr: 'dark:border-neutral-600 dark:hover:bg-neutral-800',
        }}
        highlightOnHover
      >
        <Table.Thead>
          <Table.Tr className="font-semibold text-sm dark:text-neutral-200 text-dark-slate">
            <Table.Th w={150}>ID</Table.Th>
            <Table.Th w={200}>Account</Table.Th>
            <Table.Th w={120}>Type</Table.Th>
            <Table.Th w={120}>Priority</Table.Th>
            <Table.Th w={200}>Location</Table.Th>
            <Table.Th w={200}>Date</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array(13)
            .fill('_')
            .map((_, idx) => {
              return (
                <Table.Tr key={idx} className="text-sm font-semibold">
                  <Table.Td>
                    <Popover withinPortal position="right">
                      <Popover.Target>
                        <Badge radius={'sm'} variant="light">
                          #MS-481X15ID
                        </Badge>
                      </Popover.Target>
                      <Popover.Dropdown
                        className="dark:bg-dark-charcoal dark:border-neutral-600 p-1.5"
                        w={300}
                      >
                        <div className="text-left dark:text-neutral-200 text-sm font-semibold">
                          Inbox infomation
                        </div>
                        <div className="w-full h-px dark:bg-dark-charcoal-gray my-1.5"></div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5">
                            <Avatar src={AvatarJPG} size={'md'} radius={'md'} />
                            <div className="flex flex-col gap-1">
                              <div className="font-semibold text-sm dark:text-neutral-200">
                                Toshstack.dev
                              </div>
                              <Badge variant="light" size="xs" radius={'sm'}>
                                Business
                              </Badge>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-sm dark:text-neutral-200">
                              Message info
                            </div>
                            <p className="text-xs font-medium dark:text-neutral-400">
                              Copyright holders have the right to control most
                              uses of their works. In some circumstances, it's
                              possible to use a copyright-protected work without
                              infringing their copyright:
                            </p>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-medium dark:text-neutral-200">
                              Location
                            </div>
                            <div className="flex items-center gap-1">
                              <Image
                                src={VNFlag}
                                w={30}
                                h={'auto'}
                                radius={'sm'}
                              />
                              <div className="text-xs font-semibold dark:text-neutral-300">
                                Buon Ma thuot-VN
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </Table.Td>
                  <Table.Td>
                    <div className="flex items-center gap-1">
                      <Avatar src={AvatarJPG} size={'md'} radius={'md'} />
                      <div className="font-semibold dark:text-neutral-200">
                        Toshstack.dev
                      </div>
                    </div>
                  </Table.Td>

                  <Table.Td>
                    <Badge
                      radius={'sm'}
                      className={clsx(
                        idx % 2
                          ? 'bg-purple-500/30 text-neutral-200'
                          : 'bg-orange-500/20 text-orange-500',
                        'capitalize border-none',
                      )}
                      color={idx % 2 ? 'indigo' : 'orange'}
                      variant="dot"
                    >
                      Support
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      radius={'sm'}
                      className="capitalize"
                      variant="gradient"
                      gradient={
                        idx % 2
                          ? { from: '#f86ca7', to: '#f4d444' }
                          : { from: '#833AB4', to: '#FD1D1D' }
                      }
                    >
                      {idx % 2 ? 'Medium' : 'High'}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <div className="flex items-center gap-1">
                      <Image src={VNFlag} w={30} h={'auto'} radius={'xs'} />
                      <div className="text-sm font-semibold dark:text-neutral-300">
                        Buon Ma thuot-VN
                      </div>
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      className="capitalize"
                      variant="light"
                      radius={'sm'}
                      color="green"
                    >
                      14 Feb,2024-13:40PM
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    <div className="flex items-center gap-1">
                      <Button size="xs" variant="filled" color="grape">
                        Accept
                      </Button>
                      <Button size="xs" variant="light" color="red">
                        Decline
                      </Button>
                    </div>
                  </Table.Td>
                </Table.Tr>
              );
            })}
        </Table.Tbody>
      </Table>
      <div className="flex justify-end">
        <Pagination className="" size={'xs'} total={10} />
      </div>
    </div>
  );
}
