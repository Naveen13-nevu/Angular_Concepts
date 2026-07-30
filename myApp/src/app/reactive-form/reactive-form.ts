import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  reactiveForm : FormGroup;

  constructor(){
    this.reactiveForm = new FormGroup({

      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(),
      isChecked: new FormControl(),

      address : new FormGroup({
        city : new FormControl(""),
        street : new FormControl(""),
        pincode : new FormControl(),

      })
    })

  
  }
    onSubmit(){
      console.log(this.reactiveForm.value);
    }

    setAllValues(){
      this.reactiveForm.setValue({
        firstName : "Naveen",
        lastName : "Kumar",
        email: "naveen@gmail.com",
        password : 123456,
        isChecked : true,
        address : {
          city : "chennai",
          street : "new st",
          pincode:123456
        }
      })
    }

}
