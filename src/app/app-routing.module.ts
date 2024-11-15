import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "./features/users/users-list/users-list.component";
import {PostsListComponent} from "./features/posts/posts-list/posts-list.component";

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'posts', component: PostsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
