import { Pagination } from '@mantine/core';
import { CommentPaginationProps } from '../model';

export default function CommentPagination({
  total_pages,
  page,
  onChangePage,
}: CommentPaginationProps) {
  return (
    <div className="flex items-center justify-end">
      <Pagination size={'sm'} total={total_pages} value={page} onChange={onChangePage} />
    </div>
  );
}
