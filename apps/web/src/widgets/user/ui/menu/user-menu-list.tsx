import { useAuth } from 'app/_providers/auth-provider';
import Link from 'next/link';
import { FcVip } from 'react-icons/fc';
import { GoBell } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSwitchAccount, MdOutlineWorkspacePremium } from 'react-icons/md';
import { PiBoundingBox } from 'react-icons/pi';

const MENUS = (handle: string) => [
  {
    icon: MdOutlineSwitchAccount,
    title: 'Account',
    slug: `/u/${handle}`,
  },
  {
    icon: PiBoundingBox,
    title: 'Manager Account',
    slug: '/',
  },
  {
    icon: GoBell,
    title: 'Notification',
    count: 10,
    slug: '/user/notifications',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Group',
    count: 10,
    slug: '/',
  },
  {
    icon: MdOutlineWorkspacePremium,
    title: 'Premium',
    slug: '/',
  },
  {
    icon: IoSettingsOutline,
    title: 'Settings',
    count: 10,
    slug: '/settings/account',
  },
  {
    icon: IoIosHelpCircleOutline,
    title: 'Help',
    slug: '/',
  },
];
export default function UserMenuLis() {
  const user = useAuth();
  if (!user) return null;
  return (
    <>
      {MENUS(user?.handle).map((it, idx) => {
        const Icon = it.icon;
        return (
          <Link
            className="flex text-sm items-center gap-1 px-3 py-1.5 hover:bg-gray-50"
            key={idx}
            href={it.slug}
          >
            <Icon size={20} className="w-8" />
            <div className="relative">
              <span className="font-medium text-gray-800">{it.title}</span>
            </div>
          </Link>
        );
      })}
      <Link href={'/'} className="flex text-sm items-center gap-1 px-3 py-1.5 hover:bg-gray-50">
        <FcVip size={20} className="w-8" />

        <div className="relative">
          <span className="font-medium text-orange-600">Upgrade to pro</span>
        </div>
      </Link>
    </>
  );
}
