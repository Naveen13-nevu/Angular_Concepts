import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {of} from 'rxjs'
import { CustomPipe } from '../custom-pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule, CustomPipe],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css',
})
export class BuiltInPipes {

  mobileNumber : any = 65545456;


  angularPipes : string = "angular temp";

  personData = {
    name : 'jhon',
    age : 12,
    address  : "chennai"
  }

  currentDate : Date = new Date();

  items = of(['apple', 'banana', 'mango'])

}
