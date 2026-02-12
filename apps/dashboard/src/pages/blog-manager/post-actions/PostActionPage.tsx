import { PostActionsHeader, PostActionsMain } from '@/components/blog-manager';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

export const PostActionPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const actionParam = searchParams.get('action');
  const postIdParam = searchParams.get('post-id');

  useEffect(() => {
    if (!actionParam || !postIdParam) {
      navigate('/');
    }
  }, [actionParam, postIdParam, navigate]);
  return (
    <div className="space-y-2.5">
      <PostActionsHeader />
      <PostActionsMain />
    </div>
  );
};
