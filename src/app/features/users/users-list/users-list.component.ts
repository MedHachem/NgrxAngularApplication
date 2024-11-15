import {Component, OnInit} from '@angular/core';
import {async, Observable} from "rxjs";
import {User} from "../../../core/models/user.model";
import {Store, StoreModule} from "@ngrx/store";
import {selectUsers, selectUsersError, selectUsersLoading} from '../../../store/selectors/user.selectors';
import {AsyncPipe, CommonModule} from "@angular/common";
import {addUser, deleteUser, loadUsers, updateUser} from "../../../store/actions/user.actions";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-users-list',
  standalone: true, // Le composant est autonome
  imports: [CommonModule, StoreModule,FormsModule], // Import des modules nécessaires
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  newUser: User = { id: 0, name: '', email: '' };

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectUsersLoading);
    this.error$ = this.store.select(selectUsersError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
  onAddUser(): void {
    this.store.dispatch(addUser({ user: this.newUser }));
  }

  onUpdateUser(user: User): void {
    this.store.dispatch(updateUser({ user }));
  }

  onDeleteUser(id: number): void {
    this.store.dispatch(deleteUser({ id }));
  }
}
