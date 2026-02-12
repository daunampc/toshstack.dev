import { ActionIcon, Avatar, Button, Tooltip } from '@mantine/core';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import Link from 'next/link';
import { timeAgo } from '@/shared/lib/format-date';
import { CommentItemProfile } from '@/entities/comment/ui';
import { CommentLike, CommentMenu } from '@/features/comment/ui';
import { CommentItemProps } from '../model';

export function CommentItem({ comment, is_reply, depth = 0 }: CommentItemProps) {
  return (
    <div aria-label={comment.id} className="group flex gap-1 relative">
      <div className="relative flex flex-col shrink-0 items-center">
        {!is_reply && comment.replies && comment.replies.length > 0 && (
          <span className="comment-thread-line" />
        )}

        {is_reply && <span className="reply-connector" />}
        <Avatar
          component={Link}
          href={`/user/${comment.author.handle}`}
          src={comment.author.profile.avatar_url}
          size={40}
          classNames={{ image: 'object-cover' }}
          alt={comment.author.profile.display_name}
        />
      </div>
      <div className="grow ">
        <div className="space-y-1.5">
          <div className="flex items-center">
            <div className="flex items-center gap-0.5">
              <CommentItemProfile comment={comment} />
              {/* <FcApproval /> */}
              <Tooltip
                classNames={{ tooltip: 'font-medium text-xs' }}
                label="Account verify by toshstack"
                position="top-start"
              >
                <ActionIcon variant="transparent" color="blue" size="xs">
                  <RiVerifiedBadgeFill />
                </ActionIcon>
              </Tooltip>
            </div>
            <BsDot />
            <div className="text-xs font-medium text-gray-600">{timeAgo(comment.created_at)}</div>
          </div>
          <p className="text-base leading-6 text-black-primary">{comment.content}</p>
          <div className="flex items-center gap-4">
            <CommentLike comment={comment} />
            <CommentMenu />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-3 relative">
          {comment.replies &&
            comment.replies.map((c) => {
              return <CommentItem key={c.id} depth={depth + 1} is_reply={true} comment={c} />;
            })}
          {comment.replies && comment.reply_count - 2 > 0 && (
            <div>
              <Button
                size="compact-xs"
                color="grape"
                variant="light"
                className="font-semibold text-xs"
              >
                Show more ({comment.reply_count - 2})
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
