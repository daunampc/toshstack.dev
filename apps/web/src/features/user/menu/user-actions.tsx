'use client';
import { LogoutButton } from '@/features/auth/logout/ui';
import { Button } from '@mantine/core';
import { useAuth } from 'app/_providers/auth-provider';
import Link from 'next/link';
import { IoMdSettings } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';

export function UserActions() {
  const user = useAuth();
  if (!user) return null;
  return (
    <div className="flex items-center gap-2">
      <Button
        href={`/settings`}
        component={Link}
        variant="white"
        size="compact-sm"
        radius={'sm'}
        leftSection={<IoMdSettings />}
        className="shadow-sm text-xs text-black-primary bg-white  border border-gray-200 flex-1"
      >
        Manager
      </Button>
      <LogoutButton
        variant="white"
        leftSection={<TbLogout />}
        size="compact-sm"
        className="shadow-sm text-xs text-black-primary bg-white  border border-gray-200 flex-1"
      >
        Sign out
      </LogoutButton>
    </div>
  );
}
