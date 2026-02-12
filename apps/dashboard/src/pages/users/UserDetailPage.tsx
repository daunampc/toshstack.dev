import { NavigationBack } from '@/components/layout/Navigation';
import {
  UserActionRoot,
  UserActionTabBar,
} from '@/components/users/userDetail';

export default function UserDetailPage() {
  return (
    <NavigationBack>
      <div className="w-full space-y-3">
        <UserActionTabBar />
        <UserActionRoot />
      </div>
    </NavigationBack>
  );
}
