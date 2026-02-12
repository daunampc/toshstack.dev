import { useState } from 'react';

export function useCommentPagination() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((p) => p + 1);
  const reset = () => setPage(1);

  return {
    page,
    setPage,
    nextPage,
    reset,
  };
}
