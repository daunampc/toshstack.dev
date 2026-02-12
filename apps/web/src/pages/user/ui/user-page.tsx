import { UserOverview } from '@/widgets/user/ui/profile/pages';
import { UserPageProps } from '../model/types';

export const UserPage = async ({ params }: { params: UserPageProps }) => {
  return <UserOverview handle={params.handle} />;
};
