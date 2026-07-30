import { Component, Directive, inject, signal } from '@angular/core';

import { MyComponent } from './Component/my-component/my-component';
import { User } from './service/user';
import { AppDirectives } from './app-directives/app-directives';
import { NgForVsFor } from './ng-for-vs-for/ng-for-vs-for';
import { NgSwitchVsSwitch } from './ng-switch-vs-switch/ng-switch-vs-switch';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Signals } from './signals/signals';
import { LinkedSignal } from './linked-signal/linked-signal';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RxjsBasic } from './rxjs-basic/rxjs-basic';
import { RxjsOperators } from './rxjs-operators/rxjs-operators';
import { SubBehReplay } from './sub-beh-replay/sub-beh-replay';
import { CustomerAdd } from './customer-add/customer-add';
import { CustomerView } from './customer-view/customer-view';
import { Customer } from './models/customer/customer';
import { ReactiveForm } from './reactive-form/reactive-form';
import { ProfileComponent } from './profile-component/profile-component';
import { Crud } from './crud';
import { CRUD } from './crud/crud';
// import { RxjsBasic } from './rxjs-basic/rxjs-basic';


@Component({
  selector: 'app-root',
  //  standalone: true, 
  imports: [
    // RouterOutlet,
    // RouterLink,
    // RouterLinkActive
    // MyComponent,
    // AppDirectives,
    // NgForVsFor,
    // NgSwitchVsSwitch,
    // AttributeDirectives,
    // Signals,
    // LinkedSignal
    // RxjsBasic
    // RxjsOperators
    // SubBehReplay
    // CustomerAdd,
    // CustomerView
    // ReactiveForm
    // ProfileComponent
    CRUD
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');

  customers : Customer[] = [];

  getCustmoers(customers : Customer[]){
    this.customers = customers;
    
    // private con = inject(User);
    // users = this.con.getUsers();
  }
}
