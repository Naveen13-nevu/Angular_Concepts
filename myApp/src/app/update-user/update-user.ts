import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { CRUD } from '../crud/crud';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.css',
})
export class UpdateUser implements OnInit{


  updateUserForm : FormGroup;

  constructor(private crud : Crud, private activateRoute : ActivatedRoute, private router : Router, private fb : FormBuilder ){
    
    this.updateUserForm = this.fb.group({
      id:[''],
    name: [''],
    userName:[''] ,
    email:[''] 
  })

  }

  userData : any;

  userId!:{
    uid:number
  }

ngOnInit(): void {

  this.userId = {
    uid: Number(this.activateRoute.snapshot.params['id'])
  };

  this.crud.getDataById(this.userId.uid).subscribe(res => {

    this.userData = res;

    this.updateUserForm.setValue({
      id: this.userData.id,
      name: this.userData.name,
      userName: this.userData.userName,
      email: this.userData.email
    });

  });

}
onSubmit(){
  this.crud.putDataById(this.userId.uid,this.updateUserForm.value).subscribe(res =>{
    this.router.navigateByUrl("/crud")
  })
}
 onCancel(){

    this.router.navigateByUrl("/crud")
  }
}
