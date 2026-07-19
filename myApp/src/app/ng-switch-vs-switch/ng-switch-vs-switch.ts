import { Component } from '@angular/core';
import { NgSwitch } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-ng-switch-vs-switch',
  imports: [NgSwitch],
  templateUrl: './ng-switch-vs-switch.html',
  styleUrl: './ng-switch-vs-switch.css',
})
export class NgSwitchVsSwitch {
  
  grade : number=0;
  set(x:number){
    this.grade = x;
  }
}
