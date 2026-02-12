import { Avatar, Button } from '@mantine/core';
import { IoIosMore } from 'react-icons/io';
import AvatarV1JPG from '@/assets/images/avatar-v1.jpg';
export default function RecentCommentsBlog() {
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white shadow rounded-lg">
      <div className="p-3 flex items-center justify-between">
        <div className="font-medium dark:text-neutral-200">Recent Comments</div>
        <Button size="compact-xs" variant="light" color="violet">
          <IoIosMore />
        </Button>
      </div>
      <ul className="border-t border-dashed border-neutral-600">
        {Array(5)
          .fill('_')
          .map((_, idx) => {
            return (
              <li key={idx} className="p-3 flex gap-2">
                <Avatar src={AvatarV1JPG} radius={'md'} alt="avatar" />
                <div className="space-y-0.5">
                  <div className="text-sm dark:text-neutral-400 text-gray-400 font-medium space-x-1">
                    <span className="font-semibold text-pink-500 text-sm">
                      @Toshstack
                    </span>
                    <span>Has commented</span>
                  </div>
                  <p className="line-clamp-2 text-xs dark:text-slate-300 text-gray-600 font-medium">
                    Image component is a polymorphic component, its root element
                    can be changed with component prop. You can use it with
                    next/image and other similar components.
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
