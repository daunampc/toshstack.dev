import { PostsLockedHeader, PostsLockedMain } from '@/components/blog-manager';

export default function PostsLocked() {
  return (
    <div className="w-full space-y-3">
      <PostsLockedHeader />
      <PostsLockedMain />
    </div>
  );
}
