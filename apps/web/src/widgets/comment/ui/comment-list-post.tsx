'use client';
import { useInView } from 'react-intersection-observer';
import { CommentItem } from '@/entities/comment/ui';
import { useCommentPagination } from '../model/use-comment-pagination';
import CommentPagination from './comment-pagination';
import CommentListSkeleton from './comment-list-skeleton';
import { useRef, useState } from 'react';
import type { CommentSortBy as CommentSortByType } from '@/features/comment/model';
import { useCommentPostQuery } from '@/features/comment/model';
import { CommentSortBy } from '@/features/comment/ui';

type CommentListProps = {
  postId: string;
};

export default function CommentListPost({ postId }: CommentListProps) {
  const [sortBy, setSortBy] = useState<CommentSortByType>('new');

  const { page, setPage } = useCommentPagination();

  const { ref, inView } = useInView({
    rootMargin: '200px',
    triggerOnce: true,
  });
  const topRef = useRef<HTMLDivElement | null>(null);

  const { data, isFetching } = useCommentPostQuery({
    page,
    post_id: postId,
    enabled: inView,
    sort_by: sortBy,
  });

  if (!inView) {
    return <div ref={ref} className="h-10" />;
  }

  const comments = data?.data ?? [];
  const meta = data?.meta;
  if (isFetching) {
    return <CommentListSkeleton />;
  }
  return (
    <>
      {comments.length > 0 && (
        <CommentSortBy
          value={sortBy}
          onChange={(v) => {
            setSortBy(v);
            setPage(1);
          }}
        />
      )}
      <div ref={topRef} className="flex flex-col gap-3">
        <div className="flex flex-col gap-6 mt-4">
          {comments.map((c) => (
            <CommentItem key={c.id} comment={c} is_reply={false} />
          ))}

          {/* {isFetchingNextPage && <div className="text-xs text-gray-500">Loading more comments…</div>} */}
        </div>
        {meta && (
          <CommentPagination
            page={page}
            total_pages={meta.total_pages}
            onChangePage={(page) => {
              setPage(page);
              topRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          />
        )}
      </div>
    </>
  );
}
