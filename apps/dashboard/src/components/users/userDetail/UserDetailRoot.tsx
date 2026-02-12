import { useSearchParams } from 'react-router';
import type { UserDetailTabBar } from './userDetail.types';
import AccountProfile from './content/AccountProfile';
import ActivityHistory from './content/ActivityHistory';
import AccountSecurity from './content/AccountSecurity';
import AccountBilling from './content/AccountBilling';
import NotFoundPage from '@/pages/NotFoundPage';
export default function UserDetailRoot() {
  const [searchParams] = useSearchParams();
  const userTab = searchParams.get('tab') as UserDetailTabBar | null;
  if (userTab === 'account-profile') return <AccountProfile />;
  else if (userTab === 'activity-history') return <ActivityHistory />;
  else if (userTab === 'account-security') return <AccountSecurity />;
  else if (userTab === 'account-plan-billing') return <AccountBilling />;
  else return NotFoundPage();
}
