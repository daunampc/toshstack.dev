import Link from 'next/link';
import { PostCardProps } from '../model/types';
import { ActionIcon, Avatar, Tooltip } from '@mantine/core';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import { IoMdTime } from 'react-icons/io';
import { timeAgo } from '@/shared/lib/format-date';
import { PostReactions } from '@/features/post/reactions/ui';

export default function PostCard({ layout = 'vertical', post }: PostCardProps) {
  if (layout === 'vertical') {
    return (
      <div className="hover:bg-gray-50 p-3 rounded-md cursor-pointer transition-all duration-200">
        <Link href={`/${post.slug}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-1">
              <Avatar size={'md'} src={post.author.profile.avatar_url} alt="avatar" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex items-center gap-0.5">
                    <div className="font-semibold text-sm">{post.author.profile.display_name}</div>
                    <Tooltip
                      classNames={{ tooltip: 'font-medium text-xs' }}
                      label="Account verify by toshstack"
                      position="top-start"
                    >
                      <ActionIcon variant="transparent" size={'xs'}>
                        <Image
                          src={'/images/verify-account.png'}
                          alt="verify-account"
                          width={14}
                          height={14}
                          className=""
                        />
                      </ActionIcon>
                    </Tooltip>
                  </div>
                  <BsDot />
                  <div className="flex items-center text-gray-700 font-semibold gap-0.5">
                    <IoMdTime />
                    <div className="text-xs">{timeAgo(post.created_at)}</div>
                  </div>
                </div>
                <div className="font-semibold text-xs text-orange-500">{post.author.handle}</div>
                <div className="flex items-center gap-1.5 mt-1.5"></div>
              </div>
            </div>
            <div className="flex items-center gap-1.5"></div>
          </div>
          <div className="mt-2 space-y-2">
            <div className="font-semibold text-lg line-clamp-2 overflow-hidden break-words">
              {post.title}
            </div>
            <p className="text-sm text-gray-700">{post.description}</p>
          </div>
        </Link>
        {post.banner_image && (
          <div className="inset-shadow-md w-full mt-2">
            <Image
              alt={post.title}
              property=""
              priority
              src={post.banner_image}
              className="w-auto max-h-[350px] object-cover rounded-lg mx-auto "
              width={1600}
              height={600}
            />
          </div>
        )}
        <div className="inline-flex items-center gap-4 mt-1.5">
          <PostReactions
            post_reaction={{
              dislike: post.dislike,
              like: post.like,
            }}
            post_id={post.post_id}
          />
        </div>
      </div>
    );
  }
  return <div></div>;
}
