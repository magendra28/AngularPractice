import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) id!: string;
  // instead of creating each and every variable collect an object at a time
  @Input({required:true}) user!:User
  @Input() selected!: boolean
  @Output() select = new EventEmitter<string>();

  get imagePath(){ // this is a getter method for property binding for images
    return 'assets/users/' + this.user.avatar
  }

  onSelectedUser(){
    // when we click on the user it will emit something
    this.select.emit(this.user.id);
    
  }

}
