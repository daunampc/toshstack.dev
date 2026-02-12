import { Popover } from '@mantine/core';
import { ThemeSwitch } from '@/features/theme/ui';
import { useAuth } from 'app/_providers/auth-provider';
import { UserActions } from '@/features/user/menu';
import { UserAvatar, UserMenuHeader } from '@/entities/user/ui/menu';
import { UserMenuList } from '.';
export default function UserMenu() {
  const user = useAuth();
  return (
    <Popover radius={'md'} position="bottom" offset={1} withinPortal={false} withArrow width={280}>
      <Popover.Target>
        <div>
          <UserAvatar src={user?.profile.avatar_url} />
        </div>
      </Popover.Target>
      <Popover.Dropdown className="p-0">
        <div className="p-3 flex flex-col gap-2">
          <UserMenuHeader />
          <UserActions />
        </div>
        <div className="flex flex-col gap-1">
          <ThemeSwitch />
          <div className="w-full h-px bg-gray-300" />
          <UserMenuList />
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
