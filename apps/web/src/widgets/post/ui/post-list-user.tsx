'use client';
import { PostListUserProps, useUserPostsQuery } from '../model';
import PostCard from './post-card';

export default function PostListUser(params: PostListUserProps) {
  const { data } = useUserPostsQuery(params);
  if (!data) return <div>Post not found</div>;
  return (
    <div className="flex flex-col gap-4">
      {data.data.map((it) => {
        return <PostCard layout="vertical" key={it.post_id} post={it} />;
      })}
    </div>
  );
}
