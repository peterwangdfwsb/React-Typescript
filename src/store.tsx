import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import fetchDataReducer from "./features/fetchdata/fetchdataSlice";
import { ThunkAction } from "redux-thunk";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    fetchdata: fetchDataReducer
  },
  middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
