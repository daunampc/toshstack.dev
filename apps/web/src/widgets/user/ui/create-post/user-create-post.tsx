'use client';

import { CreatePostForm } from '@/features/user/create-post/ui';

export default function UserCreatePost() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex  gap-6">
        <div className="flex-1 min-w-0">
          <div className="text-2xl font-semibold">Create new post</div>
          <div className="mt-2.5">
            <CreatePostForm />
          </div>
        </div>
        <div className="flex-shrink w-[230px]">
          <div>12412</div>
        </div>
      </div>
    </div>
  );
}
