import { Button } from '@mantine/core';
import { FaPencil } from 'react-icons/fa6';
import { GrFormView } from 'react-icons/gr';

export default function AllTagsMain() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Array(12)
        .fill('_')
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className="dark:bg-dark-charcoal bg-white shadow rounded-lg p-3 flex flex-col items-center gap-1.5 hover:scale-105 transition-all duration-300 relative"
            >
              <Button
                size="compact-xs"
                className="absolute right-2 top-2"
                color="blue"
                variant="light"
              >
                <FaPencil />
              </Button>
              <div className="dark:text-neutral-300 font-medium text-sm">
                #Hot new reactjs
              </div>
              <div className="flex items-center gap-1 dark:text-neutral-200 font-medium">
                <div className="text-base">
                  Total Post: <b>395K</b>
                </div>
              </div>
              <div className="flex items-center dark:text-neutral-200 text-sm font-medium">
                <GrFormView size={24} />
                <span>249K</span>
              </div>
              <span className="text-xs dark:text-neutral-400 font-medium">
                Created: 24/10/2002
              </span>
            </div>
          );
        })}
    </div>
  );
}
