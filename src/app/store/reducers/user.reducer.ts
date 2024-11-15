import {createReducer, on} from "@ngrx/store";
import * as UserActions from '../actions/user.actions';
import {User} from "../../core/models/user.model";
import {
  addUserFailure,
  addUserSuccess, deleteUserFailure,
  deleteUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  updateUserFailure, updateUserSuccess
} from "../actions/user.actions";

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(addUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user], loading: false })),
  on(addUserFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => (u.id === user.id ? user : u)),
    loading: false,
  })),
  on(updateUserFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
    loading: false,
  })),
  on(deleteUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
