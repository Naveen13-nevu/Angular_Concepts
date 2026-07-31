import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { Iuser } from '../Iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule,],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit {
  apiData : Iuser[] = [];

  constructor(private crud : Crud, private route : Router){

  }
  ngOnInit(): void {
      this.getAllData();
  }



 getAllData() {
  console.log('getAllData() called');

  this.crud.getData().subscribe({
    next: (res) => {
      console.log('API Response:', res);
      this.apiData = res;
    },
    error: (err) => {
      console.error('API Error:', err);
    }
  });
}


  addNewUser(){
    this.route.navigateByUrl("/adduser");
  }

  onUpdate(id : number){
    this.route.navigate(['updateuser',id]);
  }

}
