import { createSlice } from '@reduxjs/toolkit';
import type {
  AllPostFilter,
  AllPostFilterKey,
  HandleBulkSelectActions,
  HandleFilterPostActions,
  HandleLayoutChangeActions,
  PostManagerState,
} from '../types/postsManager.types';

const initialState: PostManagerState = {
  allPost: {
    bulkSelect: {
      is_select: false,
      data: [],
    },
    layout: 'grid-view',
    filter: {
      top_comments: false,
      reports: false,
      top_likes: false,
      top_views: false,
    },
  },
};
export const postManagerSlice = createSlice({
  name: 'post-manager',
  initialState,
  reducers: {
    handleBulkSelect: state => {
      state.allPost.bulkSelect.is_select = !state.allPost.bulkSelect.is_select;
    },
    handleBulkSelectData: (state, action: HandleBulkSelectActions) => {
      if (state.allPost.bulkSelect && action && action.payload) {
        state.allPost.bulkSelect.data = action.payload;
      } else {
        state.allPost.bulkSelect.data = [];
      }
    },
    handleLayoutChange: (state, action: HandleLayoutChangeActions) => {
      state.allPost.layout = action.payload;
    },
    handleFilterPost: (state, action: HandleFilterPostActions) => {
      state.allPost.filter = Object.keys(state.allPost.filter).reduce(
        (acc, key) => {
          acc[key as AllPostFilterKey] = action.payload.includes(
            key as AllPostFilterKey,
          );
          return acc;
        },
        {} as AllPostFilter,
      );
    },
  },
});

export const {
  handleBulkSelect,
  handleBulkSelectData,
  handleLayoutChange,
  handleFilterPost,
} = postManagerSlice.actions;
export default postManagerSlice.reducer;
