'use client';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ActionIcon, Avatar } from '@mantine/core';
import Image from 'next/image';
import { RiLink } from 'react-icons/ri';
import { FaFacebookSquare, FaGithubSquare, FaYoutubeSquare } from 'react-icons/fa';
import { useUserProfileQuery } from '../../api';
import { useParams } from 'next/navigation';
export function UserDetailed() {
  const params = useParams<{ handle: string }>();
  const { data: user } = useUserProfileQuery(params?.handle ?? '');
  if (!user) return null;
  return (
    <div className="w-full relative">
      <div className="relative">
        <Image
          src={user.profile.banner_url || 'https://placehold.co/1600x250.png'}
          alt="User banner"
          width={1600}
          height={700}
          className="rounded-lg object-cover h-[250px] relative w-full"
          priority
        />

        <div className="absolute -bottom-5 left-4">
          <div className="relative">
            <Avatar src={user.profile.avatar_url} size={110} className="bg-blue-200" />
            <div className="rounded-full absolute bottom-2 right-2 bg-white flex items-center justify-center">
              <Image
                alt="verify-account"
                className="w-5 h-5 object-contain scale-125"
                width={60}
                height={60}
                src={'/images/verify-account.png'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-between flex-row mt-8">
        <div className="flex flex-col md:flex-row gap-2 md:justify-between items-end w-full">
          <div className="space-y-0.5">
            <div className="font-bold text-2xl">{user.profile.display_name}</div>
            <span className="text-sm font-medium text-gray-600">
              Founder or VossStudio and Frontend Developer
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-600">
                <HiOutlineLocationMarker />
                <span className="text-sm font-medium ">Buon ma thuot, Vietnam</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <RiLink />
                <span className="text-sm font-medium ">toshstack.dev</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ActionIcon size="md" variant="filled" color="indigo">
              <FaFacebookSquare size={20} />
            </ActionIcon>
            <ActionIcon size="md" variant="filled" color="#181717">
              <FaGithubSquare size={20} />
            </ActionIcon>
            <ActionIcon size="md" variant="filled" color="#FF0000">
              <FaYoutubeSquare size={20} />
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
