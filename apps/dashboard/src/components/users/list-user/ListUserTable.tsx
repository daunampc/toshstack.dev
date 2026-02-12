import type { TableListUserProps } from '@/types';
import { Avatar, Badge, Pagination, Popover, Table } from '@mantine/core';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
import clsx from 'clsx';
import { RiProfileLine } from 'react-icons/ri';
import { LuLetterText } from 'react-icons/lu';
import { IoAccessibilityOutline } from 'react-icons/io5';
import { RxDotFilled } from 'react-icons/rx';
import { FaVoicemail } from 'react-icons/fa6';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { TbAuth2Fa } from 'react-icons/tb';
import { MdOutlineAttractions } from 'react-icons/md';
import ModalActionUser from './ModalActionUser';
export default function ListUserTable({ data }: TableListUserProps) {
  return (
    <>
      <Table className="dark:bg-dark-charcoal bg-white shadow rounded-lg">
        <Table.Thead>
          <Table.Tr className="dark:text-neutral-200 text-dark-slate dark:border-b-neutral-500">
            <Table.Th w={250} className="">
              <div className="flex items-center gap-1">
                <RiProfileLine />
                <span>Account</span>
              </div>
            </Table.Th>
            <Table.Th w={220} className="">
              <div className="flex items-center gap-1">
                <LuLetterText />
                <span>Full Name</span>
              </div>
            </Table.Th>
            <Table.Th w={100}>
              <div className="flex items-center gap-1">
                <IoAccessibilityOutline />
                <span>Role</span>
              </div>
            </Table.Th>
            <Table.Th w={150}>
              <div className="flex items-center gap-1">
                <RxDotFilled />
                <span>Status</span>
              </div>
            </Table.Th>
            <Table.Th w={230}>
              <div className="flex items-center gap-1">
                <FaVoicemail />
                <span>Email</span>
              </div>
            </Table.Th>
            <Table.Th w={170}>
              <div className="flex items-center gap-1">
                <HiOutlineCalendarDateRange />
                <span>Joined Date</span>
              </div>
            </Table.Th>
            <Table.Th w={100}>
              <div className="flex items-center gap-1">
                <TbAuth2Fa />
                <span>2F Auth</span>
              </div>
            </Table.Th>
            <Table.Th w={160}>
              <div className="flex items-center gap-1">
                <MdOutlineAttractions />
                <span>Actions</span>
              </div>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map(it => {
            return (
              <Table.Tr
                key={it.account}
                className="dark:text-neutral-200 text-dark-slate font-semibold hover:dark:bg-neutral-800/40 hover:bg-slate-50 transition-all duration-300 dark:border-b-neutral-600"
              >
                <Table.Td>
                  <Popover>
                    <Popover.Target>
                      <div className="flex items-center gap-1">
                        <Avatar size={40} src={AvatarJPG} className="shrink" />
                        <div className="grow">
                          <div className="font-medium text-sm dark:text-neutral-200 text-dark-slate">
                            Toshstack
                          </div>
                          <span className="text-xs dark:text-neutral-500 text-neutral-500 font-medium">
                            @daunampc
                          </span>
                        </div>
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown
                      w={250}
                      className="p-2 rounded-lg dark:bg-dark-charcoal dark:border-neutral-500"
                    >
                      <div>
                        <div className="font-semibold text-sm dark:text-neutral-200 text-dark-slate">
                          Toshstack.dev
                        </div>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Td>
                <Table.Td>
                  <div className="">Tosh stack.dev</div>
                </Table.Td>
                <Table.Td>
                  <Badge
                    variant="dot"
                    className={clsx(
                      it.role === 'Admin'
                        ? 'text-red-500'
                        : 'dark:text-neutral-200 text-neutral-700',
                      'capitalize dark:bg-neutral-800 dark:border-neutral-600',
                    )}
                    color={it.role === 'Admin' ? 'red' : 'grape'}
                  >
                    {it.role}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge variant="light" className="capitalize" color="red">
                    Locked
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <div className="font-semibold">{it.email}</div>
                </Table.Td>
                <Table.Td>
                  <div className="font-medium dark:text-neutral-300">
                    {it.joined}
                  </div>
                </Table.Td>
                <Table.Td>
                  <Badge variant="light" color="green" className="capitalize">
                    Enable
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <ModalActionUser />
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
      <div className="dark:bg-dark-charcoal bg-white shadow flex justify-end p-3 rounded-lg">
        <Pagination total={27} size={'sm'} />
      </div>
    </>
  );
}
