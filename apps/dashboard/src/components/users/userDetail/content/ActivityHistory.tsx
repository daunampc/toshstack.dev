import { Avatar, Button, Input, Popover, Switch } from '@mantine/core';
import { LuBox } from 'react-icons/lu';
import { MdFilterList } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function ActivityHistory() {
  return (
    <div className="max-w-5xl mx-auto space-y-3">
      <Input
        radius={'md'}
        size="md"
        classNames={{
          input:
            'dark:bg-dark-charcoal dark:border-neutral-700 dark:text-neutral-200 text-dark-slate',
        }}
        placeholder="History or type '/' History"
      />
      <div className="flex items-center justify-between">
        <div className="font-semibold dark:text-neutral-200 text-dark-slate">
          Activity Log
        </div>
        <div className="flex items-center gap-3">
          <Switch
            label="Show all activity"
            className="dark:text-neutral-200 font-semibold"
          />
          <Popover>
            <Popover.Target>
              <Button
                size="compact-sm"
                radius={'xl'}
                variant="default"
                className="dark:bg-dark-charcoal dark:border-neutral-700"
              >
                <MdFilterList className="dark:text-neutral-200" />
              </Button>
            </Popover.Target>
            <Popover.Dropdown></Popover.Dropdown>
          </Popover>
        </div>
      </div>
      <ul className="mt-2 relative z-10 flex flex-col gap-8">
        <div className="absolute top-0 left-3.5 h-full -z-10 w-[1.5px] dark:bg-neutral-600 "></div>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <LuBox size={20} className="text-purple-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-2.5 rounded-md">
              <div className="font-semibold dark:text-neutral-200">
                Fixed Prices, Thousands of Tutors
              </div>
              <p className="dark:text-neutral-400 text-sm">
                Learning English doesn't have to be a solo journey. At Cambly,
                your plan gives you access to thousands of tutors, ready to help
                you no matter where you are in your learning process. Whether
                you need assistance with conversation practice, exam prep, or
                understanding tricky grammar rules, our tutors are ready to
                support you.
              </p>
            </div>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <LuBox size={20} className="text-purple-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-2.5 rounded-md">
              <div className="font-semibold dark:text-neutral-200">
                Fixed Prices, Thousands of Tutors
              </div>
              <p className="dark:text-neutral-400 text-sm">
                Learning English doesn't have to be a solo journey. At Cambly,
                your plan gives you access to thousands of tutors, ready to help
                you no matter where you are in your learning process. Whether
                you need assistance with conversation practice, exam prep, or
                understanding tricky grammar rules, our tutors are ready to
                support you.
              </p>
            </div>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <LuBox size={20} className="text-purple-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-2.5 rounded-md">
              <div className="font-semibold dark:text-neutral-200">
                Fixed Prices, Thousands of Tutors
              </div>
              <p className="dark:text-neutral-400 text-sm">
                Learning English doesn't have to be a solo journey. At Cambly,
                your plan gives you access to thousands of tutors, ready to help
                you no matter where you are in your learning process. Whether
                you need assistance with conversation practice, exam prep, or
                understanding tricky grammar rules, our tutors are ready to
                support you.
              </p>
            </div>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <LuBox size={20} className="text-purple-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-2.5 rounded-md">
              <div className="font-semibold dark:text-neutral-200">
                Fixed Prices, Thousands of Tutors
              </div>
              <p className="dark:text-neutral-400 text-sm">
                Learning English doesn't have to be a solo journey. At Cambly,
                your plan gives you access to thousands of tutors, ready to help
                you no matter where you are in your learning process. Whether
                you need assistance with conversation practice, exam prep, or
                understanding tricky grammar rules, our tutors are ready to
                support you.
              </p>
            </div>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <RiLockPasswordFill size={20} className="text-orange-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
          </div>
        </li>

        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <LuBox size={20} className="text-purple-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-2.5 rounded-md">
              <div className="font-semibold dark:text-neutral-200">
                Fixed Prices, Thousands of Tutors
              </div>
              <p className="dark:text-neutral-400 text-sm">
                Learning English doesn't have to be a solo journey. At Cambly,
                your plan gives you access to thousands of tutors, ready to help
                you no matter where you are in your learning process. Whether
                you need assistance with conversation practice, exam prep, or
                understanding tricky grammar rules, our tutors are ready to
                support you.
              </p>
            </div>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <RiLockPasswordFill size={20} className="text-orange-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
          </div>
        </li>

        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <LuBox size={20} className="text-purple-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
            <div className="dark:bg-dark-charcoal bg-white shadow p-2.5 rounded-md">
              <div className="font-semibold dark:text-neutral-200">
                Fixed Prices, Thousands of Tutors
              </div>
              <p className="dark:text-neutral-400 text-sm">
                Learning English doesn't have to be a solo journey. At Cambly,
                your plan gives you access to thousands of tutors, ready to help
                you no matter where you are in your learning process. Whether
                you need assistance with conversation practice, exam prep, or
                understanding tricky grammar rules, our tutors are ready to
                support you.
              </p>
            </div>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="shrink">
            <div className="rounded-full p-1.5 dark:bg-dark-charcoal">
              <RiLockPasswordFill size={20} className="text-orange-400" />
            </div>
          </div>
          <div className="grow space-y-1.5">
            <div className="flex items-center gap-1.5">
              <Avatar size={30}>MD</Avatar>
              <span className="dark:text-neutral-200 space-x-1 font-medium">
                <b className="text-blue-500">Toshstack.dev</b>
                <span>Change new password</span>
                <b className="dark:text-neutral-400 text-sm">2 days.ago</b>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
