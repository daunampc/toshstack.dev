'use client';
import { PostDetailContent } from '@/features/post/detail/ui';
import { PostDetailProps, usePostDetailQuery } from '../../model';
import PostDetailHeader from './post-detail-header';
import PostDetailMeta from './post-detail-meta';
import PostDetailProfile from './post-detail-profile';
import PostDetailComment from './post-detail-comment';

export default function PostDetail(params: PostDetailProps) {
  const { data } = usePostDetailQuery(params);
  if (!data) return null;
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full">
        <div
          className="
        hidden xl:block
        w-[200px]
        border-r border-gray-200
        px-2
        sticky top-0
        h-[calc(100vh-17px)]
        overflow-y-auto
        shrink-0
      "
        ></div>

        {/* CENTER CONTENT */}
        <div className="min-w-0 flex-1">
          <div className="px-6">
            <PostDetailHeader post={data} />
            <PostDetailContent post={data} />
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <PostDetailComment post={data} />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          className="
        hidden xl:block
        w-[260px]
        sticky top-[67px]
        h-[calc(100vh-67px)]
        overflow-y-auto
        shrink-0
      "
        >
          {/* Right sidebar content */}

          <PostDetailProfile post={data} />
          <PostDetailMeta />
        </div>
      </div>
    </div>
  );
}
