import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../../core/services/user.service";
import {PostService} from "../../core/services/post.service";
import * as UserActions from "../actions/user.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {PostsActions} from "../actions/posts.actions";

@Injectable()
export class PostEffects{
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map(posts => PostsActions.loadPostsSuccess({ posts })),
          catchError(error => of(PostsActions.loadPostsFailure({ error })))
        )
      )
    )
  );


}
