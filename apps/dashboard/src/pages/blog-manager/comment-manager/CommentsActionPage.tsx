import { CommentsActionHeader } from '@/components/blog-manager';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

export default function CommentsActionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get('action')) {
      searchParams.set('action', 'admin-actions');
      setSearchParams(searchParams);
    }
  }, [searchParams]);
  return (
    <div className="w-full">
      <CommentsActionHeader />
    </div>
  );
}
