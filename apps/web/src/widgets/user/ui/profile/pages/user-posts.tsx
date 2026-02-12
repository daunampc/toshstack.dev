import { PostListUser } from '@/widgets/post/ui';

export default function UserPosts(params: { handle: string }) {
  return <PostListUser handle={params.handle} />;
}
