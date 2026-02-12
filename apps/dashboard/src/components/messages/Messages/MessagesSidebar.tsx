import { Avatar, Badge, Button, TextInput } from '@mantine/core';
import { BiMenu } from 'react-icons/bi';
import { IoMdSearch } from 'react-icons/io';
import { LuCircleDot, LuFilter, LuInbox } from 'react-icons/lu';
import { RxCaretSort } from 'react-icons/rx';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
import { FiCodesandbox } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
export default function MessageSidebar() {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="flex items-center justify-between p-3">
        <div className="font-semibold dark:text-neutral-200 text-dark-slate">
          All conversations
        </div>
        <div className="flex items-center gap-1">
          <Button size="compact-xs" variant="light">
            <LuInbox size={20} />
          </Button>
          <Button size="compact-xs" variant="light">
            <LuFilter size={20} />
          </Button>
          <Button size="compact-xs" variant="light">
            <BiMenu size={20} />
          </Button>
          <Button size="compact-xs" variant="light">
            <RxCaretSort size={20} />
          </Button>
        </div>
      </div>
      <TextInput
        leftSection={<IoMdSearch size={15} />}
        size="sm"
        variant="unstyled"
        radius={'md'}
        classNames={{
          input:
            'dark:bg-dark-charcoal-gray dark:text-neutral-200 bg-gray-100 font-medium',
        }}
        placeholder="Search"
        className="p-2"
      />
      <ul className="overflow-y-auto h-[calc(100vh-230px)]">
        {Array(10)
          .fill('_')
          .map((_, idx) => {
            return (
              <li
                key={idx}
                className="p-3 hover:dark:bg-neutral-800/50 hover:bg-gray-100/50 flex gap-2 transition-all duration-300"
              >
                <div className="shrink-0 ">
                  <div className="dark:bg-neutral-700/50 rounded-lg p-1">
                    <Avatar size={'md'} src={AvatarJPG} />
                  </div>
                </div>
                <div className="grow">
                  <div className="flex items-center">
                    <FiCodesandbox size={20} className="text-purple-500" />
                    <MdKeyboardArrowRight
                      size={22}
                      className="dark:text-neutral-200"
                    />
                    <span className="dark:text-neutral-200 text-sm font-medium">
                      Toshstack.dev
                    </span>
                  </div>
                  <p className="text-xs line-clamp-1 dark:text-neutral-400 text-gray-600 font-medium">
                    Show off your school spirit with this Saint Louis University
                    T-Shirt,Featuring a bold blue and white design
                  </p>
                  <div className="space-x-1">
                    <Badge
                      variant="filled"
                      size="sm"
                      color="red"
                      className="capitalize"
                    >
                      Prioritize
                    </Badge>
                    <Badge
                      variant="filled"
                      size="sm"
                      color="yellow"
                      className="capitalize"
                    >
                      Important
                    </Badge>
                  </div>
                  <div className="text-xs font-medium dark:text-neutral-400 text-gray-600">
                    1 minute ago
                  </div>
                </div>
                <div className="shrink-0">
                  <div className="flex items-center gap-1">
                    <LuCircleDot className="text-purple-500" />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
