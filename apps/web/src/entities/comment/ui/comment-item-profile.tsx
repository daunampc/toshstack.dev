import { Avatar, Popover } from '@mantine/core';
import { CommentItemProfileProps } from '../model';

export function CommentItemProfile({ comment }: CommentItemProfileProps) {
  return (
    <Popover>
      <Popover.Target>
        <div className="font-semibold text-black-primary text-sm hover:bg-slate-50 rounded-sm cursor-pointer px-1 py-1">
          {comment.author.profile.display_name}
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <div>
          <div className="flex items-center gap-1">
            <Avatar src={comment.author.profile.avatar_url} />
            <div>
              <div className="font-medium text-black-primary">
                {comment.author.profile.display_name}
              </div>
            </div>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
