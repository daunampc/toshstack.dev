import { handleSetting } from '@/features/post-action';
import { Button } from '@mantine/core';
import { IoArrowRedoOutline, IoArrowUndoOutline } from 'react-icons/io5';
import { LuSettings } from 'react-icons/lu';
import { useDispatch } from 'react-redux';

export default function PostActionHeader() {
  const dispatch = useDispatch();
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white shadow p-2 rounded-md flex items-center justify-between">
      <div>
        <div className="font-medium dark:text-neutral-200 text-sm">
          Titap bookmart
        </div>
      </div>
      <div className="dark:text-neutral-200 font-medium">
        Documentation does not include all features
      </div>
      <div className="grid grid-cols-2">
        <Button size="compact-sm" variant="light" color="orange">
          <IoArrowUndoOutline />
        </Button>
        <Button size="compact-sm" variant="light" color="orange">
          <IoArrowRedoOutline />
        </Button>
        <Button
          onClick={() => dispatch(handleSetting())}
          size="compact-sm"
          variant="light"
          color="pink"
        >
          <LuSettings />
        </Button>
      </div>
    </div>
  );
}
