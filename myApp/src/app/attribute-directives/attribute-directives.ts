import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-attribute-directives',
  //  standalone: true, 
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css',
})
export class AttributeDirectives {

  textColor : string = '';

  changeColor(color : string){
    this.textColor = color;
  }

  isTextGreen : boolean = false;

  userClass : string = '';

  styleColor : string = "";
  updateColor(ngStyleColor:string){
    this.styleColor = ngStyleColor;
  }

  isTextOrange:boolean = false;

  customClass:any = {
    'color':'pink',
    'height':'150px',
    'width':'400px',
    'border':'2px solid black'
  }

}
