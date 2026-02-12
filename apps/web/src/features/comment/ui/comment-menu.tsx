import { ActionIcon, Button, Popover } from '@mantine/core';
import { BiMenu } from 'react-icons/bi';
import { FaRegBell, FaRegBookmark, FaRegFlag } from 'react-icons/fa';

export function CommentMenu() {
  return (
    <Popover withArrow width={200} position="bottom" offset={1}>
      <Popover.Target>
        <ActionIcon size="compact-xs" variant="transparent" color="ruby" className="">
          <BiMenu />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown className="p-0 overflow-hidden rounded-sm shadow-md">
        <Button
          justify="start"
          leftSection={<FaRegBell size={15} />}
          variant="transparent"
          size="sm"
          className="font-medium w-full text-black-primary"
        >
          Follow comment
        </Button>
        <Button
          justify="start"
          variant="filled"
          color="red"
          leftSection={<FaRegFlag size={15} />}
          className=" font-medium w-full justify-star text-white"
          size="sm"
        >
          <span>Report comment</span>
        </Button>

        <Button
          justify="start"
          leftSection={<FaRegBookmark size={15} />}
          variant="transparent"
          className="font-medium w-full  justify-start"
          size={'sm'}
        >
          <span>Save</span>
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}
