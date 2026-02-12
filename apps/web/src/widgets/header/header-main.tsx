'use client';
import { ActionIcon, Button } from '@mantine/core';
import { FiBell } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { LuCirclePlus, LuMessageCircleMore } from 'react-icons/lu';
import { useAuth } from 'app/_providers/auth-provider';
import { UserMenu } from '../user/ui/menu';
import { AuthModal } from '../auth/ui';

export default function HeaderMain() {
  const user = useAuth();
  return (
    <div className="flex justify-between p-3 border-b border-b-gray-300 sticky top-0 bg-white z-20 ">
      <Link href={'/'}>
        <Image
          src={'/images/logo-a.png'}
          width={500}
          height={500}
          className="w-24 h-10 object-cover"
          alt="logo"
        />
      </Link>
      <div></div>
      <div className="flex items-center gap-2 -space-y-1">
        <div className="flex items-center gap-1">
          <Button
            component={Link}
            href={'/u/create-post'}
            variant="light"
            radius={'lg'}
            leftSection={<LuCirclePlus />}
          >
            New post
          </Button>
          <ActionIcon
            variant="subtle"
            className="rounded-full"
            radius={'xl'}
            color="#000000"
            size="input-md"
          >
            <LuMessageCircleMore size={22} />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            className="rounded-full"
            radius={'xl'}
            color="#000000"
            size="input-md"
          >
            <FiBell size={22} />
          </ActionIcon>
        </div>
        {user && <UserMenu />}
        {!user && <AuthModal />}
      </div>
    </div>
  );
}
