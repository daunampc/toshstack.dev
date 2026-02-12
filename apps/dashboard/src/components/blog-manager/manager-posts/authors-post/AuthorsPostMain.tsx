import { Avatar, Badge } from '@mantine/core';
export default function AuthorsPostMain() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {Array(20)
        .fill('_')
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className="dark:bg-dark-charcoal p-3 rounded-lg gap-1 relative"
            >
              <div className="flex items-center gap-2">
                <Avatar size={50} className="z-20" />
                <div className="flex flex-col">
                  <div className="dark:text-neutral-200 text-base font-semibold">
                    Itou Tohiro
                  </div>
                  <div className="text-sm dark:text-neutral-400 font-medium">
                    #daunampc
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <ul className="flex flex-col gap-2">
                  <li className="text-sm font-medium dark:text-neutral-200 flex items-center gap-2 justify-between">
                    <div className="dark:text-neutral-200">Type account</div>
                    <div className="capitalize text-sm">Premium</div>
                  </li>
                  <li className="text-sm font-medium dark:text-neutral-200 flex items-center gap-2 justify-between">
                    <div className="dark:text-neutral-200">Role</div>
                    <div className="capitalize text-sm">User</div>
                  </li>
                  <li className="text-sm font-medium dark:text-neutral-200 flex items-center gap-2 justify-between">
                    <div className="dark:text-neutral-200">Total posts</div>
                    <Badge
                      color="violet"
                      className="capitalize text-xs"
                      variant="filled"
                    >
                      945K
                    </Badge>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
}
