import { Component, inject, signal } from '@angular/core';

import { MyComponent } from './Component/my-component/my-component';
import { User } from './service/user';

@Component({
  selector: 'app-root',
  imports: [MyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');

  private con = inject(User);
  users = this.con.getUsers();
}
