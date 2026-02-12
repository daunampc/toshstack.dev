import { createSlice } from '@reduxjs/toolkit';
import type { SidebarState } from '../types/sidebar.types';

const initialState: SidebarState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    handleSidebar: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
