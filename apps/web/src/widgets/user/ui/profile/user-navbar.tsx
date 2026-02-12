'use client';
import { motion } from 'motion/react';
import { useAuth } from 'app/_providers/auth-provider';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function UserNavbar() {
  const user = useAuth();
  const params = useParams<{ handle: string }>();
  const pathname = usePathname();
  const slug = decodeURIComponent(params?.handle as string);

  const tabs = [
    { name: 'Overview', href: '', private: false },
    { name: 'Posts', href: 'posts', private: false },
    { name: 'Comments', href: 'comments', private: false },
    { name: 'Shop', href: 'shop', private: false },
    { name: 'Saved', href: 'saved', private: true },
    { name: 'Hidden', href: 'hidden', private: true },
    { name: 'Upvoted', href: 'upvoted', private: true },
    { name: 'Downvoted', href: 'downvoted', private: true },
  ];
  return (
    <div className="flex items-center gap-5 relative overflow-y-auto">
      {tabs.map((tab) => {
        const href = `/u/${slug}${tab.href ? `/${tab.href}` : ''}`;
        const isActive = pathname === href;
        if (tab.private && user && user.user_id === user.user_id)
          return (
            <Link
              href={href}
              key={tab.name}
              className="relative px-4 py-2 font-medium rounded-full text-sm"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-200 rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.name}</span>
            </Link>
          );
        else if (!tab.private) {
          return (
            <Link
              href={href}
              key={tab.name}
              className={clsx(
                tab.href === 'shop' && 'bg-orange-500/20 text-orange-600 font-semibold',
                'relative px-4 py-2 font-medium rounded-full text-sm'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-200 rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.name}</span>
            </Link>
          );
        }
      })}
    </div>
  );
}
