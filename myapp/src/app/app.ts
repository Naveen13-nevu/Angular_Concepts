import { Component, Directive, inject, signal } from '@angular/core';

import { MyComponent } from './Component/my-component/my-component';
import { User } from './service/user';
import { AppDirectives } from './app-directives/app-directives';
import { NgForVsFor } from './ng-for-vs-for/ng-for-vs-for';
import { NgSwitchVsSwitch } from './ng-switch-vs-switch/ng-switch-vs-switch';


@Component({
  selector: 'app-root',
  imports: [
    // MyComponent
    // AppDirectives,
    // NgForVsFor
    NgSwitchVsSwitch
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');

  private con = inject(User);
  users = this.con.getUsers();
}
