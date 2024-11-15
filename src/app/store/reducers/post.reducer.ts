import {Post} from "../../core/models/post.model";
import {createReducer, on} from "@ngrx/store";
import {PostsActions} from "../actions/posts.actions";
import {deleteUserFailure, deleteUserSuccess} from "../actions/user.actions";

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};
export const PostReducer=createReducer(
  initialState,
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({ ...state, posts, loading: false })),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({ ...state, error, loading: false })),


  on(PostsActions.deletePostSuccess,(state, { id }) => ({
    ...state,
    posts: state.posts.filter(post => post.id !== id),
    loading: false,
  })),
  on(PostsActions.deletePostFailure, (state, { error }) => ({ ...state, error, loading: false }))

  )
