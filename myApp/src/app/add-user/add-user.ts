import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveForm } from '../reactive-form/reactive-form';
import { Crud } from '../crud';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  addUserForm : FormGroup;


constructor(private router : Router, private fb:  FormBuilder, private crud : Crud){

  this.addUserForm = this.fb.group({
    name: [''],
    userName:[''] ,
    email:[''] 
  })
}

onSubmit(){
  console.log(this.addUserForm.value);
  this.crud.postData(this.addUserForm.value).subscribe(res => {
    this.router.navigateByUrl("/crud")
  })
  
}

onCancel(){
  this.router.navigateByUrl("/crud")
}

}
