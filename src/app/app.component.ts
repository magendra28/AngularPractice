import { Component } from '@angular/core';

import { DUMMY_USERS } from './user/dummy-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';

  users = DUMMY_USERS;
  selectedUserId?:string

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string){
    console.log('User selected with ID'+id);
    this.selectedUserId = id;

  }

}
