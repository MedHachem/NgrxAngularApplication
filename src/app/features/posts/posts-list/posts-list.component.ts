import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../../core/models/post.model";
import {Store} from "@ngrx/store";
import {selectUsers, selectUsersError, selectUsersLoading} from "../../../store/selectors/user.selectors";
import {
  selectPosts,
  selectPostsError,
  selectPostsLoading,
  selectPostState
} from "../../../store/selectors/post.selector";
import {PostsActions} from "../../../store/actions/posts.actions";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit{
  posts$!: Observable<Post[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPosts);
    this.loading$ = this.store.select(selectPostsLoading);
    this.error$ = this.store.select(selectPostsError);
  }
  ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }


}
