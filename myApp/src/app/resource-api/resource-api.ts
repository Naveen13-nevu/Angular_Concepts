import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from '../service/resource';
import { FormsModule } from "@angular/forms";
import { Reusable } from '../reusable/reusable';

@Component({
  selector: 'app-resource-api',
  standalone: true,
  imports: [CommonModule, FormsModule,Reusable],
  templateUrl: './resource-api.html',
  styleUrls: ['./resource-api.css']
})
export class ResourceApi implements OnInit {

  parentProperty : string = "Resource Api"

  apiData: any;

  constructor(private resource: Resource) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    
    // this.apiData = this.resource.usersResource;

    this.apiData = this.resource.resourceData;

  }

}