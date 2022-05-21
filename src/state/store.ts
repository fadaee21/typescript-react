import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./reducers/bankSlice";
import fetchSlice from "./reducers/fetchSlice";
import todoSlice from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    bank: bankSlice,
    todo: todoSlice,
    fetch: fetchSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

