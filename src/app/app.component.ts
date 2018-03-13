import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];
  constructor() {
    let user = new User();
    user.firstName = 'Brian';
    user.lastName = 'Noyes';
    user.email = 'brian.noyes@gmail.com';
    this.users.push(user);
    user = new User();
    user.firstName = 'Fred';
    user.lastName = 'Flintstone';
    user.email = 'fred@bedrock.com';
    this.users.push(user);
  }
}
