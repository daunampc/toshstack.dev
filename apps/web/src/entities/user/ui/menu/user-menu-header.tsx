'use client';
import { Avatar } from '@mantine/core';
import { useAuth } from 'app/_providers/auth-provider';
import { IoMdMenu } from 'react-icons/io';

export function UserMenuHeader() {
  const user = useAuth();
  if (!user) return null;
  return (
    <div className="flex items-center gap-1 justify-between">
      <div className="flex items-center gap-1">
        <Avatar src={user.profile.avatar_url} alt="Avatar" size={'md'} className="object-cover" />
        <div className="flex flex-col">
          <div className="text-black-primary text-sm font-semibold">
            {user.profile.display_name}
          </div>
          <div className="text-xs text-gray-700">{user.email}</div>
        </div>
      </div>
      <IoMdMenu />
    </div>
  );
}
