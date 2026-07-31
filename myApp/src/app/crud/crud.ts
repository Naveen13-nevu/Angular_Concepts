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



  getAllData(){
    this.crud.getData().subscribe(res => {
      console.log(res);
      
      this.apiData = res;
    })
  }


  addNewUser(){
    this.route.navigateByUrl("/adduser");
  }

  onupdate(id : number){
    this.route.navigate(['updateuser',id]);
  }

}
