import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();
    // this.users = [
      // { id: 1, name: 'Yamada', email: 'yamada@example.com' },
      // { id: 2, name: 'Suzuki', email: 'suzuki@example.com' },
      // { id: 3, name: 'Yamada', email: 'tanaka@example.com' },
    // ];
  }

}
