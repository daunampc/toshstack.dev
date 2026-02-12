import { PostDetailParams, postKeys } from '@/widgets/post/model';
import { fetchPostBySlug } from '@/widgets/post/model/post-detail.api';
import { PostDetail } from '@/widgets/post/ui/detail';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { slug: string };
};
export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await fetchPostBySlug({ slug: params.slug });

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export const PostDetailPage = async ({ params }: { params: PostDetailParams }) => {
  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: postKeys.detail(params),
    queryFn: () => fetchPostBySlug(params),
  });
  const post = qc.getQueryData(postKeys.detail(params));
  if (!post) notFound();
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <PostDetail slug={params.slug} />
    </HydrationBoundary>
  );
};
