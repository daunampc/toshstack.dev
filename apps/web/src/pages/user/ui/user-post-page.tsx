import { UserPosts } from '@/widgets/user/ui/profile/pages';
import { UserPostPageProps } from '../model/types';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchPostByUser, postKeys } from '@/widgets/post/model';

export const UserPostPage = async ({ params }: { params: UserPostPageProps }) => {
  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: postKeys.listByUser({ handle: params.handle }),
    queryFn: () => fetchPostByUser({ handle: params.handle }),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <UserPosts handle={params.handle} />
    </HydrationBoundary>
  );
};
