'use client';
import { PostDetailCommentProps } from '../../model';
import CommentListPost from '@/widgets/comment/ui/comment-list-post';

export default function PostDetailComment({ post }: PostDetailCommentProps) {
  return (
    <>
      <div className="flex items-center gap-3 max-w-xl justify-between mx-auto">
        <div className="font-semibold text-xl">Member discussion</div>
        <div className="text-sm font-medium">{post.comment_count} comments</div>
      </div>
      <div className="mt-4">
        <CommentListPost postId={post.post_id} />
      </div>
    </>
  );
}
