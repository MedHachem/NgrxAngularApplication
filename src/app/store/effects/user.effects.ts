import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, of} from "rxjs";
import {UserService} from "../../core/services/user.service";
import * as UserActions from '../actions/user.actions';
import {
  addUser,
  addUserFailure,
  addUserSuccess, deleteUser, deleteUserFailure, deleteUserSuccess,
  updateUser,
  updateUserFailure,
  updateUserSuccess
} from "../actions/user.actions";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() =>
      this.userService.getUsers().pipe(
        map(users => UserActions.loadUsersSuccess({ users })),
        catchError(error => of(UserActions.loadUsersFailure({ error })))
      )
    )
  )
);


  // Add User
  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      mergeMap(action =>
        this.userService.addUser(action.user).pipe(
          map(user => addUserSuccess({ user })),
          catchError(error => of(addUserFailure({ error })))
        )
      )
    )
  );

  // Update User
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      mergeMap(action =>
        this.userService.updateUser(action.user).pipe(
          map(user => updateUserSuccess({ user })),
          catchError(error => of(updateUserFailure({ error })))
        )
      )
    )
  );

  // Delete User
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      mergeMap(action =>
        this.userService.deleteUser(action.id).pipe(
          map(() => deleteUserSuccess({ id: action.id })),
          catchError(error => of(deleteUserFailure({ error })))
        )
      )
    )
  );


}


