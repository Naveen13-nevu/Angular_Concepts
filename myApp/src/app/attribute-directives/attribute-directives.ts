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


}
