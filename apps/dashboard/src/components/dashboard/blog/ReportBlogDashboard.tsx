import { Avatar, Badge, Button } from '@mantine/core';
import AvatarJPG from '@/assets/images/avatar-v1.jpg';
export default function ReportBlogDashboard() {
  return (
    <div className="w-full dark:bg-dark-charcoal rounded-lg bg-white shadow">
      <div className="flex items-center justify-between p-3">
        <div className="dark:text-neutral-100 font-medium text-dark-slate">
          Report List
        </div>
        <Button size="xs" variant="light" color="blue" radius={'lg'}>
          View all
        </Button>
      </div>
      <ul className="border-t dark:border-t-neutral-600  border-neutral-200 pt-3 ">
        {Array(5)
          .fill('_')
          .map((_, idx) => {
            return (
              <li
                key={idx}
                className="p-2 flex items-start gap-3 dark:hover:bg-neutral-900/50 transition-all duration-300"
              >
                <Avatar src={AvatarJPG} />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1">
                    <div className="font-medium dark:text-neutral-100 text-sm">
                      Toshstack.dev
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium text-blue-500">
                        Member
                      </span>
                      <Badge
                        color="red"
                        size="sm"
                        className="capitalize text-neutral-100"
                      >
                        Band
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <time className="text-xs font-bold dark:text-neutral-400">
                      16:32-23/4/2025
                    </time>
                    <Badge
                      variant="outline"
                      color="indigo"
                      size="md"
                      className="capitalize font-semibold"
                    >
                      Account
                    </Badge>
                  </div>

                  <p className="line-clamp-2 text-sm dark:text-neutral-400 font-medium">
                    If you are a large organization that depends on open source
                    software to run your business, it’s irresponsible not to
                    have a solution like BSI. This is because in addition to
                    making for a less disruptive change, upgrading to BSI helps
                    improve your security posture by
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="flex w-full justify-center">
        <Button variant="transparent" color="blue" size="xs" className="">
          View all
        </Button>
      </div>
    </div>
  );
}
