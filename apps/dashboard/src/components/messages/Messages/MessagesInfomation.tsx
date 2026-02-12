import { Avatar, Button, Image, Tabs } from '@mantine/core';
import clsx from 'clsx';
import { useState } from 'react';

import { GoSidebarExpand } from 'react-icons/go';
import {
  MdAccountCircle,
  MdKeyboardArrowDown,
  MdOutlinePhone,
} from 'react-icons/md';
import { TbFilterCog } from 'react-icons/tb';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
import ImageFile from '@/assets/images/tokyo-bn.jpg';
import { PiGenderIntersex } from 'react-icons/pi';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import { IoIosMailUnread } from 'react-icons/io';
import { BiSolidNote } from 'react-icons/bi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { LuFileStack, LuFileText } from 'react-icons/lu';
import { IoLink } from 'react-icons/io5';
import { TiDownloadOutline } from 'react-icons/ti';
export default function MessagesInfomation() {
  const [showInfo, setShowInfo] = useState<boolean>(true);
  return (
    <div
      className={clsx(
        showInfo ? 'basis-1/4' : 'basis-0 invisible hidden',
        'dark:bg-dark-charcoal bg-white shadow p-3 rounded-lg',
      )}
    >
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setShowInfo(false)}
          size="compact-sm"
          variant="light"
        >
          <GoSidebarExpand />
        </Button>
        <div className="dark:text-neutral-200 font-semibold text-dark-slate">
          Member Infomation
        </div>
        <Button size="compact-sm" variant="light">
          <TbFilterCog />
        </Button>
      </div>
      <div className="w-full h-px dark:bg-neutral-700 my-3"></div>
      <div className="space-y-3">
        <div className="">
          <div className="flex items-center dark:text-neutral-200 text-sm font-medium gap-1">
            <MdAccountCircle size={20} />
            <span>Basis Infomation</span>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <Avatar src={AvatarJPG} size={'xl'} />
            <div className="space-y-1">
              <div className="flex items-center gap-1 dark:text-neutral-200 text-dark-slate font-medium text-sm">
                <MdAccountCircle
                  size={18}
                  className="dark:text-neutral-400 text-gray-600"
                />
                <span>Basis Infomation</span>
              </div>
              <div className="flex items-center gap-1 dark:text-neutral-200 text-dark-slate font-medium text-sm">
                <HiMiniCalendarDateRange
                  size={18}
                  className="dark:text-neutral-400 text-gray-600"
                />
                <span>01/10/2022</span>
              </div>
              <div className="flex items-center gap-1 dark:text-neutral-200 text-dark-slate font-medium text-sm">
                <PiGenderIntersex
                  size={18}
                  className="dark:text-neutral-400 text-gray-600"
                />
                <span>Male</span>
              </div>
              <div className="flex items-center gap-1 text-blue-500 font-medium text-sm">
                <MdOutlinePhone
                  size={18}
                  className="dark:text-neutral-400 text-gray-600"
                />
                <span>+84.954.681.14</span>
              </div>
              <div className="flex items-center gap-1 dark:text-neutral-200 text-dark-slate font-medium text-sm">
                <IoIosMailUnread
                  size={18}
                  className="dark:text-neutral-400 text-gray-600"
                />
                <span>toshiroitdv@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t dark:border-neutral-700 pt-2">
          <div className="flex items-center justify-between dark:text-neutral-200">
            <div className="flex items-center gap-1 font-semibold text-sm">
              <BiSolidNote />
              <span>Note</span>
            </div>
            <MdKeyboardArrowDown />
          </div>
          <div>
            <p className="text-sm dark:text-neutral-300 font-medium">
              Instead of chasing broad, competitive terms, look for detailed
              questions your audience is asking.{' '}
            </p>
          </div>
        </div>
        <div className="border-t dark:border-neutral-700 pt-2">
          <div className="flex items-center justify-between dark:text-neutral-200">
            <div className="flex items-center gap-1 font-semibold text-sm">
              <BiSolidNote />
              <span>Images and attachments</span>
            </div>
            <MdKeyboardArrowDown />
          </div>
          <Tabs variant="default" className="mt-2 space-y-3" radius={'md'}>
            <Tabs.List>
              <Tabs.Tab
                className="dark:text-neutral-300 text-gray-600 focus:dark:text-neutral-200 focus:text-dark-slate focus:font-semibold hover:dark:bg-gray-700"
                value="images"
                leftSection={<HiOutlinePhotograph size={12} />}
              >
                Images
              </Tabs.Tab>
              <Tabs.Tab
                className="dark:text-neutral-300 text-gray-600 focus:dark:text-neutral-200 focus:text-dark-slate focus:font-semibold hover:dark:bg-gray-700"
                value="files"
                leftSection={<LuFileStack size={12} />}
              >
                Files
              </Tabs.Tab>
              <Tabs.Tab
                className="dark:text-neutral-300 text-gray-600 focus:dark:text-neutral-200 focus:text-dark-slate focus:font-semibold hover:dark:bg-gray-700"
                value="links"
                leftSection={<IoLink size={12} />}
              >
                Links
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="images">
              <div className="grid grid-cols-4 gap-3">
                <Image
                  src={AvatarJPG}
                  h={90}
                  radius={'md'}
                  w="auto"
                  fit="cover"
                />
                <Image
                  src={ImageFile}
                  h={90}
                  radius={'md'}
                  w="auto"
                  fit="cover"
                />
                <Image
                  src={AvatarJPG}
                  h={90}
                  radius={'md'}
                  w="auto"
                  fit="cover"
                />
                <Image
                  src={ImageFile}
                  h={90}
                  radius={'md'}
                  w="auto"
                  fit="cover"
                />
                <Image
                  src={AvatarJPG}
                  h={90}
                  radius={'md'}
                  w="auto"
                  fit="cover"
                />
                <Image
                  src={ImageFile}
                  h={90}
                  radius={'md'}
                  w="auto"
                  fit="cover"
                />
              </div>
              <div className="flex justify-center mt-2">
                <Button variant="transparent" size="xs">
                  See more
                </Button>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="files">
              <ul className="space-y-2">
                <li className="dark:bg-dark-charcoal-gray p-1.5 rounded-md flex gap-2">
                  <LuFileText size={25} className="dark:text-neutral-200" />
                  <div className="grow">
                    <div className="text-xs font-medium dark:text-neutral-300">
                      Don’t you just love that feeling of crossing something off
                      your to-do list
                    </div>
                  </div>
                  <Button size="compact-md" variant="light">
                    <TiDownloadOutline size={20} />
                  </Button>
                </li>

                <li className="dark:bg-dark-charcoal-gray p-1.5 rounded-md flex gap-2">
                  <LuFileText size={25} className="dark:text-neutral-200" />
                  <div className="grow">
                    <div className="text-xs font-medium dark:text-neutral-300">
                      Don’t you just love that feeling of crossing something off
                      your to-do list
                    </div>
                  </div>
                  <Button size="compact-md" variant="light">
                    <TiDownloadOutline size={20} />
                  </Button>
                </li>

                <li className="dark:bg-dark-charcoal-gray p-1.5 rounded-md flex gap-2">
                  <LuFileText size={25} className="dark:text-neutral-200" />
                  <div className="grow">
                    <div className="text-xs font-medium dark:text-neutral-300">
                      Don’t you just love that feeling of crossing something off
                      your to-do list
                    </div>
                  </div>
                  <Button size="compact-md" variant="light">
                    <TiDownloadOutline size={20} />
                  </Button>
                </li>

                <li className="dark:bg-dark-charcoal-gray p-1.5 rounded-md flex gap-2">
                  <LuFileText size={25} className="dark:text-neutral-200" />
                  <div className="grow">
                    <div className="text-xs font-medium dark:text-neutral-300">
                      Don’t you just love that feeling of crossing something off
                      your to-do list
                    </div>
                  </div>
                  <Button size="compact-md" variant="light">
                    <TiDownloadOutline size={20} />
                  </Button>
                </li>

                <li className="dark:bg-dark-charcoal-gray p-1.5 rounded-md flex gap-2">
                  <LuFileText size={25} className="dark:text-neutral-200" />
                  <div className="grow">
                    <div className="text-xs font-medium dark:text-neutral-300">
                      Don’t you just love that feeling of crossing something off
                      your to-do list
                    </div>
                  </div>
                  <Button size="compact-md" variant="light">
                    <TiDownloadOutline size={20} />
                  </Button>
                </li>
              </ul>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
