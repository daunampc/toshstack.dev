import { ActionIcon, Avatar, Drawer } from '@mantine/core';
import { RxDividerHorizontal } from 'react-icons/rx';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PostDetailHeaderProps } from '../../model';
import { Image as MantineImage } from '@mantine/core';
import Image from 'next/image';
import { formatIsoToDdMonYyyy } from '@/shared/lib/format-date';
import { LuDot } from 'react-icons/lu';
import { useDisclosure } from '@mantine/hooks';
import PostDetailProfile from './post-detail-profile';

export default function PostDetailHeader({ post }: PostDetailHeaderProps) {
  const [opened, toggle] = useDisclosure(false);
  return (
    <>
      <Drawer position="right" opened={opened} onClose={toggle.close} title="Authentication">
        <PostDetailProfile post={post} />
      </Drawer>
      {post.banner_image && (
        <div className="mt-4">
          <MantineImage
            component={Image}
            priority
            src={post.banner_image || ''}
            className="w-full max-h-[550px] rounded-xl object-cover"
            width={2000}
            height={1200}
            alt="banner"
          />
        </div>
      )}

      <div className="py-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar
              onClick={toggle.open}
              src={post.author.profile.avatar_url}
              size={'lg'}
              alt="avatar"
            />
            <div className="space-y-0.5">
              <div className="font-semibold text-sm">{post.author.profile.display_name}</div>
              <div className="flex items-center text-xs text-gray-500 gap-1.5 font-medium">
                <time dateTime="2025-03-18">{formatIsoToDdMonYyyy(post.created_at)}</time>
                <RxDividerHorizontal />
                <span>4m read</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ActionIcon
              variant="light"
              className="bg-blue-50 text-black-primary gap-1 font-semibold rounded-lg"
            >
              <FaFacebookSquare className="text-blue-500" />
            </ActionIcon>
            <ActionIcon
              variant="light"
              className="bg-blue-50 text-black-primary gap-1 font-semibold rounded-lg"
            >
              <FaXTwitter className="text-black-primary" />
            </ActionIcon>
            <ActionIcon
              variant="light"
              className="bg-blue-50 text-black-primary gap-1 font-semibold rounded-lg"
            >
              <FaInstagram className="text-red-500" />
            </ActionIcon>
          </div>
        </div>
        <div className="text-5xl font-bold">{post.title}</div>
        <div className="flex items-center my-1.5">
          <div className="text-xs font-medium text-blue-500">{'Toshstack.dev'}</div>
          <LuDot />
          <div className="text-xs font-medium text-gray-500">{'Hot new'}</div>
        </div>
      </div>
    </>
  );
}
