import { ListUserHeader, ListUserTable } from '@/components/users/list-user';
import { users } from '@/data/user';

export default function ListUserPage() {
  return (
    <div className="w-full space-y-3">
      <ListUserHeader />
      <ListUserTable data={users} />
    </div>
  );
}
