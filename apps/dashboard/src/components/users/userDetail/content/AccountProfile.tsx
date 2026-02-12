import { Avatar, Badge, Button, Input, Progress } from '@mantine/core';
import { FaPen } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
export default function AccountProfile() {
  return (
    <>
      <div className="flex dark:bg-dark-charcoal bg-white shadow p-3 rounded-lg gap-2 items-stretch  divide-x-2 dark:divide-neutral-800">
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-2">
            <Avatar src={AvatarJPG} size={100} className="shrink" />
            <div className="space-y-0.5 grow">
              <div className="flex items-center gap-1">
                <div className="font-semibold text-lg dark:text-neutral-200 text-dark-slate">
                  Toshstack.dev
                </div>
                <div className="flex items-center gap-0.5 text-xs font-medium text-green-500">
                  <MdVerified size={16} />
                  <span>Vefified</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="font-medium text-xs dark:text-blue-500">
                  Full Stack Developer
                </div>
                <div className="font-medium text-xs dark:text-neutral-400 text-gray-700">
                  @daunampc
                </div>
              </div>
              <div className="max-w-sm space-y-1">
                <div className="text-sm font-medium dark:text-neutral-200 text-dark-slate">
                  Account Level: <b className="font-bold text-blue-500">4</b>
                </div>
                <Progress
                  size="md"
                  className="dark:bg-dark-charcoal-gray"
                  color="orange"
                  value={42}
                  animated
                ></Progress>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pl-2">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <div className="dark:text-neutral-400 font-medium text-sm">
                Account ID
              </div>
              <div className="flex items-center">
                <Input
                  radius="md"
                  size="sm"
                  classNames={{
                    input:
                      'dark:bg-dark-charcoal-gray dark:border-neutral-700 dark:text-neutral-200 font-medium',
                  }}
                  value="7407aebc-5d85-40bc-ae6c-c09ead4ee4c0"
                />
              </div>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-400 font-medium text-sm">
                Email
              </div>
              <div className="dark:text-neutral-200 text-dark-slate font-semibold text-sm">
                toshstack.dev@gmail.com
              </div>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-400 font-medium text-sm">
                Role
              </div>
              <Badge className="capitalize" color="red" variant="light">
                Admin
              </Badge>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-400 font-medium text-sm">
                Phone Number
              </div>
              <div className="dark:text-neutral-200 text-dark-slate font-semibold text-sm">
                0948.581.6812
              </div>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-400 font-medium text-sm">
                Status
              </div>
              <Badge className="capitalize" color="green" variant="light">
                Active
              </Badge>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-400 font-medium text-sm">
                2F Auth
              </div>
              <Badge className="capitalize" color="red" variant="light">
                Disable
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 dark:bg-dark-charcoal bg-white shadow rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold dark:text-neutral-200 text-dark-slate">
              Personal Infomation
            </div>
            <Button size="compact-xs" variant="light">
              <FaPen />{' '}
            </Button>
          </div>
          <div className="w-full h-px dark:bg-neutral-600 bg-gray-200 my-3.5"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Full Name
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                Toshstack
              </span>
            </div>

            <div className="space-y-1">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Account Type
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                Member
              </span>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Country
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                Vietnam
              </span>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Register Type
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                Google
              </span>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Join Date
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                24 Jun, 2025
              </span>
            </div>
            <div className="space-y-1">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Date of birth
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                5th March, 2002
              </span>
            </div>
            <div className="space-y-1 col-span-full">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Address
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                Hi, I'm from Indonesia. I'm a teacher, and now I'm making a
                magazine for the school where I work.
              </span>
            </div>
            <div className="space-y-1 col-span-full">
              <div className="dark:text-neutral-500 text-gray-600 font-medium text-sm">
                Description
              </div>
              <span className="font-semibold dark:text-neutral-200 text-dark-slate text-base">
                Hi, I'm from Indonesia. I'm a teacher, and now I'm making a
                magazine for the school where I work. This was my first
                experience making a magazine, it was very difficult because I
                had to learn a lot of new things. I really like your videos,
                because they can help me stay focused and help me to manage my
                work time. And when I study accompanied by your videos, I feel
                like I have friends who are studying with me. Thank you
                (Terimakasih) :)
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold dark:text-neutral-200 text-dark-slate">
                Permission Info
              </div>
              <Button size="compact-xs" variant="light">
                <FaPen />{' '}
              </Button>
            </div>
            <div className="w-full h-px dark:bg-neutral-600 bg-gray-200 my-3.5"></div>
            <div className="flex flex-col gap-4"></div>
          </div>
          <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold dark:text-neutral-200 text-dark-slate">
                Technical Info
              </div>
              <Button size="compact-xs" variant="light">
                <FaPen />{' '}
              </Button>
            </div>
            <div className="w-full h-px dark:bg-neutral-600 bg-gray-200 my-3.5"></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
