/* Dashboard blog */
export type BlogKpiPoint = {
  date: string;
  postsPublished: number;
  commentsFlagged: number;
  revenue: number; // doanh thu (đơn vị tuỳ bạn, ví dụ USD)
  clicks: number;
  views: number;
};
