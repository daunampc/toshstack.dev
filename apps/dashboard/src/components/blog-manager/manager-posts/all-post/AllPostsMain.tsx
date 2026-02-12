import { CardPostBlog } from '@/components/ui/card/Card';
import { useEffect } from 'react';
import Cyrene8KPNG from '@/assets/images/cyrene-8k.png';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { handleBulkSelectData } from '@/features/post-manager/store/postManager.slice';

export default function AllPostsMain() {
  const dispatch = useAppDispatch();
  const postManagerState = useAppSelector(
    state => state.postManagerReducer.allPost,
  );
  useEffect(() => {
    if (!postManagerState.bulkSelect.is_select) {
      dispatch(handleBulkSelectData([]));
    }
  }, [postManagerState.bulkSelect.is_select]);
  const handleSelectCard = (id_blog: string | number) => {
    const data = postManagerState.bulkSelect.data;
    const checkCard = data.find(i => i.id_card === id_blog);
    if (postManagerState.bulkSelect.is_select) {
      if (checkCard) {
        dispatch(handleBulkSelectData(data.filter(a => a.id_card !== id_blog)));
      } else {
        const newData = [...data, { id_card: id_blog }];
        dispatch(handleBulkSelectData(newData));
      }
    }
  };
  return (
    <div className="w-full grid grid-cols-5 gap-3">
      {Array(20)
        .fill('_')
        .map((_, idx) => {
          return (
            <CardPostBlog
              key={idx}
              onClick={() => handleSelectCard(idx)}
              className={clsx(
                postManagerState.bulkSelect.data &&
                  postManagerState.bulkSelect.data.find(i => i.id_card === idx)
                  ? 'border-purple-600'
                  : 'border-transparent',
                postManagerState.bulkSelect.is_select
                  ? 'border-2'
                  : 'border-none',
              )}
              title="Welcome to Atlassians status page hub"
              description="Below youll find status information for each of Atlassians products and services."
              image={Cyrene8KPNG}
            />
          );
        })}
    </div>
  );
}
