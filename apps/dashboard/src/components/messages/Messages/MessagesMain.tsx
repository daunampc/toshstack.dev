import { Avatar, Button, HoverCard, Textarea } from '@mantine/core';
import type {
  MessagesMainContentProps,
  MessagesMainHeaderProps,
} from './messages.types';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
import { FaEye, FaPlus, FaUserCheck } from 'react-icons/fa6';
import { MdAttachFile, MdOutlineSettingsBackupRestore } from 'react-icons/md';
import { IoImageOutline } from 'react-icons/io5';
import { PiSmileySticker } from 'react-icons/pi';
import { IoMdStar } from 'react-icons/io';
const MessagesMainHeader: React.FC<MessagesMainHeaderProps> = () => {
  return (
    <div className="w-full p-3 flex items-end justify-between dark:bg-dark-charcoal bg-white shadow  rounded-t-lg">
      <div className="flex gap-2">
        <Avatar src={AvatarJPG} size={'lg'} />
        <div className="flex flex-col gap-1">
          <div className="font-semibold dark:text-neutral-200 text-dark-slate">
            Itou Toshiro
          </div>
          <div className="flex items-center text-xs dark:text-neutral-200 text-dark-slate gap-1 font-medium">
            <FaUserCheck
              size={15}
              className="dark:text-neutral-400 text-gray-600"
            />
            <span>
              Assign to <b className="text-pink-500">Toshstack</b>
            </span>
          </div>
          <div className="flex items-center text-xs dark:text-neutral-200 text-dark-slate gap-1 font-medium">
            <FaEye size={15} className="dark:text-neutral-400 text-gray-600" />
            <span>Seen by Itou Toshiro - 5/5/2024 10:14</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button size="compact-sm" variant="light" color="grape">
          <MdOutlineSettingsBackupRestore size={16} />
        </Button>
        <Button size="compact-sm" variant="light" color="grape">
          <MdOutlineSettingsBackupRestore size={16} />
        </Button>
        <Button size="compact-sm" variant="light" color="grape">
          <MdOutlineSettingsBackupRestore size={16} />
        </Button>
        <Button size="compact-sm" variant="light" color="grape">
          <MdOutlineSettingsBackupRestore size={16} />
        </Button>
      </div>
    </div>
  );
};
const MessagesMainContent: React.FC<MessagesMainContentProps> = () => {
  return (
    <div className="border-t dark:bg-dark-charcoal dark:border-neutral-700 rounded-b-lg border-neutral-200 bg-white shadow h-full overflow-y-auto p-3">
      <div className="flex flex-col gap-4">
        <div className="w-full flex">
          <div className="flex gap-2 max-w-3/4">
            <Avatar src={AvatarJPG} size={'md'} className="flex-shrink" />
            <div className="grow space-y-1">
              <div className="flex items-center dark:text-neutral-300 text-sm gap-1">
                <div className="text-sm font-medium">Itou Toshiro</div>
                <div className="font-semibold">05:30PM</div>
              </div>
              <p className="text-sm  bg-purple-500 text-neutral-100 shadow p-2 rounded-lg font-medium">
                Textarea component supports Input and Input.Wrapper components
                features and all textarea element props. Textarea documentation
                does not include all features supported by the component
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex flex-row-reverse gap-2 max-w-3/4">
            <Avatar src={AvatarJPG} size={'md'} className="flex-shrink" />
            <div className="grow space-y-1">
              <div className="flex items-center dark:text-neutral-300 text-sm gap-1 justify-end">
                <div className="text-sm font-medium">Itou Toshiro</div>
                <div className="font-semibold">05:30PM</div>
              </div>
              <p className="text-sm dark:text-neutral-200 dark:bg-dark-charcoal-gray bg-white text-dark-slate shadow p-2 rounded-lg font-normal">
                Textarea component supports Input and Input.Wrapper components
                features and all textarea element props. Textarea documentation
                does not include all features supported by the component
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 my-8">
          <div className="w-full h-[1.5px] dark:bg-orange-700 bg-orange-500"></div>
          <div className="text-sm whitespace-nowrap text-orange-500">
            New Message
          </div>
          <div className="w-full h-[1.5px] dark:bg-orange-700 bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
};

const MessageMainForm: React.FC = () => {
  return (
    <div className="relative space-y-2">
      <Textarea
        className="w-full h-24"
        placeholder="Type a reply or select a pre-writen response from lia store"
        classNames={{
          wrapper: 'h-full',
          input:
            'dark:bg-dark-charcoal dark:border-neutral-600  dark:text-neutral-200 font-medium h-full',
        }}
      />
      <div className=" flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-1">
          <Button size="compact-xs" variant="light" color="yellow">
            <FaPlus />
          </Button>
          <Button size="compact-xs" variant="filled" color="violet">
            <IoImageOutline />
          </Button>
          <Button size="compact-xs" variant="filled" color="violet">
            <MdAttachFile />
          </Button>
          <Button size="compact-xs" variant="filled" color="violet">
            <PiSmileySticker />
          </Button>
          <Button size="compact-xs" variant="filled" color="violet">
            <IoMdStar />
          </Button>
        </div>
        <Button size="xs" variant="gradient">
          Sent
        </Button>
      </div>
    </div>
  );
};

export default function MessageMain() {
  return (
    <div className="w-full rounded-lg flex flex-col h-full">
      <MessagesMainHeader />
      <div className="flex-1 overflow-y-auto">
        <MessagesMainContent />
      </div>
      <div className="shrink mt-2">
        <MessageMainForm />
      </div>
    </div>
  );
}
