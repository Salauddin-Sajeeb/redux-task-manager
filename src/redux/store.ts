import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/Todoslice";
import { baseApi } from "./api/Api";
export const store=configureStore(
    {
        reducer:{
        [baseApi.reducerPath]: baseApi.reducer,
        todos:todoReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    }
);
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch