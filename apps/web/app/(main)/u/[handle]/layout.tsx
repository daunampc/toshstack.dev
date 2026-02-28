import { userKeys } from '@/entities/user/model';
import { UserDetail } from '@/features/user/profile/ui';
import { getUserProfile } from '@/shared/api/profile.api';
import { UserNavbar, UserStats } from '@/widgets/user/ui/profile';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { handle: string };
}) {
  if (!params.handle) notFound();
  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: userKeys.detail(params.handle),
    queryFn: () => getUserProfile(params.handle),
  });

  const user = qc.getQueryData(userKeys.detail(params.handle));
  if (!user) notFound();
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <div className="py-4 flex flex-col flex-1 gap-2">
        <UserDetail />
        <UserStats handle={params.handle} />
        <UserNavbar />
        <div>{children}</div>
      </div>
      <div className="w-[300px]"></div>
    </HydrationBoundary>
  );
}
