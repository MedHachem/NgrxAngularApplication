import { createFeatureSelector, createSelector } from '@ngrx/store';
import {UserState} from "../reducers/user.reducer";
import {User} from "../../core/models/user.model";

export const selectUserState = (state: any) => state.user;

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUsersLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUsersError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
