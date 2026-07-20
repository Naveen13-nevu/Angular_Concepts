import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-switch-vs-switch',
  imports: [],
  templateUrl: './ng-switch-vs-switch.html',
  styleUrl: './ng-switch-vs-switch.css',
})
export class NgSwitchVsSwitch {
  
  grade : number=0;
  set(x:number){
    this.grade = x;
  }
}
