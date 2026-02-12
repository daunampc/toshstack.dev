import { Button } from '@mantine/core';
import type { UserDetailTabBar } from './userDetail.types';
import { useSearchParams } from 'react-router';
import clsx from 'clsx';

interface MenuTab {
  slug: UserDetailTabBar;
  label: string;
}

const menu_tab: MenuTab[] = [
  {
    slug: 'account-profile',
    label: 'Account profile',
  },
  {
    slug: 'activity-history',
    label: 'Activity history',
  },
  {
    slug: 'account-security',
    label: 'Security',
  },
  {
    slug: 'account-plan-billing',
    label: 'Plan & Billing',
  },
];
export default function UserDetailTabBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const actionTabBar = searchParams.get('tab') as UserDetailTabBar | null;
  const handleChangeTab = (newTab: UserDetailTabBar) => {
    searchParams.set('tab', newTab);
    setSearchParams(searchParams);
  };
  return (
    <div className="w-full dark:bg-dark-charcoal bg-white rounded-lg shadow p-1.5">
      {menu_tab.map(it => {
        return (
          <Button
            key={it.slug}
            size="sm"
            onClick={() => handleChangeTab(it.slug)}
            className={clsx(
              actionTabBar === it.slug
                ? 'dark:bg-dark-charcoal-gray bg-gray-100 shadow'
                : 'transparent',
              'dark:text-neutral-200 text-dark-slate',
            )}
            variant="transparent"
          >
            {it.label}
          </Button>
        );
      })}
    </div>
  );
}
