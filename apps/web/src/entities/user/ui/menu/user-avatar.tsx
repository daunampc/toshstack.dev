import { Avatar } from '@mantine/core';
import { UserAvatarProps } from '../../model';

export function UserAvatar({ src }: UserAvatarProps) {
  return (
    <div className="relative">
      <Avatar src={src} alt="Avatar" size={'md'} className="object-cover" />
      <div className="w-2 h-2 rounded-full bg-green-600 border border-green-700 absolute bottom-0.5 right-0.5"></div>
    </div>
  );
}
