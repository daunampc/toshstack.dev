import { Avatar, Badge, Button, Popover } from '@mantine/core';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
import { IoMdMore } from 'react-icons/io';
import type { GroupTeamItemProps } from './GroupTeam.types';
import { LuEye, LuPencilLine } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';
import { IoDiamond } from 'react-icons/io5';
import clsx from 'clsx';
/**
 * @author toshstack
 *
 */
const GroupTeamItem: React.FC<GroupTeamItemProps> = ({
  label,
  status,
  verified,
}) => {
  return (
    <div className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3 space-y-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          {verified && <IoDiamond size={20} className="text-cyan-500" />}
          <div
            className={clsx(
              verified
                ? 'text-cyan-500'
                : 'dark:text-neutral-200 text-dark-slate',
              'font-semibold text-base ',
            )}
          >
            {label}
          </div>
        </div>
        <Badge
          variant="light"
          color={status ? 'green' : 'red'}
          className="capitalize"
        >
          {status ? 'Active' : 'Inactive'}
        </Badge>
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-1.5">
          <Avatar src={AvatarJPG} />
          <div className="flex flex-col gap-0.5">
            <div className="dark:text-neutral-200 text-dark-slate text-sm font-semibold">
              Toshstack
            </div>
            <span className="text-xs dark:text-neutral-400 font-medium text-gray-600">
              toshstack.dev@gmail.com
            </span>
          </div>
        </div>
        <div className="text-sm line-clamp-2 dark:text-neutral-300 text-gray-600 font-medium">
          After pulling the updated image, stop your n8n container and start it
          again. You can also use the command line. Replace in the commands
          below with the container ID you find in the first command:
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="text-xs font-medium dark:text-neutral-400 text-gray-600">
              Member
            </div>
            <div className="text-sm font-semibold dark:text-neutral-200 text-dark-slate">
              26+
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-medium dark:text-neutral-400 text-gray-600">
              Type
            </div>
            <div className="text-sm font-semibold dark:text-neutral-200 text-dark-slate">
              Development
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-medium dark:text-neutral-400 text-gray-600">
              Region
            </div>
            <div className="text-sm font-semibold dark:text-neutral-200 text-dark-slate">
              Vietnamese
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs font-medium dark:text-neutral-400 text-gray-600">
              Sub Region
            </div>
            <div className="text-sm font-semibold dark:text-neutral-200 text-dark-slate">
              Buon ma thuot
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Avatar.Group>
            <Avatar variant="light" src={AvatarJPG} size={30} />
            <Avatar variant="light" src={AvatarJPG} size={30} />
            <Avatar variant="light" src={AvatarJPG} size={30} />
            <Avatar variant="light" src={AvatarJPG} size={30} />

            <Avatar variant="light" color="orange" size={30}>
              +10
            </Avatar>
          </Avatar.Group>
          <Popover>
            <Popover.Target>
              <Button color="gray" variant="light" size="compact-sm">
                <IoMdMore />
              </Button>
            </Popover.Target>
            <Popover.Dropdown
              w={150}
              className="dark:bg-dark-charcoal dark:border-neutral-600 rounded-lg p-2 space-y-1.5"
            >
              <Button
                variant="light"
                className="w-full"
                leftSection={<LuEye />}
                classNames={{ inner: 'justify-start' }}
                size="xs"
              >
                View
              </Button>
              <Button
                variant="light"
                className="w-full"
                leftSection={<LuPencilLine />}
                classNames={{ inner: 'justify-start' }}
                size="xs"
              >
                Edit
              </Button>
              <Button
                variant="filled"
                className="w-full"
                color="red"
                leftSection={<MdDeleteOutline />}
                classNames={{ inner: 'justify-start' }}
                size="xs"
              >
                Delete
              </Button>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default function GroupTeamsManager() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <GroupTeamItem label="Toshstack" status={true} verified={false} />
      <GroupTeamItem label="Toshstack" status={true} verified={false} />
      <GroupTeamItem label="Toshstack" status={false} verified={true} />
      <GroupTeamItem label="Toshstack" status={true} verified={false} />
      <GroupTeamItem label="Toshstack" status={false} verified={true} />
      <GroupTeamItem label="Toshstack" status={false} verified={true} />
      <GroupTeamItem label="Toshstack" status={true} verified={false} />
      <GroupTeamItem label="Toshstack" status={false} verified={true} />
    </div>
  );
}
