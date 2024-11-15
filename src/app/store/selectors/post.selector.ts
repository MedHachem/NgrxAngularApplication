import {createSelector} from "@ngrx/store";
import {PostState} from "../reducers/post.reducer";

export const selectPostState =(state:any)=>state.post;
export const selectPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);

export const selectPostsLoading = createSelector(
  selectPostState,
  (state: PostState) => state.loading
);

export const selectPostsError = createSelector(
  selectPostState,
  (state: PostState) => state.error
);
