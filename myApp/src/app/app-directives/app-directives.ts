import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './app-directives.html',
  styleUrl: './app-directives.css',
})
export class AppDirectives {

  isChecked: boolean = false;
  isInputBox : boolean = true;
  input1 : string ='';
  input2 : string='';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField(){
this.isInputBox = true;
  }
  hideField(){
this.isInputBox=false;
  }
}