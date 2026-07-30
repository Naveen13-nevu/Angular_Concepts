import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { Iuser } from '../Iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit {
  apiData : Iuser[] = [];

  constructor(private crud : Crud){

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

}
