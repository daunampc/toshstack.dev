import { CommentItem } from '@/entities/comment/ui';
import { CommentListProps } from '../model/types';

export default function CommentList({ comments }: CommentListProps) {
  if (!comments || comments.length === 0) return <div>Not found</div>;
  return (
    <div className="flex flex-col gap-6 mt-4">
      {comments.map((it) => {
        return <CommentItem comment={it} key={it.id} is_reply={false} />;
      })}
    </div>
  );
}
