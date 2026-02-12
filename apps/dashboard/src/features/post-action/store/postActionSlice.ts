import { createSlice } from '@reduxjs/toolkit';
import type { PostActionState } from '../types/post-action.types';

const initialState: PostActionState = {
  is_preview: false,
  is_setting: false,
};
const postActrionSlice = createSlice({
  name: 'post-action-slice',
  initialState,
  reducers: {
    handleSetting: state => {
      state.is_setting = !state.is_setting;
    },
  },
});
export default postActrionSlice.reducer;
export const { handleSetting } = postActrionSlice.actions;
