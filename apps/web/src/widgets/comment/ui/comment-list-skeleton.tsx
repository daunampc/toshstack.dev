import { Skeleton } from '@mantine/core';

export default function CommentListSkeleton() {
  return (
    <div className="flex gap-1 relative animate-pulse">
      <div className="relative flex flex-col shrink-0 items-center">
        <Skeleton height={40} width={40} radius="xl" />
      </div>

      <div className="grow space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton height={12} width={120} />
          <Skeleton height={12} width={60} />
        </div>

        <div className="space-y-1">
          <Skeleton height={14} width="90%" />
          <Skeleton height={14} width="70%" />
        </div>

        <div className="flex gap-4 mt-2">
          <Skeleton height={12} width={40} />
          <Skeleton height={12} width={40} />
        </div>
      </div>
    </div>
  );
}
