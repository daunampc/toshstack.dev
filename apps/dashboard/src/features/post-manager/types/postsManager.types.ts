import type { PayloadAction } from '@reduxjs/toolkit';
export type AllPostLayout = 'grid-view' | 'list-view';
export type AllPostFilter = {
  top_likes: boolean;
  top_comments: boolean;
  top_views: boolean;
  reports: boolean;
};
export interface PostManagerState {
  allPost: PostManagerAllPost;
}

export interface PostManagerAllPost {
  bulkSelect: {
    is_select: boolean;
    data: { id_card: string | number }[];
  };

  layout: AllPostLayout;
  filter: AllPostFilter;
}

export type HandleBulkSelectActions = PayloadAction<
  { id_card: string | number }[] | []
>;
export type AllPostFilterKey = keyof AllPostFilter;

export type HandleLayoutChangeActions = PayloadAction<AllPostLayout>;
export type HandleFilterPostActions = PayloadAction<AllPostFilterKey[]>;
