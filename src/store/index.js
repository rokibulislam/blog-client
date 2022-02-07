import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/posts';
import commentReducer from './slices/comments';
import authReducer from './slices/user';

export default configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
    auth: authReducer,
  },
});