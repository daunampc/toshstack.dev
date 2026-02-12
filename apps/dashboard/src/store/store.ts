import sidebarSliceReducer from '@/features/sidebar/store/sidebarSlice';
import postActionReducer from '@/features/post-action/store/postActionSlice';
import { configureStore } from '@reduxjs/toolkit';
import postManagerReducer from '@/features/post-manager/store/postManager.slice';

export const store = configureStore({
  reducer: {
    sidebarSliceReducer,
    postActionReducer,
    postManagerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
