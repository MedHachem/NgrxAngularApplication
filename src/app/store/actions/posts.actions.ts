import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Post} from "../../core/models/post.model";

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ posts: Post[] }>(),
    'Load Posts Failure': props<{ error: any }>(),

    'Delete Post':props<{ id: number }>(),
    'Delete Post Success':props< {id:number}>(),
    'Delete Post Failure' :props<{error:any}>(),
  }
});
